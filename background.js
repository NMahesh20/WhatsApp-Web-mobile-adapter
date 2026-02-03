// macOS Firefox user agent for WhatsApp Web
const MACOS_FIREFOX_UA =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:122.0) Gecko/20100101 Firefox/122.0";

// Function to register web request listener
function registerWebRequestListener() {
    try {
        browser.webRequest.onBeforeSendHeaders.addListener(
            (details) => {
                const headers = details.requestHeaders;
                const ua = MACOS_FIREFOX_UA;

                // Find and update User-Agent header
                for (let i = 0; i < headers.length; i++) {
                    if (headers[i].name.toLowerCase() === "user-agent") {
                        headers[i].value = ua;
                        break;
                    }
                }

                return { requestHeaders: headers };
            },
            { urls: ["*://web.whatsapp.com/*"] },
            ["blocking", "requestHeaders"],
        );
        // console.log(
        //     "User Agent Switcher: webRequest listener registered",
        // );
    } catch (error) {
        console.error(
            "User Agent Switcher: Failed to register listener",
            error,
        );
    }
}

// Register listener on startup
registerWebRequestListener();
