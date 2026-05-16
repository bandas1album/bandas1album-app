/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd
})

module.exports = withPWA({
  reactStrictMode: true,
  eslint: {
    dirs: ['src']
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
