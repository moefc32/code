import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    vite: {
        plugins: [
            tailwindcss(),
            VitePWA({
                manifest: false,
                injectRegister: 'auto',
                registerType: 'autoUpdate',
                filename: 'service-worker.js',
                workbox: {
                    globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,ico,json,woff2}'],
                    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
                },
            }),
        ],
    },
    integrations: [
        svelte(),
    ],
    server: {
        port: 4000,
    },
});
