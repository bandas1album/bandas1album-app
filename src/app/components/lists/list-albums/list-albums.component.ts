import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const GET_ALBUMS = gql`
  query getAlbums($page: Int) {
    albums(pagination: { page: $page, pageSize: 48 }) {
      data {
        attributes {
          title
          artist
          cover {
            data {
              attributes {
                url
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
        }
      }
    }
  }
`;

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.scss'],
})
export class ListAlbumsComponent implements OnInit {
  albums: any = [];

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    return this.apollo
      .watchQuery<any>({
        query: GET_ALBUMS,
        variables: {
          page: 1,
        },
      })
      .valueChanges.subscribe(({ data }) => {
        this.albums = data.albums.data;
      });
  }
}
