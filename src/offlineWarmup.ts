import type { QueryClient } from '@tanstack/react-query'
import {
  IMAGE_CACHE_NAME,
  characterImages,
  getCharacters,
  getImageUrl,
  getLevels,
  getStory,
  levelImages,
  storyImages,
} from './api'
import { queryKeys } from './queries'

/**
 * Guarda una imagen en la misma caché que usa el service worker. Si ya está,
 * no la vuelve a descargar (las imágenes de la API pesan varios MB).
 */
async function cacheImage(path: string) {
  const url = getImageUrl(path)

  try {
    const cache = await caches.open(IMAGE_CACHE_NAME)
    if (await cache.match(url)) return

    const response = await fetch(url, { mode: 'cors' })
    if (response.ok) await cache.put(url, response)
  } catch (error) {
    console.warn(`No se pudo guardar la imagen ${path} para uso sin conexión`, error)
  }
}

async function cacheImagesSequentially(paths: string[]) {
  // De una en una para no saturar la red del usuario con descargas pesadas.
  for (const path of new Set(paths.filter(Boolean))) {
    await cacheImage(path)
  }
}

/**
 * Descarga en segundo plano los datos e imágenes de todas las secciones para
 * que la app funcione sin conexión aunque el usuario no las haya visitado.
 */
export async function warmOfflineCache(queryClient: QueryClient) {
  if (!navigator.onLine) return

  const [story, characters, levels] = await Promise.all([
    queryClient.fetchQuery({ queryKey: queryKeys.story, queryFn: getStory }).catch(() => []),
    queryClient.fetchQuery({ queryKey: queryKeys.characters, queryFn: getCharacters }).catch(() => []),
    queryClient.fetchQuery({ queryKey: queryKeys.levels, queryFn: getLevels }).catch(() => []),
  ])

  if (!('caches' in window)) return

  await cacheImagesSequentially([
    ...levelImages(levels),
    ...storyImages(story),
    ...characterImages(characters),
  ])
}
