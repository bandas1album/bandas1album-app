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
        // Old album URLs were /{slug}; keep reserved app paths out of the catch-all.
        source:
          '/:slug((?!album|genre|country|year|genero|api|_next|favicon|undefined|sw\\.js|robots\\.txt|manifest\\.json|logo\\.svg|workbox-)[^/]+)',
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
