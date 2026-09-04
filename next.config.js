/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

module.exports = withPWA({
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
    domains: [
      'res.cloudinary.com',
      'bandas1album-api.test',
      'api.bandas1album.com.br',
      'secure.gravatar.com'
    ]
  }
})
