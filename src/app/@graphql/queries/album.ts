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
                slug
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
          tracklist
          social
        }
      }
    }
  }
`;

export default ALBUM_QUERY;
