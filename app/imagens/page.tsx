import type { Metadata } from 'next'
import { ListingPageTemplate } from '@/components/content/ListingPageTemplate'
import { loadContent } from '@/lib/specs/loader'

const content = loadContent('imagens')

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
}

export default function ImagensPage() {
  return (
    <ListingPageTemplate
      hero={content.hero}
      items={content.galleries}
      gradient="gold"
      testIdPrefix="gallery"
    />
  )
}
