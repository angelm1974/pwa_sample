const staticCacheName='wersja-statyczna';
const assets = [
'/',
'/index.html',
'/fallback.html',
'/js/app.js',
'/vendor/fontawesome-free/css/all.min.css',
'/vendor/bootstrap/css/bootstrap.min.css',
'/vendor/simple-line-icons/css/simple-line-icons.css',
'/scss/_mixins.scss',
'https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic',
'/vendor/fontawesome-free/webfonts/fa-brands-400.woff2',
'/css/landing-page.min.css',
'/img/bg-masthead.jpg',
'/img/bg-showcase-1.jpg',
'/img/bg-showcase-2.jpg',
'/img/bg-showcase-3.jpg',
'/img/testimonials-1.jpg',
'/img/testimonials-2.jpg',
'/img/testimonials-3.jpg'
]; 

self.addEventListener('install',evt => {
    //console.log('Service worker został zainstalowany');
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('cachowanie assetów');
            cache.addAll(assets);
        })
    )
});


self.addEventListener('activate',evt => {
    console.log('Service worker został aktywowany');
});

self.addEventListener('fetch',evt => {
    //console.log('Pobranie:',evt);
    evt.respondWith(
        caches.match(evt.request).then(cacheRes =>{
            return cacheRes || fetch(evt.request);
        }).catch(()=> caches.match('/fallback.html'))
    )
});