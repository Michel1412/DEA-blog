import { BackgroundImageLayer } from '@/components/ui/BackgroundImageLayer'
import { goldText, ministryNameGlow } from '@/lib/theme'
import type { MinistryLandingContent } from '@/lib/specs/types'

type MinistryLandingHeroProps = {
  hero: MinistryLandingContent['hero']
}

export function MinistryLandingHero({ hero }: MinistryLandingHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <BackgroundImageLayer src={hero.backgroundImage} />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className={`text-5xl md:text-7xl font-bold mb-4 text-balance ${ministryNameGlow()}`}
        >
          <span className={goldText()}>{hero.highlight}</span> {hero.title}
        </h1>
        <p className="text-2xl md:text-3xl font-light mb-6 text-foreground/90">
          {hero.subtitle}
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mb-10">{hero.tagline}</p>

        <a
          href={hero.ctaHref}
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
        >
          {hero.ctaLabel}
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  )
}
