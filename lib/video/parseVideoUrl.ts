export type VideoProvider = 'youtube' | 'google-drive'

export type ParsedVideoUrl = {
  provider: VideoProvider
  embedUrl: string
}

const YOUTUBE_PATTERNS = [
  /(?:youtu\.be\/)([\w-]{11})/,
  /(?:youtube\.com\/watch\?.*v=)([\w-]{11})/,
  /(?:youtube\.com\/embed\/)([\w-]{11})/,
  /(?:youtube\.com\/shorts\/)([\w-]{11})/,
]

const GOOGLE_DRIVE_PATTERN = /drive\.google\.com\/file\/d\/([\w-]+)/

function parseYouTubeId(input: string): string | null {
  for (const pattern of YOUTUBE_PATTERNS) {
    const match = input.match(pattern)
    if (match?.[1]) return match[1]
  }
  return null
}

function parseGoogleDriveId(input: string): string | null {
  const match = input.match(GOOGLE_DRIVE_PATTERN)
  return match?.[1] ?? null
}

export function parseVideoUrl(input: string): ParsedVideoUrl | null {
  const trimmed = input.trim()
  if (!trimmed) return null

  const youtubeId = parseYouTubeId(trimmed)
  if (youtubeId) {
    return {
      provider: 'youtube',
      embedUrl: `https://www.youtube.com/embed/${youtubeId}`,
    }
  }

  const driveId = parseGoogleDriveId(trimmed)
  if (driveId) {
    return {
      provider: 'google-drive',
      embedUrl: `https://drive.google.com/file/d/${driveId}/preview`,
    }
  }

  return null
}
