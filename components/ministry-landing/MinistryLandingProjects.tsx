import { ProjectCard } from '@/components/content/ProjectCard'
import type { MinistryLandingContent } from '@/lib/specs/types'

type MinistryLandingProjectsProps = {
  projects: MinistryLandingContent['projects']
}

export function MinistryLandingProjects({ projects }: MinistryLandingProjectsProps) {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {projects.title}{' '}
          <span className="text-primary">{projects.titleHighlight}</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          {projects.description}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.items.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
