navigator.serviceWorker && navigator.serviceWorker.register('./sw.js').then(function(registration) {
    // console.log('Registered with scope: ', registration.scope);
  });