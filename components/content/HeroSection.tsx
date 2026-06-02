import { HeroBackgroundCarousel } from '@/components/content/HeroBackgroundCarousel'
import { BackgroundImageLayer } from '@/components/ui/BackgroundImageLayer'
import { GradientOverlay } from '@/components/ui/GradientOverlay'
import { HeroLogo } from '@/components/ui/HeroLogo'
import { contentContainerNarrow, heroOverlayDefault } from '@/lib/theme'
import type { heroSchema } from '@/lib/specs/types'
import type { z } from 'zod'

type HeroData = z.infer<typeof heroSchema>

type HeroSectionProps = {
  hero: HeroData
  compact?: boolean
}

export function HeroSection({ hero, compact = false }: HeroSectionProps) {
  const overlay = hero.overlay ?? heroOverlayDefault
  const minHeight = compact ? 'min-h-[60vh]' : 'min-h-screen'
  const carouselImages =
    hero.backgroundImages && hero.backgroundImages.length > 1
      ? hero.backgroundImages
      : null

  return (
    <section
      className={`${minHeight} flex justify-center items-center p-8 pt-24 text-center relative isolate overflow-hidden`}
    >
      {carouselImages ? (
        <HeroBackgroundCarousel images={carouselImages} overlay={overlay} />
      ) : (
        <>
          <BackgroundImageLayer src={hero.backgroundImage} />
          <GradientOverlay overlay={overlay} />
        </>
      )}
      <div className={`${contentContainerNarrow()} relative z-10`}>
        {hero.logo && (
          <HeroLogo
            src={hero.logo.src}
            alt={hero.logo.alt}
            width={hero.logo.width ?? 180}
            height={hero.logo.height ?? 180}
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
