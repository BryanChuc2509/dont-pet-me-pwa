import picnicImage from '../assets/mochi.png'
import roomImage from '../assets/mochi.png'
import hallwayImage from '../assets/mochi.png'

export type StoryChapter = {
  title: string
  description: string
  image: string
  imagePosition: string
}

export const storyChapters: StoryChapter[] = [
  {
    title: 'El picnic',
    description:
      'El bosque era un refugio tranquilo y lleno de rincones para explorar. Una tarde soleada, Mochi se alejó un poco de su madriguera siguiendo...',
    image: picnicImage,
    imagePosition: 'story-card__image--picnic',
  },
  {
    title: 'En la habitación',
    description:
      'Mochi despertó con el cuerpo adolorido y el corazón acelerado. Los barrotes seguían ahí, fríos y reales. Al otro lado se veía un cuarto enorme, lleno de luces...',
    image: roomImage,
    imagePosition: 'story-card__image--room',
  },
  {
    title: 'En el pasillo',
    description:
      'El pasillo era largo y estrecho, y a Mochi le pareció aún más grande que el cuarto. A lo lejos se veía una luz cálida que venía de la sala.',
    image: hallwayImage,
    imagePosition: 'story-card__image--hallway',
  },
]
