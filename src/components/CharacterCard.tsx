import type { Character } from '../data/characters'

type CharacterCardProps = {
  character: Character
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article className="character-card">
      <div className="character-card__portrait">
        {character.image ? (
          <img
            className={character.imageClass}
            src={character.image}
            alt={`Ilustración de ${character.name}`}
          />
        ) : (
          <span className="character-card__unknown" aria-label="Personaje por descubrir">?</span>
        )}
      </div>
      <h2>{character.name}</h2>
      <p>{character.role}</p>
    </article>
  )
}
