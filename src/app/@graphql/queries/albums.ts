import gql from 'graphql-tag';

const ALBUMS_QUERY: any = gql`
  query Albums($page: Int) {
    albums(pagination: { page: $page, pageSize: 104 }) {
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
