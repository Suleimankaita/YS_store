self.addEventListener('install', event => {
    console.log('Service Worker installed');
    self.skipWaiting();
  });
  
  self.addEventListener('activate', event => {
    console.log('Service Worker activated');
  });
  
  self.addEventListener('message', event => {
    if (event.data.simulatePush) {
      self.registration.showNotification('Simulated Push', {
        body: 'This is a simulated background notification!',
        tag: 'sim-push',
        data: { time: new Date().toLocaleTimeString() }
      });
    }
  });
  