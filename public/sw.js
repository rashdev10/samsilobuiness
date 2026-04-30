const STATIC_CACHE = "samsilo-static-v1";
const RUNTIME_CACHE = "samsilo-runtime-v1";
const PRECACHE_URLS = [
  "/",
  "/about",
  "/services",
  "/packages",
  "/retainership",
  "/blog",
  "/contact",
  "/offline.html",
  "/manifest.webmanifest",
  "/samsilo-favicon-32.png",
  "/samsilo-favicon-64.png",
  "/samsilo-favicon-192.png",
  "/samsilo-favicon-256.png",
  "/samsilo-favicon-512.png",
  "/diagonal.avif",
  "/images/campus-digital-service.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(PRECACHE_URLS.map((url) => new Request(url, { cache: "reload" }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  const expectedCaches = new Set([STATIC_CACHE, RUNTIME_CACHE]);

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(cacheNames.filter((cacheName) => !expectedCaches.has(cacheName)).map((cacheName) => caches.delete(cacheName)))
      )
      .then(() => self.clients.claim())
  );
});

async function networkFirst(request) {
  const cache = await caches.open(RUNTIME_CACHE);

  try {
    const response = await fetch(request);

    if (response && response.ok) {
      cache.put(request, response.clone());
    }

    return response;
  } catch {
    const cachedResponse = await cache.match(request);
    return cachedResponse || caches.match("/offline.html");
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cachedResponse = await cache.match(request);
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response && response.ok) {
        cache.put(request, response.clone());
      }

      return response;
    })
    .catch(() => cachedResponse);

  return cachedResponse || fetchPromise;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/") || url.pathname.includes("webpack-hmr")) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(staleWhileRevalidate(request));
});
