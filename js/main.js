if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/PWA/service-worker.js', { scope: '/PWA/' })
        .then((res) => {
            console.log(res)
        })
        .catch(err => console.log(err));
} else {
    console.log('Service worker is not supported.')
}