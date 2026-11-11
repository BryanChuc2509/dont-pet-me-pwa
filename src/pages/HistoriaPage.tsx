import { Link } from 'react-router-dom'
import hamster from '../assets/hamster-jumping.svg'
// import huella from '../assets/huella.svg'
import { StoryTimeline } from '../components/StoryTimeline'
import { RouteMessage } from '../components/RouteMessage'
import { getImageUrl, getStory } from '../api'
import { useQuery } from '@tanstack/react-query'

export function HistoriaPage() {
  const storyQuery = useQuery({ queryKey: ['historia'], queryFn: getStory })

  if (storyQuery.isPending) return <RouteMessage title="Cargando historia..." />
  if (storyQuery.isError) return <RouteMessage title="No se pudo cargar la historia" error />

  return (
    <section className="story-page" aria-label="Historia de Mochi">
      <section className="story-intro" aria-labelledby="story-title">
        <div className="story-heading">
          <h1 id="story-title">
            <span>Histo</span>
            {/* <img src={huella} aria-hidden="true" /> */}
            <span>ria</span>
          </h1>
          <p>
            Mochi, un pequeño hámster, fue capturado en el bosque y ahora quiere escapar de la casa para volver con su familia.
          </p>
        </div>
        <img className="story-intro__hamster" src={hamster} alt="Mochi corriendo" />
      </section>

      <StoryTimeline chapters={storyQuery.data} imageUrl={getImageUrl} />

      <Link className="story-back-link" to="/">
        <span aria-hidden="true">←</span> Volver al inicio
      </Link>
    </section>
  )
}
