import gql from 'graphql-tag';

const ALBUMS_QUERY: any = gql`
  query Albums($page: Int, $perpage: Int) {
    albums(pagination: { page: $page, pageSize: $perpage }) {
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
