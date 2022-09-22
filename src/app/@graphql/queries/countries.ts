import gql from 'graphql-tag';

const COUNTRIES_QUERY: any = gql`
  query Countries($page: Int, $perpage: Int, $sort: [String]) {
    countries(pagination: { page: $page, pageSize: $perpage }, sort: $sort) {
      data {
        attributes {
          title
          slug
        }
      }
    }
  }
`;

export default COUNTRIES_QUERY;
