<script>
    import '../app.css';
    import 'aos/dist/aos.css';
    import { Toasts } from 'svoast';

    import Header from '$lib/component/Header.svelte';
    import Footer from '$lib/component/Footer.svelte';

    const ogImage = `${import.meta.env.VITE_SITE_URL}/og.png`;
</script>

<svelte:head>
    <title>
        {import.meta.env.VITE_APP_NAME} | Faizal Chan's Website
    </title>

    <meta property="og:title" content={import.meta.env.VITE_APP_NAME} />
    <meta property="og:site_name" content="Faizal Chan's Website" />
    <meta property="og:type" content="website" />
    <meta
        property="og:description"
        content="Coding portfolios by Faizal Chan."
    />
    <meta property="og:image" content={ogImage} />

    <script
        src="https://www.googletagmanager.com/gtag/js?id=UA-131278165-1"
        async
    ></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', 'UA-131278165-1');
    </script>
</svelte:head>

<Header />
<slot />
<Footer />
<Toasts position={'bottom-center'} />
