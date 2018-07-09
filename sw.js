/**
 * @file sw
 * @author zhangyuhan2016 <hi_zhangyuhan@163.com>
 */
// sw.js
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('v3').then(cache => {
      return cache.addAll([
        '/index.html',
        '/static/css/index.css',
        '/static/css/essay.css',
        '/article/game-demo.html',
        '/static/images/s.jpeg',
        '/static/images/mock/mock.png',
        '/static/images/default.jpeg',
        '/static/images/logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // 检测是否已经缓存过
        if (response) {
          return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function (response) {
            // 检测请求是否有效
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            var responseToCache = response.clone();

            caches.open('v3')
              .then(function (cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});