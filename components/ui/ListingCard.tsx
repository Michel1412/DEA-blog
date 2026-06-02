import Link from 'next/link'
import { listingCardClass } from '@/lib/theme'

export type ListingCardProps = {
  slug: string
  title: string
  description: string
  path: string
  emoji?: string
  available?: boolean
  availableLabel?: string
  testIdPrefix?: string
}

export function ListingCard({
  slug,
  title,
  description,
  path,
  emoji,
  available = true,
  availableLabel = 'Ver mais →',
  testIdPrefix = 'listing',
}: ListingCardProps) {
  const content = (
    <>
      {emoji && <div className="text-4xl mb-4">{emoji}</div>}
      <h2 className="font-serif text-2xl text-[#d4af37] mb-3">{title}</h2>
      <p className="leading-relaxed text-foreground/85 mb-4">{description}</p>
      {available !== false ? (
        <span className="inline-block text-sm font-semibold text-[#d4af37]">
          {availableLabel}
        </span>
      ) : (
        <span className="inline-block text-sm text-muted-foreground">Em breve</span>
      )}
    </>
  )

  if (available !== false) {
    return (
      <Link
        href={path}
        className={listingCardClass(true)}
        data-testid={`${testIdPrefix}-${slug}`}
      >
        {content}
      </Link>
    )
  }

  return (
    <div className={listingCardClass(false)} data-testid={`${testIdPrefix}-${slug}`}>
      {content}
    </div>
  )
}
