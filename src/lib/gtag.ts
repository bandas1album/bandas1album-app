export const GA_TRACKING_ID = 'G-XYCDCKWDJ2'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

const SENSITIVE_QUERY_KEYS = new Set([
  'key',
  'rp_key',
  'reset_key',
  'login',
  'token',
  'password'
])

/** Strip auth/reset secrets before sending paths to analytics. */
export function sanitizeAnalyticsPath(pathOrUrl: string): string {
  try {
    const base =
      typeof window !== 'undefined'
        ? window.location.origin
        : 'https://bandas1album.com.br'
    const url = new URL(pathOrUrl, base)

    SENSITIVE_QUERY_KEYS.forEach((key) => {
      url.searchParams.delete(key)
    })

    const search = url.searchParams.toString()
    return `${url.pathname}${search ? `?${search}` : ''}${url.hash}`
  } catch {
    return pathOrUrl.split('?')[0] || '/'
  }
}

function safeGtag(...args: unknown[]) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag(...args)
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (path: string) => {
  safeGtag('config', GA_TRACKING_ID, {
    page_path: sanitizeAnalyticsPath(path)
  })
}

type GaParamValue = string | number | boolean | undefined

/** GA4: envia `gtag('event', name, params)` — omite chaves vazias/undefined. */
export function gaEvent(
  name: string,
  params?: Record<string, GaParamValue>
): void {
  if (!params || Object.keys(params).length === 0) {
    safeGtag('event', name)
    return
  }
  const payload = Object.fromEntries(
    Object.entries(params).filter(([, v]) => v !== undefined && v !== '')
  ) as Record<string, string | number | boolean>
  if (Object.keys(payload).length === 0) {
    safeGtag('event', name)
    return
  }
  safeGtag('event', name, payload)
}

type GtagLegacyEventArgs = {
  action: string
  category: string
  label: string
  value?: number
}

/** Compatível com relatórios que ainda usam category/label (parametrização UA). */
export const event = ({
  action,
  category,
  label,
  value
}: GtagLegacyEventArgs) => {
  gaEvent(action, {
    event_category: category,
    event_label: label,
    ...(value !== undefined ? { value } : {})
  })
}
