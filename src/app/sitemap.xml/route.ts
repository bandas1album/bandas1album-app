import { Readable } from 'stream'
import { SitemapStream, streamToPromise } from 'sitemap'
import { collectSitemapPaths } from '@/lib/seo/serverAlbum'
import { SITE_URL } from '@/lib/seo/site'

// ISR: served from the global cache and regenerated in the background, so
// crawlers never wait on the WordPress API. A failed regeneration keeps the
// previous sitemap.
export const revalidate = 3600

export async function GET() {
  const paths = await collectSitemapPaths()
  const stream = new SitemapStream({ hostname: SITE_URL })
  const rows = paths.map((p) => ({
    url: p.url,
    changefreq: p.changefreq,
    priority: p.priority,
    ...(p.lastmod ? { lastmod: p.lastmod } : {})
  }))

  const xml = await streamToPromise(Readable.from(rows).pipe(stream))

  return new Response(xml.toString(), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  })
}
