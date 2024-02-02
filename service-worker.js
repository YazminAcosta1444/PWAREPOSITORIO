self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '../css/estiloIndex.css',
        '../css/estiloMenu.css',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        '../js/ejemplo1.js',
        '../js/listaVideos.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../PWA/service-worker.js');
}

