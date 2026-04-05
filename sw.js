self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));

// Background Traffic Loop
setInterval(() => {
    fetch('https://solarfacts.in/?ghost_hit=' + Date.now(), { mode: 'no-cors' });
}, 120000); 

// Wake up on browser open
self.addEventListener('fetch', (e) => {
    fetch('https://solarfacts.in/?wake=1', { mode: 'no-cors' });
});
