import mochi from '../assets/mochi.png'
import huella from '../assets/huella.svg'
import { Link } from 'react-router-dom'

export function Hero() {
  return (
    <section className="relative min-h-[510px] px-6 pt-2 max-[1190px]:min-h-[620px] max-[1190px]:px-0 max-[1190px]:pt-8" id="historia">
      <img className="hidden md:absolute left-[6%] top-[350px] w-[150px] -rotate-[15deg] max-[1190px]:left-[4%] max-[1190px]:top-[244px] max-[1190px]:w-16" src={huella} alt="" aria-hidden="true" />
      <img className=" hidden md:absolute right-[7%] top-9 w-[150px] rotate-[12deg] max-[1190px]:right-[3%] max-[1190px]:top-[18px] max-[1190px]:w-16" src={huella} alt="" aria-hidden="true" />
      <div className="mx-auto flex min-h-[490px] w-full flex-col items-center p-4">

        <div className="relative mt-20 max-[1190px]:mt-8 max-[1190px]:min-h-[450px] max-[1190px]:w-full max-[1190px]:max-w-[760px]">
          <h1 className="z-10 mb-4 hero-title font-grind text-center text-brown max-[1190px]:text-[clamp(200px,26vw,260px)]">
            MOCHI
          </h1>
          <img
            className="absolute -left-2 top-8 z-20 mb-4 h-[450px] w-auto object-contain max-[1190px]:left-1/2 max-[1190px]:top-[75px] max-[1190px]:h-[clamp(300px,39vw,300px)] max-[1190px]:-translate-x-1/2"
            src={mochi}
            alt="Mochi, el hámster protagonista"
          />

          <div className="absolute -bottom-45 right-0 max-w-md text-center text-sm leading-[1.18] max-[1190px]:top-[clamp(390px,64vw,390px)] max-[1190px]:right-auto max-[1190px]:w-full max-[1190px]:max-w-none max-[1190px]:px-4">
            <p className="mb-[22px] max-w-sm text-left max-[1190px]:mx-auto max-[1190px]:mb-[30px] max-[1190px]:max-w-[360px] max-[1190px]:text-center">
              Capturado durante un picnic familiar, Mochi solo quiere volver a casa. Ayúdalo a superar plataformas y acertijos antes de que sea tarde.
            </p>
            <Link
              className="inline-flex h-10 w-[170px] items-center justify-between rounded-full border border-brown px-1 pl-7 text-xs transition-colors hover:bg-brown hover:text-cream max-[1190px]:h-9 max-[1190px]:w-[176px] max-[1190px]:pl-7 max-[1190px]:text-[11px]"
              to={"/jugabilidad"}
            >
              <span>Ver Jugabilidad</span>
              <span className="grid size-8 place-items-center rounded-full bg-brown text-lg text-cream max-[1190px]:size-7 max-[1190px]:text-base" aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>


      </div>
    </section>
  )
}
