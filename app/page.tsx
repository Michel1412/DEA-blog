import type { Metadata } from 'next'
import { ContentPageTemplate } from '@/components/content/ContentPageTemplate'
import { loadContent } from '@/lib/specs/loader'

const content = loadContent('home')

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
}

export default function HomePage() {
  return <ContentPageTemplate content={content} />
}
