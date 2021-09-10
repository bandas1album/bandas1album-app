import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Apollo, gql} from 'apollo-angular';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
  isBrowser = false;
  showFilters: boolean = false;
  firstLoading: boolean = true;
  item: any = {};
  list: any = {
    loading: true,
    items: [],
  };
  total: number = 0;
  countries: any = [];

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private apollo: Apollo,
    private route: ActivatedRoute,
    private seoService: SeoService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { slug } = params;
      this.getAlbums(slug);
    });
  }

  getAlbums(slug: string = '') {
    this.list.loading = true;

    this.apollo.watchQuery({
      query: gql`
        {
          generoAlbum(id: "${slug}", idType: SLUG) {
            name
            seo {
              title
              metaDesc
              opengraphImage {
                sourceUrl
              }
            }
            acfCategory {
              banner {
                sourceUrl
              }
            }
          }
          albums(
            where: {
              taxQuery: {
                relation: OR,
                taxArray: [
                  {
                    terms: ["${slug}"],
                    taxonomy: GENEROALBUM,
                    operator: IN,
                    field: SLUG
                  },
                ]
              }
            }
          ) {
            edges {
              node {
                slug
                title
                link
                acf {
                  artist
                  country
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
      `
    }).valueChanges.subscribe((result: any) => {
      const seo = result.data.generoAlbum.seo;
      this.seoService.update(seo);
      this.seoService.updateOgUrl();
      this.item = result.data.generoAlbum;
      this.list.items = result.data.albums.edges;
      this.list.loading = false;
      this.total = result.data.albums.pageInfo.total;
      this.filterCountries();
    });
  }

  async filterCountries() {
    await this.list.items.filter((item: any) => {
      const country = item.node.acf.country;

      if (!this.countries.includes(country)) {
        this.countries.push(country);
      }
    });
  }

  doFilter(data: any) {
    // const { order, country } = data;

    // if (order?.value) {
    //   this.albumParams = Object.assign(this.albumParams, order.value);
    // } else {
    //   this.albumParams = Object.assign(this.albumParams, {
    //     orderby: 'title',
    //     order: 'asc',
    //   });
    // }

    // if (country) {
    //   this.albumParams = Object.assign(this.albumParams, country);
    // } else {
    //   this.albumParams = Object.assign(this.albumParams, {
    //     meta_key: '',
    //     meta_value: '',
    //   });
    // }

    // this.getAlbums();
  }
}
