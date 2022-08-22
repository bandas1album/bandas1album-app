import gql from 'graphql-tag';

const GENRES_QUERY: any = gql`
  query Genres($page: Int, $perpage: Int, $sort: [String]) {
    genres(pagination: { page: $page, pageSize: $perpage }, sort: $sort) {
      data {
        attributes {
          title
          slug
        }
      }
    }
  }
`;

export default GENRES_QUERY;
