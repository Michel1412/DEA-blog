import type { Metadata } from 'next'
import { Cross, Heart, Smile, Users } from 'lucide-react'
import { ProjectCard } from '@/components/content/ProjectCard'
import { ValueCard } from '@/components/content/ValueCard'
import { loadContent } from '@/lib/specs/loader'

const content = loadContent('dea-ajuda')

const valueIcons = {
  heart: Heart,
  users: Users,
  smile: Smile,
  cross: Cross,
} as const

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
}

export default function DeaAjudaPage() {
  const { hero, about, video, projects, inspiration, values, quote } = content

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-card border-4 border-primary flex items-center justify-center shadow-2xl shadow-primary/20">
              <span className="text-primary text-4xl font-bold">DEA</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">
            <span className="text-primary">{hero.highlight}</span> {hero.title}
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-6 text-foreground/90">
            {hero.subtitle}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            {hero.tagline}
          </p>

          <a
            href={hero.ctaHref}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
          >
            <span className="text-2xl">▶</span>
            {hero.ctaLabel}
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border border-border rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary text-center">
              {about.title}
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              {about.highlight && (
                <p className="text-primary/80 italic">{about.highlight}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="video" className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {video.title}{' '}
            <span className="text-primary">{video.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">{video.description}</p>

          <div className="aspect-video bg-card border-2 border-primary/30 rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-4xl">▶</span>
                </div>
                <p className="text-muted-foreground">{video.placeholder}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="relative py-32 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: `url('${inspiration.backgroundImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {inspiration.title}{' '}
            <span className="text-primary">{inspiration.titleHighlight}</span>
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            {inspiration.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            {values.title}{' '}
            <span className="text-primary">{values.titleHighlight}</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.items.map((value) => {
              const Icon = valueIcons[value.icon]
              return (
                <ValueCard
                  key={value.title}
                  icon={<Icon className="w-10 h-10" />}
                  title={value.title}
                  description={value.description}
                />
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl text-primary/30 mb-6">&ldquo;</div>
          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-foreground/90 text-balance">
            {quote.text}
          </blockquote>
          <cite className="text-lg text-primary font-medium">— {quote.author}</cite>
        </div>
      </section>
    </main>
  )
}
