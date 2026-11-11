import type { Control } from '../data/gameplay'

export function ControlCard({ control }: { control: Control }) {
  return (
    <article className="grid min-h-[135px] grid-cols-[30%_36%_34%] items-center rounded-[15px] bg-[#fae9d8] max-[639px]:min-h-[60px] max-[639px]:grid-cols-[88px_minmax(0,1fr)_112px]">
      <div className="grid h-[95px] place-items-center border-r border-[#d5b9a2] max-[639px]:h-[45px]">
        <img
          className="max-h-[105px] w-[185px] max-w-[90%] object-contain max-[639px]:max-h-[37px] max-[639px]:w-[72px]"
          src={control.keyImage}
          alt={control.keyAlt}
        />
      </div>
      <div className="grid h-[95px] place-items-center max-[639px]:h-[45px]">
        <img
          className="h-[112px] w-[260px] max-w-full object-contain max-[639px]:h-[42px] max-[639px]:w-[83px]"
          src={control.characterImage}
          alt={control.characterAlt}
        />
      </div>
      <div className="px-5 max-[639px]:px-2">
        <h2 className="mb-2 font-body text-[17px] font-extrabold uppercase leading-none max-[639px]:mb-[3px] max-[639px]:text-[9px]">
          {control.action}
        </h2>
        <p className="m-0 font-body text-[12px] leading-[1.15] max-[639px]:text-[7px]">
          {control.description}
        </p>
      </div>
    </article>
  )
}
