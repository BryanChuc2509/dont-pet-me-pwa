import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'
import { queryClient } from './queries'
import { warmOfflineCache } from './offlineWarmup'

// Limpia la copia antigua en localStorage (ahora los datos viven en IndexedDB).
try {
  Object.keys(localStorage)
    .filter((key) => key.startsWith('dont-pet-me:api:'))
    .forEach((key) => localStorage.removeItem(key))
} catch {
  // localStorage puede no estar disponible (modo privado); no es crítico.
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)

// Precarga datos e imágenes de todas las secciones para uso sin conexión,
// cuando la página ya terminó de cargar y otra vez al recuperar la red.
const warmUp = () => void warmOfflineCache(queryClient)
if (document.readyState === 'complete') warmUp()
else window.addEventListener('load', warmUp, { once: true })
window.addEventListener('online', warmUp)
