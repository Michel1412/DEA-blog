import type { Metadata } from 'next'
import { ContentPageTemplate } from '@/components/content/ContentPageTemplate'
import { loadContent } from '@/lib/specs/loader'

const content = loadContent('nossa-senhora-la-salette')

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
}

export default function NossaSenhoraLaSalettePage() {
  return <ContentPageTemplate content={content} compact />
}
