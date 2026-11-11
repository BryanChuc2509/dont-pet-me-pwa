import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/dontpetme-logo.svg'

const navigation = [
  { label: 'Historia', path: '/historia' },
  { label: 'Personajes', path: '/personajes' },
  { label: 'Jugabilidad', path: '/jugabilidad' },
  { label: 'Niveles', path: '/niveles' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="relative z-10 mx-auto flex h-[110px] max-w-[1040px] items-center justify-center px-6 max-[1190px]:h-[62px] max-[1190px]:justify-between max-[1190px]:px-11">
      <nav className="flex flex-1 justify-around max-[1190px]:hidden" aria-label="Navegación principal">
        {navigation.slice(0, 2).map((item) => <Link className="text-[13px] uppercase transition-opacity hover:opacity-60" to={item.path} key={item.path}>{item.label}</Link>)}
      </nav>
      <Link className="w-[108px] shrink-0 max-[1190px]:w-[78px]" to="/" aria-label="Don't Pet Me, inicio">
        <img className="block w-full" src={logo} alt="Don't Pet Me" />
      </Link>
      <nav className="flex flex-1 justify-around max-[1190px]:hidden" aria-label="Navegación secundaria">
        {navigation.slice(2).map((item) => <Link className="text-[13px] uppercase transition-opacity hover:opacity-60" to={item.path} key={item.path}>{item.label}</Link>)}
      </nav>
      <button className="hidden border-0 bg-transparent max-[1190px]:flex max-[1190px]:flex-col max-[1190px]:gap-1" type="button" aria-label="Abrir menú" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="h-[3px] w-[22px] bg-brown" />
        <span className="h-[3px] w-[22px] bg-brown" />
        <span className="h-[3px] w-[22px] bg-brown" />
      </button>
      {menuOpen && (
        <nav className="absolute right-8 top-14 flex flex-col gap-3 rounded-lg bg-brown p-5 text-right text-sm text-cream shadow-lg min-[1191px]:hidden" aria-label="Menú móvil">
          {navigation.map((item) => <Link onClick={() => setMenuOpen(false)} to={item.path} key={item.path}>{item.label}</Link>)}
        </nav>
      )}
      <span className="sr-only">Ruta actual: {location.pathname}</span>
    </header>
  )
}
