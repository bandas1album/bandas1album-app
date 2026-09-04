export const decodeBrokenUnicode = (str: string | undefined) => {
  if (!str || typeof str !== 'string') return str ?? ''

  try {
    let decoded = str
      .replace(/u([0-9a-fA-F]{4})/g, '\\u$1')
      .replace(/\\u/g, '%u')
      .replace(/%u([0-9a-fA-F]{4})/g, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16))
      )

    // Decode common HTML entities without using innerHTML (XSS-safe).
    decoded = decoded
      .replace(/&nbsp;/g, '\u00a0')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&#x27;/gi, "'")
      .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
      .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16))
      )

    return decoded
  } catch {
    return str
  }
}
