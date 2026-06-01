import Link from 'next/link'
import { PageShell } from '@/components/layout/PageShell'

export type ListingItem = {
  slug: string
  title: string
  description: string
  path: string
  emoji?: string
  available?: boolean
}

type ListingHero = {
  title: string
  subtitle: string
  backgroundImage?: string
}

type ListingPageTemplateProps = {
  hero: ListingHero
  items: ListingItem[]
  gradient?: 'gold' | 'wine'
  testIdPrefix?: string
  availableLabel?: string
}

const gradientStyles = {
  gold: 'bg-gradient-to-b from-[rgba(212,175,55,0.12)] to-[#0f0f12]',
  wine: 'bg-gradient-to-b from-[rgba(124,31,42,0.25)] to-[#0f0f12]',
}

export function ListingPageTemplate({
  hero,
  items,
  gradient = 'gold',
  testIdPrefix = 'listing',
  availableLabel = 'Ver mais →',
}: ListingPageTemplateProps) {
  const heroStyle = hero.backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.82)), url('${hero.backgroundImage}')`,
        backgroundSize: 'cover' as const,
        backgroundPosition: 'center' as const,
      }
    : undefined

  return (
    <PageShell>
      <section
        className={`min-h-[50vh] flex justify-center items-center p-8 pt-28 text-center ${hero.backgroundImage ? 'bg-cover bg-center relative' : gradientStyles[gradient]}`}
        style={heroStyle}
      >
        <div className="max-w-[800px]">
          <h1 className="font-serif text-5xl md:text-6xl text-[#d4af37] mb-4">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            {hero.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-[1100px] w-[92%] mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => {
            const cardContent = (
              <>
                {item.emoji && (
                  <div className="text-4xl mb-4">{item.emoji}</div>
                )}
                <h2 className="font-serif text-2xl text-[#d4af37] mb-3">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-foreground/85 mb-4">
                  {item.description}
                </p>
                {item.available !== false ? (
                  <span className="inline-block text-sm font-semibold text-[#d4af37]">
                    {availableLabel}
                  </span>
                ) : (
                  <span className="inline-block text-sm text-muted-foreground">
                    Em breve
                  </span>
                )}
              </>
            )

            const cardClass =
              'block p-8 rounded-2xl border border-[rgba(212,175,55,0.15)] bg-[#1b1b20] transition-all hover:border-[rgba(212,175,55,0.4)] hover:shadow-lg'

            if (item.available !== false) {
              return (
                <Link
                  key={item.slug}
                  href={item.path}
                  className={`${cardClass} hover:scale-[1.02]`}
                  data-testid={`${testIdPrefix}-${item.slug}`}
                >
                  {cardContent}
                </Link>
              )
            }

            return (
              <div
                key={item.slug}
                className={`${cardClass} opacity-60 cursor-not-allowed`}
              >
                {cardContent}
              </div>
            )
          })}
        </div>
      </div>
    </PageShell>
  )
}
