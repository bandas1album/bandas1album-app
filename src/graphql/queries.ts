import { gql } from '@apollo/client'

export const GET_ALBUMS = gql`
  query getAlbums($perPage: Int!, $page: Int) {
    albums(pagination: { pageSize: $perPage, page: $page }) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          slug
          title
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GET_ALBUM_BY_SLUG = gql`
  query getAlbumBySlug($first: Int!, $after: Int, $slug: StringFilterInput) {
    albums(
      pagination: { pageSize: $first, start: $after }
      filters: { slug: $slug }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          slug
          title
          content
          artist
          social
          tracklist
          genres {
            data {
              id
              attributes {
                slug
                title
              }
            }
          }
          country {
            data {
              id
              attributes {
                slug
                title
              }
            }
          }
          released
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GET_ALBUMS_BY_CATEGORY = gql`
  query getAlbumsByCategory(
    $perPage: Int!
    $page: Int
    $genre: StringFilterInput
    $country: StringFilterInput
  ) {
    albums(
      pagination: { pageSize: $perPage, page: $page }
      filters: { genres: { slug: $genre }, country: { slug: $country } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          slug
          title
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GET_AUTOCOMPLETE_BY_SEARCH = gql`
  query getAutocompleteBySearch($search: StringFilterInput) {
    albums(filters: { title: $search }, pagination: { pageSize: 2 }) {
      data {
        id
        attributes {
          title
          slug
        }
      }
    }
    genres(filters: { title: $search }, pagination: { pageSize: 2 }) {
      data {
        id
        attributes {
          title
          slug
        }
      }
    }
    countries(filters: { title: $search }, pagination: { pageSize: 2 }) {
      data {
        id
        attributes {
          title
          slug
        }
      }
    }
  }
`

export const GET_MENU_ALBUMS = gql`
  query getMenuAlbums($page: Int, $perPage: Int) {
    albums(pagination: { pageSize: $perPage, page: $page }) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          title
          artist
          slug
          cover {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GET_MENU_GENRES = gql`
  query getMenuGenres($page: Int, $perPage: Int) {
    genres(pagination: { pageSize: $perPage, page: $page }) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          title
          slug
        }
      }
    }
  }
`

export const GET_MENU_COUNTRIES = gql`
  query getMenuCountries($page: Int, $perPage: Int) {
    countries(pagination: { pageSize: $perPage, page: $page }) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          title
          slug
        }
      }
    }
  }
`
