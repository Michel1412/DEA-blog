import { cn } from '@/lib/utils'

type GradientOverlayProps = {
  overlay: string
  className?: string
}

export function GradientOverlay({ overlay, className }: GradientOverlayProps) {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{ background: overlay }}
      aria-hidden="true"
    />
  )
}
