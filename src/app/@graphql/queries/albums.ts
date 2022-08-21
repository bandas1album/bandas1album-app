import gql from 'graphql-tag';

const ALBUMS_QUERY: any = gql`
  query Albums($page: Int) {
    albums(pagination: { page: $page, pageSize: 48 }) {
      data {
        attributes {
          title
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
