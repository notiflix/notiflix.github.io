'use strict';

var CACHE_DATE = new Date();
var CACHE_VERSION = CACHE_DATE.getFullYear() + '-' + ('0' + (new Date().getMonth() + 1)).slice(-2) + '-' + ('0' + new Date().getDate()).slice(-2);

var CURRENT_CACHES = {
  offline: 'offline-' + CACHE_VERSION
};
var OFFLINE_URL = '/500.html';

var createCacheBustedRequest = function (url) {
  var request = new Request(url, { cache: 'reload' });
  if ('cache' in request) {
    return request;
  }
  var bustedUrl = new URL(url, self.location.href);
  bustedUrl.search += (bustedUrl.search ? '&' : '') + 'cachebust=' + Date.now();
  return new Request(bustedUrl);
};

self.addEventListener('install', function (event) {
  event.waitUntil(
    fetch(createCacheBustedRequest(OFFLINE_URL)).then(function (response) {
      return caches.open(CURRENT_CACHES.offline).then(function (cache) {
        return cache.put(OFFLINE_URL, response);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function (key) {
    return CURRENT_CACHES[key];
  });

  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (expectedCacheNames.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function (event) {
  if (event.request.mode === 'navigate' ||
    (event.request.method === 'GET' &&
      event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request).catch(function () {
        return caches.match(OFFLINE_URL);
      })
    );
  }
});
