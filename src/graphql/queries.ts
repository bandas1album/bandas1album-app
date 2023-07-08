import { gql } from '@apollo/client'

export const GET_ALBUMS = gql`
  query getAlbums($first: Int!, $after: String) {
    albums(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
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
        artist
        amazon
        deezer
        download
        tracklist {
          title
          duration
        }
        wikipedia
        genre {
          ... on Genre {
            id
            slug
            title
          }
        }
        country {
          ... on Country {
            id
            slug
            title
          }
        }
        released {
          ... on Released {
            id
            slug
            title
          }
        }
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
