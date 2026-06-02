import { sectionTitleClass } from '@/lib/theme'

type SectionTitleProps = {
  children: string
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className={sectionTitleClass()}>{children}</h2>
}
