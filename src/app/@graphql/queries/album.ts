import gql from 'graphql-tag';

const ALBUM_QUERY: any = gql`
  query Album($slug: String!) {
    albums(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          artist
          released
          country {
            data {
              attributes {
                title
              }
            }
          }
          genres {
            data {
              attributes {
                title
              }
            }
          }
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

export default ALBUM_QUERY;
