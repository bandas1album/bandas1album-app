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

export const GET_MENU_CATEGORIES = gql`
  query getMenuCategories {
    albums {
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
    genres {
      data {
        id
        attributes {
          title
          slug
        }
      }
    }
    countries {
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
