/**
 * Origem da API JSON do WordPress em modo headless (sem barra no final).
 *
 * Ex.: `https://api.bandas1album.com.br/json`
 *
 * As rotas do app usam caminhos relativos a essa base (`/api/albums`, `/jwt-auth/v1/token`, etc.).
 */
export const apiBaseUrl = (process.env.NEXT_PUBLIC_API_URL || '').replace(
  /\/+$/,
  ''
)
