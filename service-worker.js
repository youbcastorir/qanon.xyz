/* ===================================================
   KatibMarrakech.com — Service Worker
   Offline-first PWA caching strategy
   =================================================== */

const CACHE_NAME    = "katib-marrakech-v1.2";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/translations.js",
  "/manifest.json",
  "/offline.html",
  "https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Tajawal:wght@300;400;500;700;800&family=Lato:wght@300;400;700&display=swap"
];

/* ── INSTALL: pre-cache static assets ── */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS.map(url => new Request(url, { cache: "reload" })));
    }).then(() => self.skipWaiting())
  );
});

/* ── ACTIVATE: clean old caches ── */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

/* ── FETCH: network-first for HTML, cache-first for assets ── */
self.addEventListener("fetch", event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and cross-origin API calls
  if (request.method !== "GET") return;
  if (url.origin !== location.origin && !url.hostname.includes("fonts.g")) return;

  // HTML pages: network-first, fallback to cache, then offline page
  if (request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(request, clone));
          return res;
        })
        .catch(() =>
          caches.match(request).then(cached => cached || caches.match("/offline.html"))
        )
    );
    return;
  }

  // Static assets: cache-first, fallback to network
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(res => {
        if (!res || res.status !== 200 || res.type === "opaque") return res;
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(request, clone));
        return res;
      });
    })
  );
});

/* ── BACKGROUND SYNC: queue WhatsApp clicks offline ── */
self.addEventListener("sync", event => {
  if (event.tag === "sync-contact") {
    event.waitUntil(syncContactQueue());
  }
});

async function syncContactQueue() {
  // Placeholder for future offline contact queue sync
  console.log("[SW] Syncing contact queue...");
}

/* ── PUSH NOTIFICATIONS (future use) ── */
self.addEventListener("push", event => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || "كاتب مراكش", {
      body: data.body || "لديك رسالة جديدة",
      icon: "/icons/icon-192.png",
      badge: "/icons/icon-72.png",
      dir: "rtl",
      lang: "ar",
      vibrate: [200, 100, 200],
      data: { url: data.url || "/" }
    })
  );
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || "/")
  );
});
