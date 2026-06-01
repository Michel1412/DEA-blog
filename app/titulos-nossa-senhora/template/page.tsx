import type { Metadata } from 'next'
import { ContentPageTemplate } from '@/components/content/ContentPageTemplate'
import { loadContent } from '@/lib/specs/loader'

const content = loadContent('titulos-nossa-senhora-template')

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
}

export default function TitulosNossaSenhoraTemplatePage() {
  return <ContentPageTemplate content={content} compact />
}
