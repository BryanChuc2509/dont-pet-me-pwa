const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? (
  import.meta.env.DEV ? '' : 'https://api-dont-pet-me-pwa-production.up.railway.app'
)

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

async function get<T>(path: string): Promise<T> {
  const response = await fetch(resolveUrl(path))

  if (!response.ok) {
    throw new Error(`La API respondió con ${response.status} al solicitar ${path}`)
  }

  return response.json() as Promise<T>
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
