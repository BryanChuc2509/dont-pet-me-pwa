import { useOnlineStatus } from '../useOnlineStatus'

export function OfflineBanner() {
  const online = useOnlineStatus()
  if (online) return null

  return (
    <p
      className="sticky top-0 z-50 m-0 bg-brown px-4 py-2 text-center text-xs text-cream"
      role="status"
      aria-live="polite"
    >
      Estás sin conexión. Se muestran los datos guardados en tu dispositivo.
    </p>
  )
}
