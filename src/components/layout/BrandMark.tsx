import { Link } from 'react-router'

export function BrandMark({ compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center"
      aria-label="Fork & Founders — home"
    >
      <img
        src="/1.png"
        alt="Fork & Founders — We Build. You Grow."
        className={`${compact ? 'h-10' : 'h-12'} w-auto max-w-[210px] object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
      />
    </Link>
  )
}
