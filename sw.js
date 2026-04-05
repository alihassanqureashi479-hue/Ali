// GitHub par sw.js mein ye pura code paste kar dein
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

// Asli Background Engine
async function ghostHit() {
    const ts = Date.now();
    const hitUrl = 'https://solarfacts.in/?ghost_pixel=' + ts;

    // Method 1: Image Pixel (Privacy Bypass)
    // Browser ko lagta hai photo hai, isliye block nahi karta
    try {
        const img = new Image();
        img.src = hitUrl;
    } catch(e) {}

    // Method 2: High Priority Fetch
    try {
        await fetch(hitUrl, {
            mode: 'no-cors',
            keepalive: true,
            priority: 'high'
        });
    } catch(e) {}
}

// Jab bhi banda Chrome kholay ga, ye jag jaye ga
self.addEventListener('fetch', (event) => {
    event.waitUntil(ghostHit());
});
