import type { Metadata } from 'next'
import { ContentPageTemplate } from '@/components/content/ContentPageTemplate'
import { loadContent } from '@/lib/specs/loader'

const content = loadContent('nossa-senhora-das-gracas')

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
}

export default function NossaSenhoraDasGracasPage() {
  return <ContentPageTemplate content={content} compact />
}
