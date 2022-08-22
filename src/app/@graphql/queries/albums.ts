import gql from 'graphql-tag';

const ALBUMS_QUERY: any = gql`
  query Albums($page: Int, $perpage: Int, $sort: [String]) {
    albums(pagination: { page: $page, pageSize: $perpage }, sort: $sort) {
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
    }
  }
`;

export default ALBUMS_QUERY;
