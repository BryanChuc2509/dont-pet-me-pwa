import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'Dont Pet Me',
        short_name: 'Dont Pet Me',
        description: 'La aventura de Mochi',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#f7eadb',
        theme_color: '#f7eadb',
        lang: 'es',
        icons: [
          {
            src: '/pwa-icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        navigateFallback: '/',
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api-dont-pet-me-pwa-production\.up\.railway\.app\/api\//,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'api-responses',
              networkTimeoutSeconds: 5,
              cacheableResponse: {
                statuses: [0, 200],
              },
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24,
              },
            },
          },
          {
            urlPattern: /^https:\/\/api-dont-pet-me-pwa-production\.up\.railway\.app\/imagenes\//,
            handler: 'CacheFirst',
            options: {
              cacheName: 'api-images',
              cacheableResponse: {
                statuses: [0, 200],
              },
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
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
        target: 'https://api-dont-pet-me-pwa-production-af6d0e9a.up.railway.app',
        changeOrigin: true,
      },
      '/imagenes': {
        target: 'https://api-dont-pet-me-pwa-production-af6d0e9a.up.railway.app',
        changeOrigin: true,
      },
    },
  },
})
