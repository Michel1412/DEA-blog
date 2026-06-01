import Link from 'next/link'
import { ContentCard } from '@/components/content/ContentCard'
import type {
  CardSection,
  ContentSection,
  ParagraphSection,
  QuoteBlock,
} from '@/lib/specs/types'

type SectionRendererProps = {
  section: ContentSection
}

function ParagraphSectionView({ section }: { section: ParagraphSection }) {
  return (
    <ContentCard variant={section.variant ?? 'default'}>
      <h2 className="font-serif text-3xl md:text-4xl mb-5 text-[#d4af37]">
        {section.title}
      </h2>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mb-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
      {section.quote && (
        <p className="font-serif text-2xl md:text-3xl text-center mt-5 text-[#d4af37]">
          &ldquo;{section.quote}&rdquo;
        </p>
      )}
      {section.cta && (
        <div className="text-center mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
          {section.cta.style === 'instagram' && (
            <a
              href={section.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3.5 rounded-full text-white font-semibold"
              style={{
                background: 'linear-gradient(45deg, #f58529, #dd2a7b, #8134af)',
              }}
            >
              {section.cta.label}
            </a>
          )}
          <Link
            href="/ministerios/dea-ajuda"
            className="inline-block px-7 py-3.5 rounded-full font-semibold border border-[rgba(212,175,55,0.4)] text-[#d4af37] hover:bg-[rgba(212,175,55,0.1)] transition-colors"
          >
            Conheça o DEA Ajuda
          </Link>
        </div>
      )}
    </ContentCard>
  )
}

function CardSectionView({ section }: { section: CardSection }) {
  return (
    <ContentCard variant={section.variant ?? 'default'}>
      <h2 className="font-serif text-3xl md:text-4xl mb-5 text-[#d4af37]">
        {section.title}
      </h2>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="mb-4 leading-relaxed">
          {paragraph}
        </p>
      ))}
      {section.quote && (
        <div className="border-l-4 border-[#d4af37] pl-5 my-5 italic text-[#f0d891]">
          {section.quote}
        </div>
      )}
    </ContentCard>
  )
}

function QuoteBlockView({ section }: { section: QuoteBlock }) {
  return (
    <div
      className="border-l-4 border-[#d4af37] pl-5 my-8 italic text-[#f0d891] text-lg"
    >
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
