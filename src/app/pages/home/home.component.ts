import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import {Apollo, gql} from 'apollo-angular';
import { SeoService } from 'src/app/services/seo/seo.service';

const query = gql`
{
  page(id: "/", idType: URI) {
    seo {
      title
      metaDesc
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
    }
    pageInfo {
      total
    }
  }
}
`;

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
    private seoService: SeoService
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
      query
    }).valueChanges.subscribe((result: any) => {
      const seo = result.data.page.seo;
      this.seoService.updateTitle(seo.title);
      this.seoService.updateTag('description', seo.metaDesc);
      this.items = result.data.albums.edges;
      this.total = result.data.albums.pageInfo.total;
      this.loading = false;
    });
  }
}
