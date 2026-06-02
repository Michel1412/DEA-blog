import Link from 'next/link'
import { outlineGoldButtonClass } from '@/lib/theme'

type OutlineGoldLinkProps = {
  href: string
  label: string
}

export function OutlineGoldLink({ href, label }: OutlineGoldLinkProps) {
  return (
    <Link href={href} className={outlineGoldButtonClass()}>
      {label}
    </Link>
  )
}
