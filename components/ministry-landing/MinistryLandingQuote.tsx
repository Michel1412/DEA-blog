import type { MinistryLandingContent } from '@/lib/specs/types'

type MinistryLandingQuoteProps = {
  quote: MinistryLandingContent['quote']
}

export function MinistryLandingQuote({ quote }: MinistryLandingQuoteProps) {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-6xl text-primary/30 mb-6">&ldquo;</div>
        <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-foreground/90 text-balance">
          {quote.text}
        </blockquote>
        <cite className="text-lg text-primary font-medium">— {quote.author}</cite>
      </div>
    </section>
  )
}
