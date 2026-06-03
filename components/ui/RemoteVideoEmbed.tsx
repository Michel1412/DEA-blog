import { parseVideoUrl } from '@/lib/video/parseVideoUrl'

type RemoteVideoEmbedProps = {
  url: string
  title: string
}

export function RemoteVideoEmbed({ url, title }: RemoteVideoEmbedProps) {
  const parsed = parseVideoUrl(url)

  if (!parsed) {
    return (
      <div
        className="flex h-full w-full items-center justify-center"
        data-testid="remote-video-embed"
      >
        <p className="text-lg text-muted-foreground">Vídeo indisponível</p>
      </div>
    )
  }

  return (
    <div className="h-full w-full" data-testid="remote-video-embed">
      <iframe
        src={parsed.embedUrl}
        title={title}
        className="h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
