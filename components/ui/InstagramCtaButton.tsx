import { instagramButtonClass } from '@/lib/theme'

type InstagramCtaButtonProps = {
  href: string
  label: string
}

export function InstagramCtaButton({ href, label }: InstagramCtaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={instagramButtonClass()}
    >
      {label}
    </a>
  )
}
