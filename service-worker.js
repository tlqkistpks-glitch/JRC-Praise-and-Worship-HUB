/* =========================================================================
   Service worker — makes the app installable and usable offline.

   IMPORTANT: bump CACHE_VERSION every time you update any file (especially
   data.js after adding songs). This is what tells installed apps on
   members' phones "there's a new version, go fetch it." If you forget to
   bump it, people who already installed the app may keep seeing the old
   song list even after you redeploy.
   ========================================================================= */

const CACHE_VERSION = "jrc-chords-v1";

const CORE_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./main.js",
  "./data.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
  "./icons/favicon-16.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(CORE_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Network-first for the core app files (so updates are picked up quickly
// whenever there's a connection), falling back to cache when offline.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
  );
});
