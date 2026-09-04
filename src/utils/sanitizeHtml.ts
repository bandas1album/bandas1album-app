/**
 * Server-safe HTML sanitizer (no jsdom).
 * Strips scripts, event handlers, and javascript: URLs before dangerouslySetInnerHTML.
 */
export function sanitizeHtml(html: string): string {
  if (!html) return ''

  let out = html

  // Remove dangerous elements and their contents.
  out = out.replace(
    /<\s*(script|style|iframe|object|embed|form|input|link|meta|base|textarea)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi,
    ''
  )
  out = out.replace(
    /<\s*(script|style|iframe|object|embed|form|input|link|meta|base|textarea)[^>]*\/?\s*>/gi,
    ''
  )

  // Strip inline event handlers (onclick, onerror, …).
  out = out.replace(/\s+on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')

  // Block javascript:/vbscript:/data: in href/src.
  out = out.replace(
    /\s+(href|src|xlink:href)\s*=\s*(['"])\s*(?:javascript|vbscript|data):[\s\S]*?\2/gi,
    ' $1="#"'
  )
  out = out.replace(
    /\s+(href|src|xlink:href)\s*=\s*(?:javascript|vbscript|data):[^\s>]*/gi,
    ' $1="#"'
  )

  return out
}
