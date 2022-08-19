self.addEventListener("install", (event) => {
  console.log("Service Worker registered successfully.");
});

self.addEventListener('fetch', (event) => {
  // Fetch with cache: https://stackoverflow.com/questions/46541071/progressive-web-app-does-not-work-offline-error
  const startFetch = async (event, options) => {
    const { withCache = false } = options ?? {};
  
    if (!withCache) {
      return fetch(event.request);
    }
  
    try{
      const res = await fetch(event.request);
      const cache = await caches.open('cache');
  
      cache.put(event.request.url, res.clone());
  
      return res;
    } catch(error) {
      return caches.match(event.request);
    }
  };

  event.respondWith(startFetch(event));
});