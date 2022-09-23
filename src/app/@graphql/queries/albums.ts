import gql from 'graphql-tag';

const ALBUMS_QUERY: any = gql`
  query Albums(
    $page: Int
    $perpage: Int
    $sort: [String]
    $genres: GenreFiltersInput
  ) {
    albums(
      pagination: { page: $page, pageSize: $perpage }
      sort: $sort
      filters: { genres: $genres }
    ) {
      data {
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
      meta {
        pagination {
          total
          pageSize
        }
      }
    }
  }
`;

export default ALBUMS_QUERY;
