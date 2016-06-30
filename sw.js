// 'use strict';
var dataCacheName = 'teamOneToday';
var cacheName = 't1Today';
var filesToCache = [
  '/',
  '/index.html',
  '/media/js/main.js',
  '/media/js/calendar.js',
  '/media/stylesheets/screen.css',
  '/media/images/today_header4.jpg',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

// console.log('Started', self);

// self.addEventListener('install', function(event) {
//   self.skipWaiting();
//   console.log('Installed', event);
// });

// self.addEventListener('activate', function(event) {
//   console.log('Activated', event);
// });

// self.addEventListener('push', function(event) {
//   console.log('Push message', event);

//   var title = 'Push message';

//   event.waitUntil(
//     self.registration.showNotification(title, {
//       'body': 'The Message',
//       'icon': 'images/icon.png'
//     }));
// });

// self.addEventListener('notificationclick', function(event) {
//   console.log('Notification click: tag', event.notification.tag);
//   // Android doesn't close the notification when you click it
//   // See http://crbug.com/463146
//   event.notification.close();
//   var url = 'https://youtu.be/gYMkEMCHtJ4';
//   // Check if there's already a tab open with this URL.
//   // If yes: focus on the tab.
//   // If no: open a tab with the URL.
//   event.waitUntil(
//     clients.matchAll({
//       type: 'window'
//     })
//     .then(function(windowClients) {
//       console.log('WindowClients', windowClients);
//       for (var i = 0; i < windowClients.length; i++) {
//         var client = windowClients[i];
//         console.log('WindowClient', client);
//         if (client.url === url && 'focus' in client) {
//           return client.focus();
//         }
//       }
//       if (clients.openWindow) {
//         return clients.openWindow(url);
//       }
//     })
//   );
// });


// TODO

// self refers to the ServiceWorkerGlobalScope 
// object: the service worker itself

// TIP: By default an old service worker will stay running until 
// all tabs that use it are closed or unloaded. A new service worker 
// will remain in the waiting state.

// When skipWaiting() is called (as in the code above) 
// the service worker will skip the waiting state and immediately activate.

// Version 0.1
