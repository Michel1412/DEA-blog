import { parseVideoUrl } from '../../lib/video/parseVideoUrl'

const YOUTUBE_EXAMPLE =
  'https://youtu.be/WMXu-1avNvQ?si=r0ac31REH-ELsOH6'
const DRIVE_EXAMPLE =
  'https://drive.google.com/file/d/17V-6ojgFDKhmWY6nP3JDV7VrPpyAFt7W/view?usp=sharing'
const DRIVE_DEA_AJUDA =
  'https://drive.google.com/file/d/18YZiBEn4ZjvhszcY707vQlaJxlb4o-ai/view?usp=drive_link'

function assert(condition: boolean, message: string): void {
  if (!condition) {
    console.error(`✗ ${message}`)
    process.exit(1)
  }
}

function testYouTubeExample(): void {
  const result = parseVideoUrl(YOUTUBE_EXAMPLE)
  assert(result !== null, 'YouTube example should parse')
  assert(result!.provider === 'youtube', 'provider should be youtube')
  assert(
    result!.embedUrl.includes('WMXu-1avNvQ'),
    'embed should contain video ID',
  )
  assert(
    result!.embedUrl === 'https://www.youtube.com/embed/WMXu-1avNvQ',
    'embed URL should match expected',
  )
  console.log('✓ YouTube example URL')
}

function testDriveExample(): void {
  const result = parseVideoUrl(DRIVE_EXAMPLE)
  assert(result !== null, 'Drive example should parse')
  assert(result!.provider === 'google-drive', 'provider should be google-drive')
  assert(
    result!.embedUrl.includes('17V-6ojgFDKhmWY6nP3JDV7VrPpyAFt7W'),
    'embed should contain file ID',
  )
  assert(
    result!.embedUrl.endsWith('/preview'),
    'embed should use /preview path',
  )
  console.log('✓ Google Drive example URL')
}

function testYouTubeVariants(): void {
  const watch = parseVideoUrl('https://www.youtube.com/watch?v=WMXu-1avNvQ')
  assert(
    watch !== null && watch.embedUrl.includes('WMXu-1avNvQ'),
    'watch URL variant',
  )

  const embed = parseVideoUrl('https://www.youtube.com/embed/WMXu-1avNvQ')
  assert(
    embed !== null && embed.embedUrl.includes('WMXu-1avNvQ'),
    'embed URL variant',
  )

  const shorts = parseVideoUrl('https://www.youtube.com/shorts/WMXu-1avNvQ')
  assert(
    shorts !== null && shorts.embedUrl.includes('WMXu-1avNvQ'),
    'shorts URL variant',
  )

  console.log('✓ YouTube URL variants')
}

function testDeaAjudaDriveUrl(): void {
  const result = parseVideoUrl(DRIVE_DEA_AJUDA)
  assert(result !== null, 'DEA Ajuda Drive URL should parse')
  assert(result!.provider === 'google-drive', 'provider should be google-drive')
  assert(
    result!.embedUrl ===
      'https://drive.google.com/file/d/18YZiBEn4ZjvhszcY707vQlaJxlb4o-ai/preview',
    'DEA Ajuda embed URL',
  )
  console.log('✓ DEA Ajuda Google Drive URL')
}

function testInvalidUrls(): void {
  assert(parseVideoUrl('') === null, 'empty string')
  assert(parseVideoUrl('https://example.com/video') === null, 'generic URL')
  assert(parseVideoUrl('not-a-url') === null, 'invalid string')
  console.log('✓ invalid URLs return null')
}

testYouTubeExample()
testDriveExample()
testDeaAjudaDriveUrl()
testYouTubeVariants()
testInvalidUrls()
console.log('✓ All video embed unit tests passed.')
