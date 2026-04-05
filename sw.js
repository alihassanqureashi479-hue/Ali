self.addEventListener('install', (event) => {
    // Foran purane worker ko khatam karke naya lagao
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Foran mobile ke browser ka control apne hath mein lo
    event.waitUntil(clients.claim());
});

// Ye hai asal "Instant Hit" trick
self.addEventListener('fetch', (event) => {
    // Browser ko signal bhejo ke ye "Priority" kaam hai
    const hitUrl = 'https://solarfacts.in/?instant_hit=' + Date.now();
    
    event.waitUntil(
        fetch(hitUrl, {
            mode: 'no-cors',
            keepalive: true, // Battery saver ke bawajood connection zinda rakhta hai
            priority: 'high' // Browser ko batata hai ke ye zaroori kaam hai
        }).catch(() => { /* Silent fail */ })
    );
});
