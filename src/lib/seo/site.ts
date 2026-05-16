/**
 * Canonical site origin (no trailing slash). Override via NEXT_PUBLIC_SITE_URL in env.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://bandas1album.com.br'
).replace(/\/$/, '')

/** Path or full URL → absolute https URL for this site (or pass through http(s) URLs). */
export function absoluteUrl(pathOrUrl: string): string {
  if (!pathOrUrl) return SITE_URL
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${SITE_URL}${path}`
}
