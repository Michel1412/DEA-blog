import { cn } from '@/lib/utils'

type BackgroundImageLayerProps = {
  src: string
  variant?: 'cover' | 'contain'
  opacity?: number
  className?: string
}

export function BackgroundImageLayer({
  src,
  variant = 'cover',
  opacity,
  className,
}: BackgroundImageLayerProps) {
  return (
    <div
      className={cn(
        'absolute inset-0 bg-center bg-no-repeat',
        variant === 'cover' ? 'bg-cover' : 'bg-contain',
        className,
      )}
      style={{
        backgroundImage: `url('${src}')`,
        ...(opacity !== undefined ? { opacity } : {}),
      }}
      aria-hidden="true"
    />
  )
}
