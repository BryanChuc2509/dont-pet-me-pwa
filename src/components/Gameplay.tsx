import { Link } from 'react-router-dom'
import hamster from '../assets/hamster-jumping.svg'

export function Gameplay() {
  return (
    <section className="relative flex min-h-[590px] flex-col items-center px-5 pt-[250px] max-[1190px]:min-h-[285px] max-[1190px]:px-6 max-[1190px]:pt-10 mb-15 mt-15" id="jugabilidad">
      <img className="mb-8 w-[220px] max-[1190px]:mb-4 max-[1190px]:w-[160px]" src={hamster} alt="Mochi corriendo" />
      <h2 className="mb-7 max-w-[760px] text-center font-body text-[24px] font-extrabold leading-[1.13] max-[1190px]:mb-6 max-[1190px]:max-w-[500px] max-[1190px]:text-[32px] md:text-[clamp(44px,3vw,64px)]">
        CORRE, SALTA Y RESUELVE ACERTIJOS EN UN JUEGO DE PLATAFORMAS 3D LLENO DE SORPRESAS
      </h2>
<Link
              className="inline-flex h-10 w-[170px] items-center justify-between rounded-full border border-brown px-1 pl-7 text-xs transition-colors hover:bg-brown hover:text-cream max-[1190px]:h-9 max-[1190px]:w-[176px] max-[1190px]:pl-7 max-[1190px]:text-[11px]"
              to={"/jugabilidad"}
            >
              <span>Ver Jugabilidad</span>
              <span className="grid size-8 place-items-center rounded-full bg-brown text-lg text-cream max-[1190px]:size-7 max-[1190px]:text-base" aria-hidden="true">↗</span>
            </Link>      {/* <img className="absolute bottom-[50px] right-[19%] w-[86px] rotate-[10deg] max-[1190px]:bottom-3 max-[1190px]:right-[15%] max-[1190px]:w-[52px]" src={huella} alt="" aria-hidden="true" /> */}
    </section>
  )
}