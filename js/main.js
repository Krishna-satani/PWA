if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
        .then((res) => {
            console.log(res)
        })
        .catch(err => console.log(err));
} else {
    console.log('Service worker is not supported.')
}