import { BackgroundImageLayer } from '@/components/ui/BackgroundImageLayer'
import { paragraphKey } from '@/lib/theme'
import type { MinistryLandingContent } from '@/lib/specs/types'

type MinistryLandingInspirationProps = {
  inspiration: MinistryLandingContent['inspiration']
}

export function MinistryLandingInspiration({
  inspiration,
}: MinistryLandingInspirationProps) {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <BackgroundImageLayer
        src={inspiration.backgroundImage}
        variant="contain"
        opacity={0.15}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          {inspiration.title}{' '}
          <span className="text-primary">{inspiration.titleHighlight}</span>
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
          {inspiration.paragraphs.map((paragraph) => (
            <p key={paragraphKey(paragraph)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
