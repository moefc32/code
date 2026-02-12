<script>
    if (
        'serviceWorker' in navigator &&
        !['localhost', '127.0.0.1'].includes(location.hostname)
    ) {
        addEventListener('load', function () {
            navigator.serviceWorker.register('/service-worker.js');
        });
    }
</script>
