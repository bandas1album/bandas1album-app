import type { NextApiRequest, NextApiResponse } from 'next'

type RevalidateBody = {
  slug?: string
  paths?: string[]
}

function isAuthorized(req: NextApiRequest): boolean {
  const secret = process.env.REVALIDATE_SECRET
  if (!secret) {
    return process.env.NODE_ENV !== 'production'
  }
  return req.headers.authorization === `Bearer ${secret}`
}

function normalizePath(path: string): string | null {
  const trimmed = path.trim()
  if (!trimmed.startsWith('/')) return null
  if (trimmed.includes('://') || trimmed.includes('..')) return null
  return trimmed.replace(/\/{2,}/g, '/')
}

/**
 * On-demand ISR purge. Called from WordPress on album save.
 *
 * POST /api/revalidate
 * Authorization: Bearer <REVALIDATE_SECRET>
 * Body: { "slug": "album-slug", "paths": ["/"] }
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  if (!isAuthorized(req)) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' })
  }

  const body = (
    typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  ) as RevalidateBody | undefined

  const paths = new Set<string>()

  const slug =
    typeof body?.slug === 'string'
      ? body.slug.trim().replace(/^\/+|\/+$/g, '')
      : ''
  if (slug && /^[a-z0-9]+(?:-[a-z0-9]+)*$/i.test(slug)) {
    paths.add(`/album/${slug}`)
  }

  const extraPaths = body?.paths
  if (Array.isArray(extraPaths)) {
    for (const path of extraPaths) {
      if (typeof path !== 'string') continue
      const normalized = normalizePath(path)
      if (normalized) paths.add(normalized)
    }
  }

  if (paths.size === 0) {
    return res.status(400).json({
      ok: false,
      error: 'Provide a valid slug and/or paths[]'
    })
  }

  const revalidated: string[] = []
  const failed: { path: string; error: string }[] = []

  for (const path of Array.from(paths)) {
    try {
      await res.revalidate(path)
      revalidated.push(path)
    } catch (e) {
      failed.push({
        path,
        error: e instanceof Error ? e.message : 'Revalidate failed'
      })
    }
  }

  if (revalidated.length === 0) {
    return res.status(500).json({ ok: false, revalidated, failed })
  }

  return res.status(200).json({
    ok: true,
    revalidated,
    failed: failed.length ? failed : undefined
  })
}
