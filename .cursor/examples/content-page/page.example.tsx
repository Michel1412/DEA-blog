import type { Metadata } from 'next'
import { ContentPageTemplate } from '@/components/content/ContentPageTemplate'
import { loadContent } from '@/lib/specs/loader'

const content = loadContent('your-slug')

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
}

export default function YourPage() {
  return <ContentPageTemplate content={content} compact />
}
