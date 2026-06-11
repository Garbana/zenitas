/* Zenitas service worker — programos apvalkalas veikia be ryšio,
   orai ir žvaigždžių katalogai imami iš tinklo, kai jis yra. */
const CACHE = 'zenitas-v3';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;

  // Žvaigždžių katalogai (d3-celestial) — cache-first, nes nesikeičia
  if (url.hostname === 'raw.githubusercontent.com') {
    e.respondWith(
      caches.open(CACHE).then(async c => {
        const hit = await c.match(e.request);
        if (hit) return hit;
        const r = await fetch(e.request);
        if (r.ok) c.put(e.request, r.clone());
        return r;
      })
    );
    return;
  }

  // Orų API — tik tinklas (duomenys turi būti švieži)
  if (url.hostname.includes('open-meteo.com')) return;

  // Programos apvalkalas — network-first su cache atsarga
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(e.request).then(r => {
        if (r.ok) caches.open(CACHE).then(c => c.put(e.request, r.clone()));
        return r;
      }).catch(() => caches.match(e.request).then(h => h || caches.match('./index.html')))
    );
  }
});
