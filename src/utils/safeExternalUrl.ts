/**
 * Only allow http(s) URLs for user/API-controlled hrefs.
 * Blocks javascript:, data:, vbscript:, etc.
 */
export function safeExternalUrl(
  url: string | null | undefined
): string | undefined {
  if (!url || typeof url !== 'string') return undefined

  const trimmed = url.trim()
  if (!trimmed) return undefined

  try {
    const parsed = new URL(trimmed)
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return undefined
    }
    return parsed.toString()
  } catch {
    return undefined
  }
}
