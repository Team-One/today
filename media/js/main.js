'use strict';

// TODO

// The following code checks if service worker is supported by your browser, 
// then registers and installs the service worker you created in sw.js 

var reg;
var sub;
var isSubscribed = false;
var subscribeButton = document.querySelector('button');


if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js')
             .then(function() { console.log('Service Worker Registered'); });
  }

// if ('serviceWorker' in navigator) {
//   console.log('Service Worker is supported');
//   navigator.serviceWorker.register('sw.js').then(function() {
//     return navigator.serviceWorker.ready;
//   }).then(function(serviceWorkerRegistration) {
//     reg = serviceWorkerRegistration;
//     subscribeButton.disabled = false;
//     console.log('Service Worker is ready :^)', reg);
//   }).catch(function(error) {
//     console.log('Service Worker Error :^(', error);
//   });
// }

// subscribeButton.addEventListener('click', function() {
//   if (isSubscribed) {
//     unsubscribe();
//   } else {
//     subscribe();
//   }
// });

// function subscribe() {
//   reg.pushManager.subscribe({userVisibleOnly: true}).
//   then(function(pushSubscription) {
//     sub = pushSubscription;
//     console.log('Subscribed! Endpoint:', sub.endpoint);
//     subscribeButton.textContent = 'Unsubscribe';
//     isSubscribed = true;
//   });
// }

// function unsubscribe() {
//   sub.unsubscribe().then(function(event) {
//     subscribeButton.textContent = 'Subscribe';
//     console.log('Unsubscribed!', event);
//     isSubscribed = false;
//   }).catch(function(error) {
//     console.log('Error unsubscribing', error);
//     subscribeButton.textContent = 'Subscribe';
//   });
// }
