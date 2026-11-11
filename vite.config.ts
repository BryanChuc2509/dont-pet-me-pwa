import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

const API_ORIGIN = 'https://api-dont-pet-me-pwa-production-af6d0e9a.up.railway.app'

// Deben coincidir con los nombres usados en src/offlineWarmup.ts
const API_CACHE = 'api-responses'
const IMAGE_CACHE = 'api-images'

// Nota: las funciones urlPattern se copian tal cual dentro de sw.js, por eso
// no pueden usar variables de este archivo (el origen va escrito literal).

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeManifestIcons: false, // ya entran por globPatterns
      devOptions: {
        enabled: true,
        navigateFallback: '/index.html',
      },
      manifest: {
        id: '/',
        name: 'Dont Pet Me',
        short_name: 'Dont Pet Me',
        description: 'La aventura de Mochi',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'any',
        background_color: '#f7eadb',
        theme_color: '#f7eadb',
        lang: 'es',
        icons: [
          { src: '/pwa-icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/pwa-icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: '/pwa-icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Todo el "app shell" queda precacheado: la app abre sin conexión.
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,ttf}'],
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        // Debe ser una URL precacheada; "/" no lo es y rompía la instalación del SW.
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api\//, /^\/imagenes\//],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            // Datos: red primero, y si no hay red (o tarda) se sirve la última copia.
            urlPattern: ({ url, sameOrigin }) =>
              url.pathname.startsWith('/api/') &&
              (sameOrigin ||
                url.origin === 'https://api-dont-pet-me-pwa-production-af6d0e9a.up.railway.app'),
            handler: 'NetworkFirst',
            options: {
              cacheName: API_CACHE,
              networkTimeoutSeconds: 4,
              cacheableResponse: { statuses: [200] },
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
          {
            // Imágenes de la API: caché primero (son pesadas y casi no cambian).
            urlPattern: ({ url, sameOrigin }) =>
              url.pathname.startsWith('/imagenes/') &&
              (sameOrigin ||
                url.origin === 'https://api-dont-pet-me-pwa-production-af6d0e9a.up.railway.app'),
            handler: 'CacheFirst',
            options: {
              cacheName: IMAGE_CACHE,
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 80,
                maxAgeSeconds: 60 * 60 * 24 * 30,
                purgeOnQuotaError: true,
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: API_ORIGIN,
        changeOrigin: true,
      },
      '/imagenes': {
        target: API_ORIGIN,
        changeOrigin: true,
      },
    },
  },
})
