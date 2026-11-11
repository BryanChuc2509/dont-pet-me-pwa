// Almacén persistente (IndexedDB) para las respuestas JSON de la API.
const DATABASE_NAME = 'dont-pet-me-offline'
const DATABASE_VERSION = 1
const STORE_NAME = 'entries'

type StoredEntry = {
  key: string
  value: unknown
  savedAt: number
}

let databasePromise: Promise<IDBDatabase> | undefined

function openDatabase(): Promise<IDBDatabase> {
  if (!('indexedDB' in window)) return Promise.reject(new Error('IndexedDB no disponible'))

  databasePromise ??= new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION)

    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE_NAME)) {
        request.result.createObjectStore(STORE_NAME, { keyPath: 'key' })
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  }).catch((error: unknown) => {
    databasePromise = undefined
    throw error
  })

  return databasePromise
}

export async function saveOfflineEntry(key: string, value: unknown) {
  try {
    const database = await openDatabase()
    await new Promise<void>((resolve, reject) => {
      const transaction = database.transaction(STORE_NAME, 'readwrite')
      transaction.objectStore(STORE_NAME).put({ key, value, savedAt: Date.now() } satisfies StoredEntry)
      transaction.oncomplete = () => resolve()
      transaction.onerror = () => reject(transaction.error)
      transaction.onabort = () => reject(transaction.error)
    })
  } catch (error) {
    console.warn(`No se pudo guardar ${key} en IndexedDB`, error)
  }
}

export async function readOfflineEntry<T>(key: string): Promise<T | undefined> {
  try {
    const database = await openDatabase()
    return await new Promise<T | undefined>((resolve, reject) => {
      const request = database.transaction(STORE_NAME, 'readonly').objectStore(STORE_NAME).get(key)
      request.onsuccess = () => resolve((request.result as StoredEntry | undefined)?.value as T | undefined)
      request.onerror = () => reject(request.error)
    })
  } catch (error) {
    console.warn(`No se pudo leer ${key} desde IndexedDB`, error)
    return undefined
  }
}
