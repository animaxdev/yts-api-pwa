// This is the service worker with the Cache-first network
// This file comes from https://www.pwabuilder.com/

const CACHE = "pwabuilder-precache";

importScripts(
	"https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
);

self.addEventListener("message", (event) => {
	if (event.data && event.data.type === "SKIP_WAITING") {
		self.skipWaiting();
	}
});

workbox.routing.registerRoute(
	new RegExp("/*"),
	new workbox.strategies.CacheFirst({
		cacheName: CACHE,
	})
);
