import { useEffect, useState } from 'react'
import huella from '../assets/huella.svg'

export function Countdown() {
  const calculateTimeLeft = () => {
    // 20 de noviembre de 2026 a las 12:00:00 PM
    const targetDate = new Date('2026-11-20T12:00:00')
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((difference / 1000 / 60) % 60)
    const seconds = Math.floor((difference / 1000) % 60)

    return { days, hours, minutes, seconds }
  }

  const [time, setTime] = useState(calculateTimeLeft)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(calculateTimeLeft())
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  const values = [time.days, time.hours, time.minutes, time.seconds]
  const labels = ['Días', 'Horas', 'Minutos', 'Segundos']

  return (
    <section className="relative min-h-[470px] px-[8%] py-[92px] max-[1190px]:min-h-[285px] max-[1190px]:px-[7%] max-[1190px]:py-[67px] xl:mt-40" id="niveles">
      <img className="absolute right-[26%] -top-15 w-[150px] rotate-[8deg] max-[1190px]:hidden" src={huella} alt="" aria-hidden="true" />
      <p className="mb-3 text-[14px] font-medium max-[1190px]:mb-3 max-[1190px]:text-[11px]">Liberación en itch.io — 20 de Noviembre, 12:00 PM</p>
      <div className="grid grid-cols-4 gap-3 max-[1190px]:gap-2" aria-label="Tiempo para la liberación">
        {values.map((value, index) => (
          <div className="text-center" key={labels[index]}>
            <strong className="block font-counter text-[clamp(54px,8vw,112px)] leading-[.95] tracking-[-.06em] max-[1190px]:text-[clamp(28px,9vw,52px)]">
              {String(value).padStart(2, '0')}
            </strong>
            <span className="mt-3 block text-[12px] font-semibold max-[1190px]:mt-1.5 max-[1190px]:text-[9px]">{labels[index]}</span>
          </div>
        ))}
      </div>
      <img className="absolute bottom-5 left-[13%] w-[150px] -rotate-[12deg] max-[1190px]:bottom-4 max-[1190px]:left-[13%] max-[1190px]:w-[52px]" src={huella} alt="" aria-hidden="true" />
    </section>
  )
}