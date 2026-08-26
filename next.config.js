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
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: '/favicon/favicon.ico'
      }
    ]
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'bandas1album-api.test',
      'api.bandas1album.com.br',
      'secure.gravatar.com'
    ]
  }
})
