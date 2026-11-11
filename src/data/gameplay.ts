import wasd from '../assets/WASD.svg'
import espace from '../assets/ESPACE.svg'
import shift from '../assets/SHIFT.svg'
import movement from '../assets/mochi-movement.svg'
import jumping from '../assets/mochi-jumping.svg'
import running from '../assets/mochi-running.svg'
import flying from '../assets/mochi-flying.svg'

export type Control = {
  keyImage: string
  keyAlt: string
  action: string
  description: string
  characterImage: string
  characterAlt: string
}

export const controls: Control[] = [
  {
    keyImage: wasd,
    keyAlt: 'Teclas W, A, S y D',
    action: 'Movimiento',
    description: 'Usa W, A, S y D para moverte',
    characterImage: movement,
    characterAlt: 'Mochi en movimiento',
  },
  {
    keyImage: espace,
    keyAlt: 'Tecla espacio',
    action: 'Salto',
    description: 'Presiona Espacio para saltar',
    characterImage: jumping,
    characterAlt: 'Mochi saltando',
  },
  {
    keyImage: shift,
    keyAlt: 'Tecla shift',
    action: 'Correr',
    description: 'Mantén presionado SHIFT para correr',
    characterImage: running,
    characterAlt: 'Mochi corriendo',
  },
  {
    keyImage: espace,
    keyAlt: 'Tecla espacio',
    action: 'Planeo',
    description: 'Mantén presionado Espacio para planear',
    characterImage: flying,
    characterAlt: 'Mochi planeando',
  },
]
