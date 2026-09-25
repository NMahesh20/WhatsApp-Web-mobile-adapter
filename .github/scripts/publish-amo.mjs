#!/usr/bin/env node
/**
 * Publishes a built extension to addons.mozilla.org using the v5 submission API.
 *
 * Docs: https://addons-server.readthedocs.io/en/latest/topics/api/addons.html
 *       https://blog.mozilla.org/addons/2022/03/17/new-api-for-submitting-and-updating-add-ons/
 *
 * Flow:
 *   1. POST /addons/upload/                  -> upload uuid (validation happens here)
 *   2. GET  /addons/upload/<uuid>/           -> poll until `valid` is true
 *   3. POST /addons/addon/<id>/versions/     -> attach the upload as a new version
 *   4. PATCH /addons/addon/<id>/versions/<version id>/ -> attach the source zip
 *
 * Step 3 and 4 are separate on purpose: `compatibility`/`release_notes` are
 * complex values and can only be sent as JSON, while `source` has to be sent as
 * multipart/form-data.
 *
 * Environment:
 *   AMO_JWT_KEY      (required) API key from https://addons.mozilla.org/en-US/developers/addon/api/key/
 *   AMO_JWT_SECRET   (required) matching API secret
 *   AMO_XPI          (required) path to the .xpi to submit
 *   AMO_SOURCE       (optional) path to the source .zip to attach to the version
 *   AMO_VERSION      (optional) version to submit, read from the xpi manifest when unset
 *   AMO_RELEASE_NOTES (optional) release notes text, used as-is
 *   AMO_ADDON_ID     (optional) numeric id, slug or guid of the add-on
 *   AMO_CHANNEL      (optional) "listed" (default) or "unlisted"
 *   AMO_LICENSE      (optional) SPDX license slug, e.g. MIT
 *   AMO_BROWSERS     (optional) comma separated apps, e.g. "firefox,android"
 *   AMO_WAIT_FOR_REVIEW (optional) seconds to wait for the version to go public, 0 disables (default)
 */

import { createHmac, randomUUID } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { basename } from "node:path";

const API_ROOT =
    process.env.AMO_API_ROOT || "https://addons.mozilla.org/api/v5";
const ADDON_ID =
    process.env.AMO_ADDON_ID || "whatsapp-web-mobile-adapter@mahesh";
const CHANNEL = process.env.AMO_CHANNEL || "listed";
const LICENSE = process.env.AMO_LICENSE || "MIT";
const BROWSERS = (process.env.AMO_BROWSERS || "firefox,android")
    .split(",")
    .map((app) => app.trim())
    .filter(Boolean);
const WAIT_FOR_REVIEW = Number(process.env.AMO_WAIT_FOR_REVIEW || 0);
const JWT_KEY = process.env.AMO_JWT_KEY;
const JWT_SECRET = process.env.AMO_JWT_SECRET;
const XPI_PATH = process.env.AMO_XPI;
const SOURCE_PATH = process.env.AMO_SOURCE;
const RELEASE_NOTES = (process.env.AMO_RELEASE_NOTES || "").trim();

const log = (msg) => console.log(`[amo] ${msg}`);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** AMO rejects tokens that live longer than 5 minutes, so mint one per request. */
function createJwt() {
    if (!JWT_KEY || !JWT_SECRET) {
        throw new Error(
            "AMO_JWT_KEY and AMO_JWT_SECRET must be set (see https://addons.mozilla.org/en-US/developers/addon/api/key/)",
        );
    }
    const issuedAt = Math.floor(Date.now() / 1000);
    const encode = (value) =>
        Buffer.from(JSON.stringify(value)).toString("base64url");
    const signingInput = `${encode({ alg: "HS256", typ: "JWT" })}.${encode({
        iss: JWT_KEY,
        jti: randomUUID(),
        iat: issuedAt,
        exp: issuedAt + 60,
    })}`;
    const signature = createHmac("sha256", JWT_SECRET)
        .update(signingInput)
        .digest("base64url");
    return `${signingInput}.${signature}`;
}

async function request(path, { method = "GET", form, json } = {}) {
    const headers = { Authorization: `JWT ${createJwt()}` };
    let body;
    if (form) {
        // fetch adds the multipart boundary itself, so Content-Type must be left alone here.
        body = form;
    } else if (json) {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify(json);
    }
    const response = await fetch(`${API_ROOT}${path}`, {
        method,
        headers,
        body,
    });
    const text = await response.text();
    let payload;
    try {
        payload = text ? JSON.parse(text) : {};
    } catch {
        payload = { detail: text };
    }
    if (!response.ok) {
        throw new Error(
            `${method} ${path} failed (${response.status}): ${JSON.stringify(payload)}`,
        );
    }
    return payload;
}

async function fileBlob(path) {
    const stats = await stat(path);
    const bytes = await readFile(path);
    // The filename has to be part of the multipart entry, AMO rejects uploads named "blob".
    const file =
        typeof File === "function"
            ? new File([bytes], basename(path), { type: "application/zip" })
            : new Blob([bytes], { type: "application/zip" });
    return { file, size: stats.size, name: basename(path) };
}

function toForm(fields) {
    const form = new FormData();
    for (const [key, value] of Object.entries(fields)) {
        if (value === undefined || value === null || value === "") continue;
        if (value.file) form.append(key, value.file, value.name);
        else form.append(key, value);
    }
    return form;
}

/** Reads the version number out of the xpi's manifest, which is what AMO will publish. */
async function readManifestVersion(xpi) {
    if (process.env.AMO_VERSION) return process.env.AMO_VERSION.trim();
    const { execFileSync } = await import("node:child_process");
    const manifest = execFileSync("unzip", ["-p", xpi, "manifest.json"], {
        maxBuffer: 10 * 1024 * 1024,
    });
    return JSON.parse(manifest.toString()).version;
}

async function alreadySubmitted(version) {
    const list = await request(
        `/addons/addon/${ADDON_ID}/versions/?filter=all_with_unlisted&page_size=25`,
    );
    return (list.results || []).some((result) => result.version === version);
}

async function uploadXpi(xpi) {
    const file = await fileBlob(xpi);
    log(
        `uploading ${file.name} (${file.size} bytes) to the ${CHANNEL} channel`,
    );
    let upload = await request("/addons/upload/", {
        method: "POST",
        form: toForm({ channel: CHANNEL, upload: file.file }),
    });
    if (upload.processed && upload.valid) return upload.uuid;
    if (upload.processed)
        throw new Error(
            `upload rejected by validation: ${JSON.stringify(upload.validation?.messages || upload.errors)}`,
        );

    const deadline = Date.now() + 10 * 60 * 1000;
    while (Date.now() < deadline) {
        await sleep(5000);
        upload = await request(`/addons/upload/${upload.uuid}/`);
        if (!upload.processed) continue;
        if (upload.valid) return upload.uuid;
        throw new Error(
            `validation failed: ${JSON.stringify(upload.validation?.messages || upload.errors)}`,
        );
    }
    throw new Error("timed out waiting for upload validation");
}

async function createVersion(uuid, version) {
    const payload = {
        upload: uuid,
        compatibility: BROWSERS,
        release_notes: { "en-US": RELEASE_NOTES || `v${version}` },
    };
    if (LICENSE) payload.license = LICENSE;
    log(`creating version ${version} for ${BROWSERS.join(" + ")}`);
    return request(`/addons/addon/${ADDON_ID}/versions/`, {
        method: "POST",
        json: payload,
    });
}

async function attachSource(versionId) {
    if (!SOURCE_PATH) {
        log("no AMO_SOURCE given, skipping source upload");
        return;
    }
    const file = await fileBlob(SOURCE_PATH);
    log(`attaching source ${file.name} (${file.size} bytes)`);
    const version = await request(
        `/addons/addon/${ADDON_ID}/versions/${versionId}/`,
        {
            method: "PATCH",
            form: toForm({ source: file.file, license: LICENSE }),
        },
    );
    if (version.source) log(`source stored at ${version.source}`);
}

async function waitForPublic(versionId) {
    const deadline = Date.now() + WAIT_FOR_REVIEW * 1000;
    while (Date.now() < deadline) {
        const version = await request(
            `/addons/addon/${ADDON_ID}/versions/${versionId}/`,
        );
        if (version.file?.status === "public") {
            log("version is live");
            return;
        }
        await sleep(30000);
    }
    log(
        "version is still awaiting review (it will be published once approved)",
    );
}

async function main() {
    if (!XPI_PATH) throw new Error("AMO_XPI must point at the .xpi to submit");
    await stat(XPI_PATH);
    if (SOURCE_PATH) await stat(SOURCE_PATH);

    const version = await readManifestVersion(XPI_PATH);
    log(`add-on version from manifest: ${version}`);
    if (await alreadySubmitted(version)) {
        log(
            `version ${version} already exists on addons.mozilla.org, nothing to do`,
        );
        return;
    }

    const uuid = await uploadXpi(XPI_PATH);
    log(`upload uuid: ${uuid}`);
    const created = await createVersion(uuid, version);
    log(`submitted version ${created.version} (id ${created.id})`);
    await attachSource(created.id);
    if (created.edit_url) log(`review/edit page: ${created.edit_url}`);
    if (WAIT_FOR_REVIEW > 0) await waitForPublic(created.id);
}

main().catch((error) => {
    console.error(`[amo] ${error.message}`);
    process.exit(1);
});
