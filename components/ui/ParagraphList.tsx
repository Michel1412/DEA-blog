import { paragraphClass, paragraphKey } from '@/lib/theme'

type ParagraphListProps = {
  paragraphs: string[]
}

export function ParagraphList({ paragraphs }: ParagraphListProps) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraphKey(paragraph)} className={paragraphClass()}>
          {paragraph}
        </p>
      ))}
    </>
  )
}
