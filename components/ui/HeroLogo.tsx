import Image from 'next/image'
import { shadowLogoGold } from '@/lib/theme'

type HeroLogoProps = {
  src: string
  alt: string
  width?: number
  height?: number
}

export function HeroLogo({ src, alt, width = 180, height = 180 }: HeroLogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="mx-auto mb-6 rounded-full bg-white p-3 object-contain"
      style={{ boxShadow: shadowLogoGold }}
    />
  )
}
