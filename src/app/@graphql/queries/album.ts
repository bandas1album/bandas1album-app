import gql from 'graphql-tag';

const ALBUM_QUERY: any = gql`
  query Album($slug: String!) {
    albums(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
        }
      }
    }
  }
`;

export default ALBUM_QUERY;
