import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isBrowser = false;
  loading: boolean = true;
  items: any = [];
  total: number = 0;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private apollo: Apollo,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    if (!this.isBrowser) {
      return;
    }

    this.apollo.watchQuery({
      query: gql`
        {
          page(id: "/", idType: URI) {
            seo {
              fullHead
            }
          }
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
                    sourceUrl(size: THUMBNAIL)
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
      const seo = result.data.page.seo;
      document.querySelector('head')?.insertAdjacentHTML('beforeend', seo.fullHead);
      this.items = result.data.albums.edges;
      this.total = result.data.albums.pageInfo.total;
      this.loading = false;
    });
  }
}
