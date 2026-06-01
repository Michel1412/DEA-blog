import type { ReactNode } from 'react'

type ValueCardProps = {
  icon: ReactNode
  title: string
  description: string
}

export function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="text-center">
      <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
