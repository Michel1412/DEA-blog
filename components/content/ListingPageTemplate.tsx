import { PageShell } from '@/components/layout/PageShell'
import { BackgroundImageLayer } from '@/components/ui/BackgroundImageLayer'
import { GradientOverlay } from '@/components/ui/GradientOverlay'
import { ListingCard, type ListingCardProps } from '@/components/ui/ListingCard'
import { contentContainer, listingGradientClass, listingHeroOverlay } from '@/lib/theme'

export type ListingItem = ListingCardProps

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

export function ListingPageTemplate({
  hero,
  items,
  gradient = 'gold',
  testIdPrefix = 'listing',
  availableLabel = 'Ver mais →',
}: ListingPageTemplateProps) {
  return (
    <PageShell>
      <section
        className={`min-h-[50vh] flex justify-center items-center p-8 pt-28 text-center relative isolate overflow-hidden ${
          hero.backgroundImage ? '' : listingGradientClass(gradient)
        }`}
      >
        {hero.backgroundImage && (
          <>
            <BackgroundImageLayer src={hero.backgroundImage} />
            <GradientOverlay overlay={listingHeroOverlay} />
          </>
        )}
        <div className="relative z-10 max-w-[800px]">
          <h1 className="font-serif text-5xl md:text-6xl text-[#d4af37] mb-4">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            {hero.subtitle}
          </p>
        </div>
      </section>

      <div className={`${contentContainer()} py-16`}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <ListingCard
              key={item.slug}
              {...item}
              availableLabel={availableLabel}
              testIdPrefix={testIdPrefix}
            />
          ))}
        </div>
      </div>
    </PageShell>
  )
}
