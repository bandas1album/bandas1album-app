import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-list-albums-section',
  templateUrl: './list-albums-section.component.html',
  styleUrls: ['./list-albums-section.component.scss'],
})
export class ListAlbumsSectionComponent implements OnInit {
  isBrowser = false;
  firstLoading: boolean = true;
  list: any = {
    loading: true,
    items: [],
  };
  total: number = 0;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private apollo: Apollo,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  async getAlbums() {
    if (!this.isBrowser) {
      return;
    }

    this.apollo.watchQuery({
      query: gql`
        {
          albums(first: 95) {
            edges {
              node {
                slug
                title
                link
                acf {
                  artist
                }
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            },
            pageInfo {
              total
            }
          }
        }
      `
    }).valueChanges.subscribe((result: any) => {
      this.list.items = result.data.albums.edges;
      this.total = result.data.albums.pageInfo.total;
      this.list.loading = false;
      this.firstLoading = false;
    });
  }
}
