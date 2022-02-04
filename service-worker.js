let cacheName = "chatal restaurant";
let cacheFiles = [
  "/",
  "/index.html",
  "/fallback.html",
  "/styles/styles.css",
  "/js/app.js",
  "/images",
  "/assets/img",
  "/manifest.json",
];

// start service worker to install
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("caching assets...");
        cache.addAll(cacheFiles);
      })
      .catch((err) => console.log("not caching", err))
  );
  self.skipWaiting();
});

// activate
self.addEventListener("activate", function (e) {
  self.clients.claim();
  console.log("service work activated!!");
});

// serve cached content to work offline
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches
      .match(e.request)
      .then((response) => {
        return response || fetch(e.request);
      })
      .catch((e) => {
        if (e.request.url.indexOf(".html") > -1) {
          return caches.match("/fallback.html");
        }
      })
  );
});
