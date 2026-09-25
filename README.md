# WhatsApp Web Mobile Adapter

WhatsApp web is not accessible on mobile. So, to enable it, we have to request the desktop site. But on the desktop site, the UI isn't well-suited for mobile.
This Firefox extension adapts WhatsApp Web for mobile by spoofing the device as a PC and applying mobile-friendly overrides.

## Installation for Test

1. Clone or download this repository.
2. Open Firefox Developer Edition on Windows.
3. Go to `about:config` and set `xpinstall.signatures.required` to `false` (for sideloading unsigned extensions).
4. Go to `about:addons`, click the gear icon, and select "Install Add-on From File".
5. Select the extension ZIP file (you need to zip the folder).

## Directions to use this:

URL: [WhatsApp Web Mobile Adapter](https://addons.mozilla.org/en-US/firefox/addon/wa-web-mobile-adapter/)

### On Android (Firefox browser)

1. Install the browser and install this.
2. Visit "web.whatsapp.com" and sign in.
3. Now the UI should be mobile-friendly.

### On iPhone (Orion browser by Kagi)

1. Install the browser and install this.
2. Open Orion, go to Settings -> Privacy ->User Agent -> Custom, and paste the below without any quotes
   "_Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0_"
3. Visit "web.whatsapp.com" and sign in.
4. Now the UI should be mobile-friendly.

**Note: WhatsApp will redirect to "web.whatsapp.com/mobile" if the "Desktop site" or the "User agent" was not changed, so make sure to go back to "web.whatsapp.com" after updating.**

## Features

- Spoofs user agent and screen properties to bypass mobile detection.
- Scales the interface to fit mobile screens.
- Adjusts layout for better mobile usability.

## Files

- `manifest.json`: Extension manifest.
- `background.js`: Background script which intercepts the request headers and changes the user-agent to the desktop version.
- `waa.js`: Content script that injects spoofing and styles.
- `icons/`: Icon files (48x48 and 96x96 PNGs needed).

## Building

To create the extension ZIP:

```bash
zip -r whatsapp-web-mobile-adapter.xpi *
```

Then install the .xpi file in Firefox via `about:addons` > Install Add-on From File.

## Releasing

Tag a version (`0.2.7`), publish a GitHub release, and the **Build and Release** workflow does the rest:

1. Sets `manifest.json` to the tag version, minifies the scripts, and builds `dist/whatsapp-web-adapter-<version>.xpi`.
2. Zips the unminified sources into `dist/source.zip`.
3. Attaches the xpi to the GitHub release.
4. Submits the new version to addons.mozilla.org with the release notes as the version notes, the add-on marked as available for both Firefox and Firefox for Android, and `dist/source.zip` attached as the source code.

Step 4 talks to the AMO v5 submission API ([docs](https://addons-server.readthedocs.io/en/latest/topics/api/addons.html)) through `.github/scripts/publish-amo.mjs`, and needs the API key and secret from [the credentials page](https://addons.mozilla.org/en-US/developers/addon/api/key/) as repository secrets:

```bash
gh secret set AMO_JWT_KEY # the API key, e.g. user:12345678:abcdef
gh secret set AMO_JWT_SECRET
```

The script exits early if the version already exists on AMO, so re-running a failed workflow is safe. Listed versions sit in Mozilla's review queue before they go live, which is usually a few hours to a few days.

To submit from your machine instead:

```bash
AMO_JWT_KEY=... AMO_JWT_SECRET=... \
AMO_XPI=dist/whatsapp-web-adapter-0.2.7.xpi \
AMO_SOURCE=dist/source.zip \
AMO_RELEASE_NOTES="What's new" \
node .github/scripts/publish-amo.mjs
```

## Note

- The browser may inject the User Agent of its own, so workaround it to display the desktop site first and then continue. This was seen on iPhone.
- The extenstion is prone to break as it relies on WhatsApp Web's UI elements. In such cases dont hesitate to raise an issue.
