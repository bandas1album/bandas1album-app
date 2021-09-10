import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareModalComponent } from 'src/app/components/modals/share-modal/share-modal.component';
import { formatDate, isPlatformBrowser } from '@angular/common';
import {Apollo, gql} from 'apollo-angular';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  isBrowser = false;
  pageId: string = '';
  item: any = {};
  loading: boolean = true;
  params: any = {
    slug: '',
  };

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private apollo: Apollo,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private seoService: SeoService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.pageId = this.router.routerState.snapshot.url;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { slug } = params;
      this.item = {};
      this.pageId = '';
      this.params.slug = slug;

      this.get();
    });
  }

  get() {
    if (!this.isBrowser) {
      return;
    }

    this.apollo.watchQuery({
      query: gql`
        {
          album(id: "${this.params.slug}", idType: URI) {
            albumId
            title
            content
            link
            terms {
              edges {
                node {
                  slug
                  name
                }
              }
            }
            acf {
              amazon
              artist
              country
              deezer
              download
              label
              lastfm
              released
              spotify
              tracklist {
                duration
                fieldGroupName
                title
              }
              wikipedia
            }
            seo {
              title
              metaDesc
              opengraphImage {
                sourceUrl
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      `,
    }).valueChanges.subscribe((result: any) => {
      const seo = result.data.album.seo;
      this.seoService.update(seo);
      this.seoService.updateOgUrl();
      this.item = result.data.album;
      this.loading = false;
    })
  }

  share() {
    this.dialog.open(ShareModalComponent, {
      panelClass: 'modal-share',
      data: {
        link: `https://bandas1album.com.br/album/${this.item.slug}`,
        title: this.item.title,
        artist: this.item.acf.artist,
        released: formatDate(this.item.acf.released, 'yyyy', 'en-US'),
      },
    });
  }
}
