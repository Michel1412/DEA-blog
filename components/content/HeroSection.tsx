import Image from 'next/image'
import { HeroBackgroundCarousel } from '@/components/content/HeroBackgroundCarousel'
import type { heroSchema } from '@/lib/specs/types'
import type { z } from 'zod'

type HeroData = z.infer<typeof heroSchema>

type HeroSectionProps = {
  hero: HeroData
  compact?: boolean
}

export function HeroSection({ hero, compact = false }: HeroSectionProps) {
  const overlay = hero.overlay ?? 'linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.82))'
  const minHeight = compact ? 'min-h-[60vh]' : 'min-h-screen'
  const carouselImages =
    hero.backgroundImages && hero.backgroundImages.length > 1
      ? hero.backgroundImages
      : null

  return (
    <section
      className={`${minHeight} flex justify-center items-center p-8 pt-24 text-center relative isolate overflow-hidden`}
      style={
        carouselImages
          ? undefined
          : {
              backgroundImage: `${overlay}, url('${hero.backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
      }
    >
      {carouselImages && (
        <HeroBackgroundCarousel images={carouselImages} overlay={overlay} />
      )}
      <div className="relative z-10 max-w-[900px] w-full">
        {hero.logo && (
          <Image
            src={hero.logo.src}
            alt={hero.logo.alt}
            width={hero.logo.width ?? 180}
            height={hero.logo.height ?? 180}
            className="mx-auto mb-6 rounded-full bg-white p-3 object-contain"
            style={{ boxShadow: '0 0 30px rgba(212,175,55,0.4)' }}
          />
        )}
        <h1 className="font-serif text-5xl md:text-7xl text-[#d4af37] leading-tight">
          {hero.title}
        </h1>
        {hero.subtitle && (
          <p className="text-lg md:text-xl mt-4 leading-relaxed">{hero.subtitle}</p>
        )}
        {hero.quote && (
          <p className="text-lg md:text-xl mt-2 leading-relaxed">
            &ldquo;{hero.quote}&rdquo;
          </p>
        )}
      </div>
    </section>
  )
}
