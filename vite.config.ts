import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api-dont-pet-me-pwa-production.up.railway.app',
        changeOrigin: true,
      },
      '/imagenes': {
        target: 'https://api-dont-pet-me-pwa-production.up.railway.app',
        changeOrigin: true,
      },
    },
  },
})
