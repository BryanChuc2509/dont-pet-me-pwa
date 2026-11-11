import { Route, Routes } from 'react-router-dom'
import { Countdown } from './components/Countdown'
import { Gameplay } from './components/Gameplay'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HistoriaPage } from './pages/HistoriaPage'
import { PersonajesPage } from './pages/PersonajesPage'
import { JugabilidadPage } from './pages/JugabilidadPage'
import { NivelesPage } from './pages/NivelesPage'
import './App.css'

function HomePage() {
  return <><Hero /><Gameplay /><Countdown /></>
}

function App() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl overflow-hidden bg-cream">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/historia" element={<HistoriaPage />} />
        <Route path="/personajes" element={<PersonajesPage />} />
        <Route path="/jugabilidad" element={<JugabilidadPage />} />
        <Route path="/niveles" element={<NivelesPage />} />
      </Routes>
    </main>
  )
}

export default App
