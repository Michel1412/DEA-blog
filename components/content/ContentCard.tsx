import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { surfaceCardDefault, surfaceCardHighlight } from '@/lib/theme'

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
  return (
    <div
      className={cn(
        variant === 'highlight' ? surfaceCardHighlight() : surfaceCardDefault(),
        className,
      )}
    >
      {children}
    </div>
  )
}
