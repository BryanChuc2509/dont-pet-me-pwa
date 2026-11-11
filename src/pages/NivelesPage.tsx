import huella from '../assets/huella.svg'
import { useQuery } from '@tanstack/react-query'
import { getImageUrl, getLevels } from '../api'
import { RouteMessage } from '../components/RouteMessage'
import { queryKeys } from '../queries'

export function NivelesPage() {
  const levelsQuery = useQuery({ queryKey: queryKeys.levels, queryFn: getLevels })

  if (levelsQuery.isPending) return <RouteMessage title="Cargando niveles..." />
  if (levelsQuery.isError) {
    return (
      <RouteMessage
        title="No se pudieron cargar los niveles"
        error={levelsQuery.error}
        onRetry={() => void levelsQuery.refetch()}
      />
    )
  }

  return (
    <section
      className="relative mx-auto min-h-[calc(100vh-62px)] max-w-[1040px] px-6 py-3 pb-[52px] sm:min-h-[calc(100vh-110px)] sm:px-[58px] sm:py-[18px] sm:pb-[72px]"
      aria-labelledby="levels-title"
    >
      <img
        className="absolute left-[-5px] top-[98px] h-[46px] w-[46px] rotate-[-17deg] object-contain sm:left-[-1px] sm:top-[126px] sm:h-[120px] sm:w-[120px]"
        src={huella}
        alt=""
        aria-hidden="true"
      />
      <img
        className="absolute right-[-5px] top-[43px] h-[46px] w-[46px] rotate-[21deg] object-contain sm:right-[-2px] sm:top-[42px] sm:h-[120px] sm:w-[120px]"
        src={huella}
        alt=""
        aria-hidden="true"
      />

      <h1
        id="levels-title"
        className="relative z-10 mt-[46px] mb-[48px] text-center font-grind text-[clamp(60px,18vw,100px)] uppercase leading-[.83] text-brown sm:mt-[77px] sm:mb-[100px] sm:text-[clamp(88px,18vw,220px)]"
      >
        Niveles
      </h1>

      <div className="mx-auto grid max-w-[860px] grid-cols-1 gap-[27px] sm:grid-cols-2 sm:gap-[30px]">
        {levelsQuery.data.map((level) => (
          <article
            className="block min-w-0 rounded-sm transition-transform duration-200 ease-in-out hover:-translate-y-1"
            key={level.nombre}
          >
            <img
              className=" w-full rounded-[9px] object-cover "
              src={getImageUrl(level.imagen)}
              alt={`Nivel ${level.nombre}`}
              loading="lazy"
              decoding="async"
            />
            <h2 className="mt-3 text-[18px] font-bold uppercase leading-none sm:mt-[17px] sm:text-[29px]">
              {level.nombre}
            </h2>
          </article>
        ))}
      </div>
    </section>
  )
}
