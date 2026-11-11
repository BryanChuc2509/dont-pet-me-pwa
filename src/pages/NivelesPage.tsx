import { Link } from 'react-router-dom'
import huella from '../assets/huella.svg'
import { useQuery } from '@tanstack/react-query'
import { getImageUrl, getLevels } from '../api'
import { RouteMessage } from '../components/RouteMessage'

export function NivelesPage() {
  const levelsQuery = useQuery({ queryKey: ['niveles'], queryFn: getLevels })

  if (levelsQuery.isPending) return <RouteMessage title="Cargando niveles..." />
  if (levelsQuery.isError) return <RouteMessage title="No se pudieron cargar los niveles" error />

  return (
    <section className="levels-page" aria-labelledby="levels-title">
      <img className="levels-page__paw levels-page__paw--left" src={huella} alt="" aria-hidden="true" />
      <img className="levels-page__paw levels-page__paw--right" src={huella} alt="" aria-hidden="true" />

      <h1 id="levels-title">Niveles</h1>

      <div className="levels-grid">
        {levelsQuery.data.map((level, index) => (
          <Link className="level-card" to="/jugabilidad" key={level.nombre} aria-label={`Jugar nivel ${level.nombre}`}>
            <div className={`level-card__scene level-card__scene--${index === 0 ? 'room' : 'hallway'}`}>
              <span className="level-card__prop level-card__prop--one" />
              <span className="level-card__prop level-card__prop--two" />
              <img src={getImageUrl(level.imagen)} alt="" />
            </div>
            <h2>{level.nombre}</h2>
          </Link>
        ))}
      </div>
    </section>
  )
}
