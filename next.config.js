/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src']
  }
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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com'
      }
    ]
  }
})
