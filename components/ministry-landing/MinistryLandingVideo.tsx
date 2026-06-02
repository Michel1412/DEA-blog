import type { MinistryLandingContent } from '@/lib/specs/types'

type MinistryLandingVideoProps = {
  video: NonNullable<MinistryLandingContent['video']>
}

export function MinistryLandingVideo({ video }: MinistryLandingVideoProps) {
  return (
    <section id="video" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {video.title} <span className="text-primary">{video.titleHighlight}</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12">{video.description}</p>

        <div className="aspect-video bg-card border-2 border-primary/30 rounded-2xl overflow-hidden shadow-2xl">
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-lg text-muted-foreground">{video.placeholder}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
