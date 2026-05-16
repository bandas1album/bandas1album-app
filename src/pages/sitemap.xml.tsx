import type { GetServerSideProps } from 'next'
import { Readable } from 'stream'
import { SitemapStream, streamToPromise } from 'sitemap'
import { collectSitemapPaths } from '@/lib/seo/serverAlbum'
import { SITE_URL } from '@/lib/seo/site'

/** Emits raw XML via getServerSideProps (body is not React-rendered). */
export default function SitemapXml() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=86400'
  )

  try {
    const paths = await collectSitemapPaths()
    const stream = new SitemapStream({ hostname: SITE_URL })
    const rows = paths.map((p) => ({
      url: p.url,
      changefreq: p.changefreq,
      priority: p.priority,
      ...(p.lastmod ? { lastmod: p.lastmod } : {})
    }))

    const xml = await streamToPromise(Readable.from(rows).pipe(stream))

    res.setHeader('Content-Type', 'text/xml; charset=utf-8')
    res.write(xml.toString())
    res.end()
  } catch (e) {
    console.error('[sitemap]', e)
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Sitemap temporarily unavailable')
  }

  return { props: {} }
}
