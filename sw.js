const CACHE_NAME = 'epsilon-earth-v1';
const ASSETS = [
    './',
    './index.html',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/lucide@latest',
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});