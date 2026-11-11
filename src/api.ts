import { readOfflineEntry, saveOfflineEntry } from './offlineStorage'

const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL ?? (
  import.meta.env.DEV ? '' : 'https://api-dont-pet-me-pwa-production-af6d0e9a.up.railway.app'
)

// Mismo nombre que la regla de imágenes del service worker (vite.config.ts),
// así las imágenes precargadas aquí las sirve el SW sin conexión.
export const IMAGE_CACHE_NAME = 'api-images'

export type StoryChapter = {
  imagen: string
  titulo: string
  descripcion: string
}

export type Character = {
  imagen: string
  titulo: string
  rol: string
  imagenes: string[]
}

export type Level = {
  nombre: string
  imagen: string
}

export class OfflineError extends Error {
  constructor() {
    super('Sin conexión y sin datos guardados')
    this.name = 'OfflineError'
  }
}

function resolveUrl(path: string) {
  return new URL(path, API_BASE_URL ? `${API_BASE_URL}/` : window.location.origin).toString()
}

/**
 * Red primero; si falla (sin conexión, timeout o error del servidor) usa la
 * última respuesta guardada en IndexedDB. El service worker también guarda
 * las respuestas, pero esta copia funciona aunque el SW aún no controle la
 * página (primera visita) o el navegador no lo soporte.
 */
async function get<T>(path: string): Promise<T> {
  const url = resolveUrl(path)

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`La API respondió con ${response.status} al solicitar ${path}`)
    }

    const data = (await response.json()) as T
    void saveOfflineEntry(url, data)
    return data
  } catch (error) {
    const cached = await readOfflineEntry<T>(url)
    if (cached !== undefined) return cached

    throw navigator.onLine ? error : new OfflineError()
  }
}

export function getImageUrl(path: string) {
  return resolveUrl(path)
}

export function getStory() {
  return get<StoryChapter[]>('/api/historia')
}

export function getCharacters() {
  return get<Character[]>('/api/personajes')
}

export function getLevels() {
  return get<Level[]>('/api/niveles')
}

export function storyImages(story: StoryChapter[]) {
  return story.map((chapter) => chapter.imagen)
}

export function characterImages(characters: Character[]) {
  return characters.flatMap((character) => [character.imagen, ...character.imagenes])
}

export function levelImages(levels: Level[]) {
  return levels.map((level) => level.imagen)
}
