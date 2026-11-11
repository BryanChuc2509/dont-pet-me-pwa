import type { Character } from '../data/characters'

type CharacterCardProps = {
  character: Character
}

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <article>
      {/* Contenedor principal de la tarjeta */}
      <div className="h-[142px] overflow-hidden rounded-xl bg-[#fae9d8] sm:h-[190px] sm:rounded-[15px]">
        {/* Sub-contenedor con Flexbox para centrar horizontalmente y alinear al fondo */}
        <div className="flex h-full w-full items-end justify-center">
          {character.image ? (
            <img
              className={`block h-[133px] w-[106px] object-contain object-bottom sm:h-[176px] sm:w-[140px] ${
                character.imageClass ? 'h-[124px] w-[101px] sm:h-[164px] sm:w-[134px]' : ''
              }`}
              src={character.image}
              alt={`Ilustración de ${character.name}`}
            />
          ) : (
            <span
              className="font-grind text-[88px] leading-[.85] text-brown sm:text-[118px]"
              aria-label="Personaje por descubrir"
            >
              ?
            </span>
          )}
        </div>
      </div>
      <h2 className="mt-2 text-[17px] uppercase leading-none sm:mt-[14px] sm:text-[24px]">{character.name}</h2>
      <p className="m-0 text-[8px] uppercase sm:text-[11px]">{character.role}</p>
    </article>
  )
}