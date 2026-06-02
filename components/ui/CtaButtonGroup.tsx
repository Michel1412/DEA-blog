import type { ReactNode } from 'react'
import Link from 'next/link'
import { InstagramCtaButton } from '@/components/ui/InstagramCtaButton'
import { OutlineGoldLink } from '@/components/ui/OutlineGoldLink'
import { ctaButtonGroupClass, outlineGoldButtonClass } from '@/lib/theme'

type CtaConfig = {
  label: string
  href: string
  style?: 'instagram' | 'primary' | 'link'
}

type CtaButtonGroupProps = {
  primary?: CtaConfig
  secondary?: { label: string; href: string }
  children?: ReactNode
}

export function CtaButtonGroup({ primary, secondary, children }: CtaButtonGroupProps) {
  if (children) {
    return <div className={ctaButtonGroupClass()}>{children}</div>
  }

  if (!primary && !secondary) return null

  return (
    <div className={ctaButtonGroupClass()}>
      {primary &&
        (primary.style === 'instagram' ? (
          <InstagramCtaButton href={primary.href} label={primary.label} />
        ) : (
          <Link href={primary.href} className={outlineGoldButtonClass()}>
            {primary.label}
          </Link>
        ))}
      {secondary && <OutlineGoldLink href={secondary.href} label={secondary.label} />}
    </div>
  )
}
