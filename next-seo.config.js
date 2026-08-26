const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://bandas1album.com.br'

export default {
  defaultTitle: 'Bandas de 1 Álbum',
  description:
    'Descubra bandas e artistas que lançaram apenas um álbum na carreira — ouça, explore por gênero, país ou ano.',
  additionalMetaTags: [
    {
      name: 'author',
      content: 'Bandas de 1 Álbum'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon/favicon.ico',
      sizes: '48x48'
    },
    {
      rel: 'icon',
      href: '/favicon/favicon.svg',
      type: 'image/svg+xml'
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    }
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Bandas de 1 Álbum',
    images: [
      {
        url: `${siteUrl}/cover.png`,
        width: 1280,
        height: 720,
        alt: 'Bandas de 1 Álbum'
      }
    ]
  },
  twitter: {
    handle: '@bandas1album',
    site: '@bandas1album',
    cardType: 'summary_large_image'
  }
}
