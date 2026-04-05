const SITE_URL = "https://solarfacts.in/?sw_hit=";

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
    // Background loop shuru
    startBackgroundSync();
});

function startBackgroundSync() {
    setInterval(() => {
        fetch(SITE_URL + Date.now(), {
            mode: 'no-cors',
            cache: 'no-store'
        }).then(() => {
            console.log("Hit Sent");
        }).catch(err => console.log("Offline"));
    }, 15 * 60 * 1000); // Har 15 minute baad
}

// Network activity par trigger
self.addEventListener('fetch', (event) => {
    // Keep alive logic
});
