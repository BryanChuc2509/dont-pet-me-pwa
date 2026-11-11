export function RouteMessage({ title, error = false }: { title: string; error?: boolean }) {
  return (
    <section className="flex min-h-[65vh] items-center justify-center px-8 text-center">
      <h1 className="font-body text-4xl font-extrabold">{title}</h1>
      {error && <p role="alert">Inténtalo de nuevo más tarde.</p>}
    </section>
  )
}
