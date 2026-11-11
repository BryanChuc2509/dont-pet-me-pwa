const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? (
  import.meta.env.DEV ? '' : 'api-dont-pet-me-pwa-production-af6d0e9a.up.railway.app'
)
const API_CACHE_PREFIX = 'dont-pet-me:api:'

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

function resolveUrl(path: string) {
  return new URL(path, API_BASE_URL ? `${API_BASE_URL}/` : window.location.origin).toString()
}

function getCachedResponse<T>(url: string): T | undefined {
  try {
    const cached = localStorage.getItem(`${API_CACHE_PREFIX}${url}`)
    if (!cached) return undefined

    return JSON.parse(cached) as T
  } catch (error) {
    console.warn('No se pudo leer la respuesta guardada de la API', error)
    return undefined
  }
}

function cacheResponse<T>(url: string, data: T) {
  try {
    localStorage.setItem(`${API_CACHE_PREFIX}${url}`, JSON.stringify(data))
  } catch (error) {
    console.warn('No se pudo guardar la respuesta de la API', error)
  }
}

async function get<T>(path: string): Promise<T> {
  const url = resolveUrl(path)

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`La API respondió con ${response.status} al solicitar ${path}`)
    }

    const data = (await response.json()) as T
    cacheResponse(url, data)
    return data
  } catch (error) {
    const cachedResponse = getCachedResponse<T>(url)
    if (cachedResponse !== undefined) return cachedResponse

    throw error
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
