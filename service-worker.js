
const cachename = "lab02"

self.addEventListener('fetch', function (event) {
    console.log('Fetch', event)
    event.respondWith(
        caches.open(cachename).then(res =>{
            return res.match(event.request).then(storeres => {
                const fetchdata = fetch(event.request).then(fetch_response => {
                    res.put(event.request,fetch_response)
                    
                    return fetch_response

                })
                return storeres || fetchdata
            })
        })
    )
});

self.addEventListener('install', function (event) {
    console.log('install', event)
    self.skipWaiting()
    event.waitUntil(
        caches.open(cachename).then(res => {res.addAll([
            "/",
            "/index.html",
            "/js/main.js",
            "/css/style.css",
            "/manifest.json",
            "/icons/favicon-196.png",
            "/images/loginlogo.png"
        ])})
    
    )
    
});


self.addEventListener('activate', function (event) {
    console.log('activate', event)

    event.waitUntil(clients.claim())
    event.waitUntil(caches.keys().then(ch => {
        return Promise.all(ch.filter(item => item != cachename).map(data => caches.delete(data)))

    }))
    
});