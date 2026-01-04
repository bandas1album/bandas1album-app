/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src']
  },
  appDir: false
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = nextConfig
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
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
