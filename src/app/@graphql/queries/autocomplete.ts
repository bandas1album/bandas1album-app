import { gql } from 'graphql-tag';

const AUTOCOMPLETE_QUERY: any = gql`
  query Autocomplete($search: String) {
    albums(
      filters: {
        or: [
          { title: { startsWith: $search } }
          { artist: { startsWith: $search } }
        ]
      }
      pagination: { limit: 2 }
    ) {
      data {
        attributes {
          title
        }
      }
    }

    genres(
      filters: { title: { startsWith: $search } }
      pagination: { limit: 2 }
    ) {
      data {
        attributes {
          title
        }
      }
    }

    countries(
      filters: { title: { startsWith: $search } }
      pagination: { limit: 2 }
    ) {
      data {
        attributes {
          title
        }
      }
    }
  }
`;

export default AUTOCOMPLETE_QUERY;
