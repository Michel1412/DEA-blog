import { HeroSection } from '@/components/content/HeroSection'
import { SectionRenderer } from '@/components/content/SectionRenderer'
import { PageShell } from '@/components/layout/PageShell'
import { contentContainer } from '@/lib/theme'
import type { ContentPage } from '@/lib/specs/types'

type ContentPageTemplateProps = {
  content: ContentPage
  compact?: boolean
}

export function ContentPageTemplate({ content, compact = false }: ContentPageTemplateProps) {
  return (
    <PageShell>
      <HeroSection hero={content.hero} compact={compact} />

      <div className={`${contentContainer()} py-16`}>
        {content.sections.map((section) => (
          <SectionRenderer
            key={
              section.type === 'quote'
                ? section.text.slice(0, 30)
                : section.title
            }
            section={section}
          />
        ))}
      </div>
    </PageShell>
  )
}
