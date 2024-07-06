require('dotenv').config()
const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')
const { request, gql } = require('graphql-request')
const { pipeline } = require('stream')
const { promisify } = require('util')

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_HOST
const token = process.env.NEXT_PUBLIC_GRAPHQL_TOKEN || ''
const GET_ALL_PAGES = gql`
  query getAllPages {
    genres(pagination: { limit: 10000 }) {
      data {
        attributes {
          slug
          updatedAt
        }
      }
    }

    countries(pagination: { limit: 10000 }) {
      data {
        attributes {
          slug
          updatedAt
        }
      }
    }

    albums(pagination: { limit: 10000 }) {
      data {
        attributes {
          slug
          updatedAt
        }
      }
    }
  }
`

async function fetchPages() {
  try {
    const data = await request(
      GRAPHQL_ENDPOINT,
      GET_ALL_PAGES,
      {},
      {
        authorization: token ? `Bearer ${token}` : ''
      }
    )
    return data
  } catch (error) {
    console.error('Erro ao buscar as páginas:', error)
    return []
  }
}

export default async function generateSitemap() {
  const { albums, countries, genres } = await fetchPages()
  const sitemap = new SitemapStream({ hostname: 'https://bandas1album.com.br' })

  const writeStream = createWriteStream('public/sitemap.xml')

  const pipelineAsync = promisify(pipeline)

  albums?.data.map((album) => {
    sitemap.write({
      url: `/album/${album.attributes?.slug}`,
      changefreq: 'weekly',
      lastmod: new Date(album.attributes?.updatedAt)
    })
  })

  countries?.data.map((country) => {
    sitemap.write({
      url: `/pais/${country.attributes?.slug}`,
      changefreq: 'weekly',
      lastmod: new Date(country.attributes?.updatedAt)
    })
  })

  genres?.data.map((genre) => {
    sitemap.write({
      url: `/genero/${genre.attributes?.slug}`,
      changefreq: 'weekly',
      lastmod: new Date(genre.attributes?.updatedAt)
    })
  })

  sitemap.end()

  try {
    await pipelineAsync(sitemap, writeStream)
    console.log('Sitemap gerado com sucesso!')
  } catch (err) {
    console.error('Erro ao gerar sitemap:', err)
  }
}

generateSitemap()
