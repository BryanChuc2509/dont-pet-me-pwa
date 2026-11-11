import { OfflineError } from '../api'

type RouteMessageProps = {
  title: string
  error?: unknown
  onRetry?: () => void
}

export function RouteMessage({ title, error, onRetry }: RouteMessageProps) {
  const offline = error instanceof OfflineError

  return (
    <section className="flex min-h-[65vh] flex-col items-center justify-center gap-4 px-8 text-center">
      <h1 className="font-body text-4xl font-extrabold">{offline ? 'Sin conexión' : title}</h1>
      {error !== undefined && (
        <>
          <p role="alert">
            {offline
              ? 'Este contenido aún no se ha guardado en tu dispositivo. Conéctate a internet una vez para poder verlo sin conexión.'
              : 'Inténtalo de nuevo más tarde.'}
          </p>
          {onRetry && (
            <button
              className="rounded-full border border-brown px-6 py-2 text-sm transition-colors hover:bg-brown hover:text-cream"
              type="button"
              onClick={onRetry}
            >
              Reintentar
            </button>
          )}
        </>
      )}
    </section>
  )
}
