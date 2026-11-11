import { controls } from '../data/gameplay'
import { ControlCard } from '../components/ControlCard'

export function JugabilidadPage() {
  return (
    <section className="gameplay-page" aria-labelledby="gameplay-title">
      <header className="gameplay-page__intro">
        <h1 id="gameplay-title">Jugabilidad</h1>
        <p>Moverse, explorar y descansar</p>
      </header>

      <section aria-labelledby="controls-title">
        <div className="mb-[27px] grid grid-cols-[1fr_auto_1fr] items-center gap-[38px] max-[639px]:mb-5 max-[639px]:gap-[15px]">
          <span className="h-0.5 bg-[#e3d3c4]" />
          <h2 id="controls-title" className="m-0 font-body text-[26px] font-extrabold uppercase leading-none max-[639px]:text-base">
            Controles
          </h2>
          <span className="h-0.5 bg-[#e3d3c4]" />
        </div>
        <div className="grid gap-4 max-[639px]:gap-[10px]">
          {controls.map((control) => (
            <ControlCard control={control} key={control.action} />
          ))}
        </div>
      </section>

      <section className="gameplay-copy" aria-labelledby="unexpected-title">
        <h2 id="unexpected-title">Lo inesperado</h2>
        <p>
          A lo largo de los niveles aparecen eventos aleatorios que intentan impedir que el jugador avance.
          Algunos no ocurren siempre en el mismo lugar ni de la misma forma, así que nadie puede confiarse del todo,
          aunque ya conozca el nivel.
        </p>
        <p>Ejemplos:</p>
        <ul>
          <li>Una plataforma que parecía segura se desprende al pisarla.</li>
          <li>Un libro cae de un estante en el peor momento.</li>
          <li>Un elemento aparece de la nada hacia el camino.</li>
          <li>Un objeto inofensivo resulta ser una trampa.</li>
        </ul>
      </section>

      <section className="gameplay-copy" aria-labelledby="progression-title">
        <h2 id="progression-title">La progresión</h2>
        <p>
          La progresión es lineal, y las semillas y la estructura del recorrido indican el camino.
          Como Mochi es pequeño y frágil, cada paso requiere lo justo: anticiparse, cruzar el vacío,
          que la plataforma se mueva y avanzar hacia la libertad.
        </p>
      </section>
    </section>
  )
}
