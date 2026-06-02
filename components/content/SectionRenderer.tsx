import { ContentCard } from '@/components/content/ContentCard'
import { CtaButtonGroup } from '@/components/ui/CtaButtonGroup'
import { ParagraphList } from '@/components/ui/ParagraphList'
import { QuoteDisplay } from '@/components/ui/QuoteDisplay'
import { SectionTitle } from '@/components/ui/SectionTitle'
import type {
  CardSection,
  ContentSection,
  ParagraphSection,
  QuoteBlock,
} from '@/lib/specs/types'

type SectionRendererProps = {
  section: ContentSection
}

type SectionBodyProps = {
  title: string
  paragraphs: string[]
  quote?: string
  quoteVariant?: 'centered' | 'border-left'
}

function SectionBody({ title, paragraphs, quote, quoteVariant = 'border-left' }: SectionBodyProps) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <ParagraphList paragraphs={paragraphs} />
      {quote && <QuoteDisplay quote={quote} variant={quoteVariant} />}
    </>
  )
}

function ParagraphSectionView({ section }: { section: ParagraphSection }) {
  return (
    <ContentCard variant={section.variant ?? 'default'}>
      <SectionBody
        title={section.title}
        paragraphs={section.paragraphs}
        quote={section.quote}
        quoteVariant="centered"
      />
      {section.cta && (
        <CtaButtonGroup
          primary={section.cta}
          secondary={section.secondaryCta}
        />
      )}
    </ContentCard>
  )
}

function CardSectionView({ section }: { section: CardSection }) {
  return (
    <ContentCard variant={section.variant ?? 'default'}>
      <SectionBody
        title={section.title}
        paragraphs={section.paragraphs}
        quote={section.quote}
        quoteVariant="border-left"
      />
    </ContentCard>
  )
}

function QuoteBlockView({ section }: { section: QuoteBlock }) {
  return (
    <div className="border-l-4 border-[#d4af37] pl-5 my-8 italic text-[#f0d891] text-lg">
      {section.text}
    </div>
  )
}

export function SectionRenderer({ section }: SectionRendererProps) {
  switch (section.type) {
    case 'paragraphs':
      return <ParagraphSectionView section={section} />
    case 'card':
      return <CardSectionView section={section} />
    case 'quote':
      return <QuoteBlockView section={section} />
    default: {
      const _exhaustive: never = section
      return null
    }
  }
}
