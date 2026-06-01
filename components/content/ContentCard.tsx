import type { ReactNode } from 'react'

type ContentCardProps = {
  children: ReactNode
  variant?: 'default' | 'highlight'
  className?: string
}

export function ContentCard({
  children,
  variant = 'default',
  className = '',
}: ContentCardProps) {
  const baseStyles =
    'p-6 md:p-10 rounded-2xl mb-8 border border-[rgba(212,175,55,0.15)]'
  const variantStyles =
    variant === 'highlight'
      ? 'bg-gradient-to-br from-[rgba(124,31,42,0.35)] to-[rgba(212,175,55,0.08)]'
      : 'bg-[#1b1b20]'

  return (
    <div
      className={`${baseStyles} ${variantStyles} ${className}`}
      style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.25)' }}
    >
      {children}
    </div>
  )
}
