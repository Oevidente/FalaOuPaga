const CACHE_NAME = 'falaou-paga-v1';
const assets = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  // inclua aqui os caminhos das imagens das cartas
];

// Ao instalar, abre cache e adiciona recursos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(assets)),
  );
});

// Intercepta requisições para servir do cache quando disponível
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request)),
  );
});
