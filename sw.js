importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js');

if (workbox) {

	// Cache static
	workbox.routing.registerRoute(
		/\.(?:js|css|json)$/,
		workbox.strategies.staleWhileRevalidate({
		cacheName: 'static'
		})
	);

	// Precache html files
	  workbox.precaching.precacheAndRoute([
		'index.html',
		'questions/*',
		'coding-questions/*',
		'css-questions/*',
		'fun-questions/*',
		'js-questions/*',
		'performance-questions/*',
		'testing-questions/*',
		'general-questions/*',
	  ]);

  // Cache requested images
	workbox.routing.registerRoute(
		/\.(?:png|gif|jpg|jpeg|svg|webp)$/,
		workbox.strategies.cacheFirst({
		cacheName: 'img',
		plugins: [
			new workbox.expiration.Plugin({
			maxEntries: 60,
			maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
			})
		]
		})
	);

} else {
  console.log(`Sorry, Couldn't load Workbox`);
}