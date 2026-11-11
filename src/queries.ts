import { QueryClient } from '@tanstack/react-query'

export const queryKeys = {
  story: ['historia'],
  characters: ['personajes'],
  levels: ['niveles'],
} as const

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Con el modo por defecto ('online') React Query no ejecuta la consulta
      // sin conexión y la página se queda en "Cargando..." para siempre.
      // 'offlineFirst' la ejecuta igual, y api.ts responde con los datos guardados.
      networkMode: 'offlineFirst',
      staleTime: 5 * 60 * 1000,
      gcTime: 24 * 60 * 60 * 1000,
      retry: (failureCount) => navigator.onLine && failureCount < 2,
      refetchOnReconnect: true,
    },
  },
})
