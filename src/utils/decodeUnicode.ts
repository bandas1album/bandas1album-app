export const decodeBrokenUnicode = (str: string) => {
  if (!str || typeof str !== 'string') return str

  try {
    // 1. Corrige unicode quebrado
    let decoded = str
      .replace(/u([0-9a-fA-F]{4})/g, '\\u$1')
      .replace(/\\u/g, '%u')
      .replace(/%u([0-9a-fA-F]{4})/g, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16))
      )

    // 2. Decodifica HTML entities (&amp;, &quot;, &#039;, etc.)
    if (typeof window !== 'undefined') {
      const textarea = document.createElement('textarea')
      textarea.innerHTML = decoded
      decoded = textarea.value
    }

    return decoded
  } catch {
    return str
  }
}
