import { gql } from 'graphql-request'

export const GET_ALBUMS = gql`
  query getAlbums($first: Int, $last: Int, $after: String, $before: String) {
    albums(first: $first, last: $last, after: $after, before: $before) {
      nodes {
        id
        title
        slug
        acf {
          artist
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`

export const GET_ALBUM_BY_SLUG = gql`
  query getAlbumBySlug($id: ID!) {
    album(id: $id, idType: URI) {
      title
      content
      acf {
        amazon
        artist
        deezer
        download
        tracklist {
          title
          duration
        }
        wikipedia
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      slug
      id
    }
  }
`

export const GET_AUTOCOMPLETE_BY_SEARCH = gql`
  query getAutocompleteBySearch($search: String) {
    albums(where: { search: $search }, first: 2) {
      nodes {
        id
        title
        slug
      }
    }
    genres(where: { search: $search }, first: 2) {
      nodes {
        id
        title
        slug
      }
    }
    countries(where: { search: $search }, first: 2) {
      nodes {
        id
        title
        slug
      }
    }
    releases(where: { search: $search }, first: 2) {
      nodes {
        id
        title
        slug
      }
    }
  }
`

export const GET_MENU_CATEGORIES = gql`
  query getMenuCategories {
    albums {
      nodes {
        id
        title
        acf {
          artist
        }
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
    genres {
      nodes {
        id
        title
        slug
      }
    }
    countries {
      nodes {
        id
        title
        slug
      }
    }
    releases {
      nodes {
        id
        title
        slug
      }
    }
  }
`
