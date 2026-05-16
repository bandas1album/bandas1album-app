import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * Vercel Cron hits this route. Extend to generate/write sitemap XML using the
 * `sitemap` package and your albums API when ready.
 */
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ok: true })
}
