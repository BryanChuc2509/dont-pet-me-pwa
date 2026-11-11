import { Link } from 'react-router-dom'

type ActionButtonProps = { children: string; to: string }

export function ActionButton({ children, to }: ActionButtonProps) {
  return (
    <Link
      className="inline-flex h-10 w-[170px] items-center justify-between rounded-full border border-brown px-1 pl-7 text-xs transition-colors hover:bg-brown hover:text-cream max-[1190px]:h-6 max-[1190px]:w-[102px] max-[1190px]:pl-4 max-[1190px]:text-[7px]"
      to={to}
    >
      <span>{children}</span>
      <span className="grid size-8 place-items-center rounded-full bg-brown text-lg text-cream max-[1190px]:size-4 max-[1190px]:text-[10px]" aria-hidden="true">↗</span>
    </Link>
  )
}
