import withSerwistInit from '@serwist/next'

const isProd = process.env.NODE_ENV === 'production'

const withSerwist = withSerwistInit({
  swSrc: 'src/sw.ts',
  swDest: 'public/sw.js',
  disable: !isProd
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  eslint: {
    dirs: ['src']
  },
  async redirects() {
    return [
      {
        source: '/genero/:slug',
        destination: '/genre/:slug',
        permanent: true
      },
      {
        // Old album URLs were /{slug}. Only redirect album-like slugs so static
        // files (sitemap.xml, robots.txt, sw.js, etc.) are not caught.
        source:
          '/:slug((?!album|genre|country|year|genero|api|_next|favicon|undefined|sitemap)[a-zA-Z0-9][a-zA-Z0-9_-]*)',
        destination: '/album/:slug',
        permanent: true
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/favicon/favicon.ico'
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ]
      }
    ]
  },
  images: {
    // Capas já vêm redimensionadas do WP (thumbnail/large). Evita
    // Image Optimization da Vercel (limite free: 5k transformations/mês).
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'api.bandas1album.com.br' },
      { protocol: 'https', hostname: 'secure.gravatar.com' },
      { protocol: 'http', hostname: 'bandas1album-api.test' }
    ]
  }
}

export default withSerwist(nextConfig)
