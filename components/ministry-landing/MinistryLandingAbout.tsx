import { paragraphKey } from '@/lib/theme'
import type { MinistryLandingContent } from '@/lib/specs/types'

type MinistryLandingAboutProps = {
  about: MinistryLandingContent['about']
}

export function MinistryLandingAbout({ about }: MinistryLandingAboutProps) {
  return (
    <section id="about" className="py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="bg-background border border-border rounded-2xl p-8 md:p-12 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
            {about.title}
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraphKey(paragraph)}>{paragraph}</p>
            ))}
            {about.highlight && (
              <p className="text-primary/80 italic">{about.highlight}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
