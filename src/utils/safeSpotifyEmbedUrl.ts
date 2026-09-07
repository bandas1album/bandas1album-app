/**
 * Only allow Spotify episode/show embed URLs.
 */
export function safeSpotifyEmbedUrl(
  url: string | null | undefined
): string | undefined {
  if (!url || typeof url !== 'string') return undefined

  try {
    const parsed = new URL(url.trim())
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return undefined
    }
    if (parsed.hostname !== 'open.spotify.com') {
      return undefined
    }
    const match = parsed.pathname.match(
      /^\/embed\/(episode|show)\/([a-zA-Z0-9]+)$/
    )
    if (!match) return undefined
    return `https://open.spotify.com/embed/${match[1]}/${match[2]}`
  } catch {
    return undefined
  }
}
