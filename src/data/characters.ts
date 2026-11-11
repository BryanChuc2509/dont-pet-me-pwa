import mochiImage from '../assets/mochi.png'

export type Character = {
  name: string
  role: string
  image?: string
  imageClass?: string
}

export const characters: Character[] = [
  { name: 'Mochi', role: 'Protagonista', image: mochiImage },
  { name: 'Trufa', role: 'Hermana de Mochi' },
  { name: 'Copo', role: 'Hermano de Mochi' },
  { name: 'Hormigas', role: 'Enemigos', image: mochiImage, imageClass: 'character-card__image--small' },
  { name: 'Araña', role: 'Enemigos', image: mochiImage, imageClass: 'character-card__image--small' },
  { name: 'Leo', role: 'Antagonista' },
]
