import { gql } from 'graphql-request'

export const GET_ALBUMS = gql`
  query getAlbums {
    albums {
      id
      title
      slug
      artist
      cover {
        url
      }
    }
  }
`

export const GET_ALBUM_BY_SLUG = gql`
  query getAlbumBySlug($slug: String) {
    album(where: { slug: $slug }) {
      artist
      content
      genres {
        slug
        title
      }
      country {
        title
        slug
      }
      cover {
        url
      }
      slug
      social
      stage
      title
      tracklist
      released
      label
      id
    }
  }
`
