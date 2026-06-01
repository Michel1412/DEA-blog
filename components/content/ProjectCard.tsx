type ProjectCardProps = {
  emoji: string
  title: string
  description: string
}

export function ProjectCard({ emoji, title, description }: ProjectCardProps) {
  return (
    <div className="bg-background border border-border rounded-2xl p-8 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
