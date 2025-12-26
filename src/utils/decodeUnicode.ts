export const decodeBrokenUnicode = (str: string) => {
  if (!str || typeof str !== 'string') return str

  try {
    return str
      .replace(/u([0-9a-fA-F]{4})/g, '\\u$1')
      .replace(/\\u/g, '%u')
      .replace(/%u([0-9a-fA-F]{4})/g, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16))
      )
  } catch {
    return str
  }
}
