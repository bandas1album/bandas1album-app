/**
 * Extrai um YouTube video ID a partir de URL ou ID puro.
 * Espelha a lógica do WP (`api_extract_youtube_id`).
 */
export function extractYouTubeId(input: string | undefined | null): string {
  const value = (input ?? '').trim()
  if (!value) return ''

  if (/^[a-zA-Z0-9_-]{11}$/.test(value)) {
    return value
  }

  const patterns = [
    /(?:youtube\.com\/watch\?(?:[^#]*&)?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/|youtube\.com\/live\/|music\.youtube\.com\/watch\?(?:[^#]*&)?v=)([a-zA-Z0-9_-]{11})/i,
    /[?&]v=([a-zA-Z0-9_-]{11})/i
  ]

  for (const pattern of patterns) {
    const match = value.match(pattern)
    if (match?.[1]) return match[1]
  }

  return ''
}

export function resolveTrackYouTubeId(track: {
  youtube_id?: string
  youtube_url?: string
}): string {
  return (
    extractYouTubeId(track.youtube_id) ||
    extractYouTubeId(track.youtube_url) ||
    ''
  )
}
