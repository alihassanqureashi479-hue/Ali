const SITE_URL = "https://solarfacts.in/?sw_hit=";

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
    // Background loop shuru karo
    startBackgroundSync();
});

function startBackgroundSync() {
    setInterval(() => {
        // Har 15 minute baad background mein hit marega
        fetch(SITE_URL + Date.now(), {
            mode: 'no-cors',
            cache: 'no-store'
        }).then(() => {
            console.log("Background Hit Sent");
        }).catch(err => console.log("Offline"));
    }, 15 * 60 * 1000); // 15 minutes in milliseconds
}

// Jab bhi user koi bhi page load kare, ye trigger ho sakta hai
self.addEventListener('fetch', (event) => {
    // Hidden tracking logic yahan bhi reh sakti hai
});
