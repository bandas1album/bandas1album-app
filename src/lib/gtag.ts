export const GA_TRACKING_ID = 'G-XYCDCKWDJ2'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
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
    page_path: path
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
