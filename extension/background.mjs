const REQUIRED_COOKIE_NAMES = ['__Secure-1PSID', '__Secure-3PSID', '__Secure-1PSIDTS', '__Secure-3PSIDTS'];

// Function to serialize cookies to Netscape HTTP Cookie File format
function serializeNetscape(cookies) {
    const text = [
        '# Netscape HTTP Cookie File',
        '# http://curl.haxx.se/rfc/cookie_spec.html',
        '# This is a generated file! Do not edit.',
        ''
    ];

    cookies.forEach(cookie => {
        const domain = cookie.domain;
        const path = cookie.path;
        const secure = cookie.secure ? 'TRUE' : 'FALSE';
        const expires = cookie.expirationDate ? cookie.expirationDate : 0;
        const name = cookie.name;
        const value = cookie.value;

        const includeSubDomain = domain.startsWith('.') ? 'TRUE' : 'FALSE';

        text.push([domain, includeSubDomain, path, secure, expires, name, value].join('\t'));
    });

    text.push(''); // Add a new line at the end
    return text.join('\n');
}

// Function to write cookies to disk using chrome.downloads API
function writeCookiesToDisk(cookies) {
    const netscapeCookies = serializeNetscape(cookies);
    const base64Data = btoa(netscapeCookies);
    const dataUrl = 'data:text/plain;base64,' + base64Data;

    chrome.downloads.download({
        url: dataUrl,
        filename: 'cookies_netscape.txt',
        conflictAction: 'overwrite',
        saveAs: false
    }, function(downloadId) {
        console.log('Download started with ID:', downloadId);
    });
}

// Function to get and filter cookies
function getCookies() {
    chrome.cookies.getAll({}, (allCookies) => {
        const filteredCookies = allCookies.filter(cookie =>
            REQUIRED_COOKIE_NAMES.includes(cookie.name) &&
            (cookie.domain.includes('.google.com') || cookie.domain.includes('www.google.com'))
        );

        if (filteredCookies.length > 0) {
            writeCookiesToDisk(filteredCookies);
        }
    });
}

// Set an interval to periodically get cookies
setInterval(getCookies, 300000); // 300000 ms = 5 minutes
//setInterval(getCookies, 10000); // 300000 ms = 5 minutes

// Initial call to get cookies
getCookies();

