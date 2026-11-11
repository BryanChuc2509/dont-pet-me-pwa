import { CharacterCard } from '../components/CharacterCard'
import { RouteMessage } from '../components/RouteMessage'
import { getCharacters, getImageUrl } from '../api'
import { useQuery } from '@tanstack/react-query'
import { queryKeys } from '../queries'

export function PersonajesPage() {
  const charactersQuery = useQuery({ queryKey: queryKeys.characters, queryFn: getCharacters })

  if (charactersQuery.isPending) return <RouteMessage title="Cargando personajes..." />
  if (charactersQuery.isError) {
    return (
      <RouteMessage
        title="No se pudieron cargar los personajes"
        error={charactersQuery.error}
        onRetry={() => void charactersQuery.refetch()}
      />
    )
  }

  return (
    <section className="characters-page" aria-labelledby="characters-title">
      <h1 id="characters-title">Personajes</h1>
      <div className="characters-grid">
        {charactersQuery.data.map((character) => (
          <CharacterCard
            character={{
              name: character.titulo,
              role: character.rol,
              image: character.imagen ? getImageUrl(character.imagen) : undefined,
            }}
            key={character.titulo}
          />
        ))}
      </div>
    </section>
  )
}
