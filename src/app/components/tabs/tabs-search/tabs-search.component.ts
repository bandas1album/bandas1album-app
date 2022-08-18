import { Apollo, gql } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

const GET_AUTOCOMPLETE = gql`
  query GetAutocomplete($search: String) {
    albums(
      filters: {
        or: [
          { title: { startsWith: $search } }
          { artist: { startsWith: $search } }
        ]
      }
    ) {
      data {
        attributes {
          title
        }
      }
    }

    genres(filters: { title: { startsWith: $search } }) {
      data {
        attributes {
          title
        }
      }
    }

    countries(filters: { title: { startsWith: $search } }) {
      data {
        attributes {
          title
        }
      }
    }
  }
`;

@Component({
  selector: 'app-tabs-search',
  templateUrl: './tabs-search.component.html',
  styleUrls: ['./tabs-search.component.scss'],
})
export class TabsSearchComponent implements OnInit {
  autocompleteList: any = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {}

  get(event: any) {
    if (!event.target.value) {
      return (this.autocompleteList = []);
    }

    return this.apollo
      .watchQuery<any>({
        query: GET_AUTOCOMPLETE,
        variables: {
          search: event.target.value,
        },
      })
      .valueChanges.subscribe(({ data }) => {
        this.autocompleteList = data;
      });
  }
}
