const CACHE_NAME = 'big-hand-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// 安裝並快取檔案
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// 攔截請求，讓 App 讀取快取（實現秒開）
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});