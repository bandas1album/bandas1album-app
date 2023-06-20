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
      released {
        title
      }
      label
      id
    }
  }
`

export const GET_AUTOCOMPLETE_BY_SEARCH = gql`
  query getAutocompleteBySearch($search: String) {
    albums(where: { title_starts_with: $search }, first: 2) {
      id
      title
      slug
    }
    genres(where: { title_starts_with: $search }, first: 2) {
      id
      title
      slug
    }
    countries(where: { title_starts_with: $search }, first: 2) {
      id
      title
      slug
    }
    releases(where: { title_starts_with: $search }, first: 2) {
      id
      title
    }
  }
`

export const GET_MENU_CATEGORIES = gql`
  query getMenuCategories {
    albums {
      id
      title
      artist
      slug
      cover {
        url
      }
    }
    genres {
      id
      title
      slug
    }
    countries {
      id
      title
      slug
    }
    releases {
      id
      title
    }
  }
`
