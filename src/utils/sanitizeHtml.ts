import DOMPurify from 'isomorphic-dompurify'

/** Sanitize CMS HTML before dangerouslySetInnerHTML. */
export function sanitizeHtml(html: string): string {
  if (!html) return ''

  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    FORBID_TAGS: [
      'script',
      'iframe',
      'object',
      'embed',
      'form',
      'input',
      'link'
    ],
    FORBID_ATTR: ['style']
  })
}
