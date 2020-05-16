self.addEventListener('install',evt => {
    console.log('Service worker został zainstalowany');
});


self.addEventListener('activate',evt => {
    console.log('Service worker został aktywowany');
});

self.addEventListener('fetch',evt => {
    console.log('Pobranie:',evt);
});