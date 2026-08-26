import type { NextApiRequest, NextApiResponse } from 'next'
import { SITE_URL } from '@/lib/seo/site'

function isAuthorized(req: NextApiRequest): boolean {
  const secret = process.env.CRON_SECRET
  if (!secret) return process.env.NODE_ENV !== 'production'
  return req.headers.authorization === `Bearer ${secret}`
}

/**
 * Vercel Cron (see vercel.json): warms the on-demand /sitemap.xml route
 * in the CDN cache (generation runs once inside that route).
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  if (!isAuthorized(req)) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' })
  }

  try {
    const warmRes = await fetch(`${SITE_URL}/sitemap.xml`)

    if (!warmRes.ok) {
      throw new Error(`Sitemap warm failed: ${warmRes.status}`)
    }

    return res.status(200).json({
      ok: true,
      warmed: true,
      status: warmRes.status
    })
  } catch (e) {
    console.error('[cron generate-sitemap]', e)
    return res.status(500).json({
      ok: false,
      error: e instanceof Error ? e.message : 'Sitemap generation failed'
    })
  }
}
