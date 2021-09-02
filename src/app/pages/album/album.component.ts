import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from 'src/app/services/seo/seo.service';
import { ShareModalComponent } from 'src/app/components/modals/share-modal/share-modal.component';
import { formatDate, isPlatformBrowser } from '@angular/common';
import { HtmlDecodePipe } from 'src/app/pipes/html-decode/html-decode.pipe';
import {Apollo, gql} from 'apollo-angular';

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
    private seoService: SeoService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private htmlDecodePipe: HtmlDecodePipe
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
              metaDesc
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
      this.item = result.data.album;

        const mountTitle =
          this.item.title == this.item.acf.artist
            ? this.item.title
            : `${this.item.title} - ${this.item.acf.artist}`;
        const title = this.htmlDecodePipe.transform(mountTitle);
        const year = new Date(this.item.acf.released).getFullYear();

        this.seoService.updateTitle(`${title} (${year}) | Bandas de 1 Álbum`);
        this.seoService.metatags([
          {
            name: 'description',
            content: this.item.seo.metaDesc
          },
          {
            name: 'og:image',
            content: this.item.featuredImage.node.sourceUrl
          }
        ]);

        this.loading = false;
    })
  }

  share() {
    this.dialog.open(ShareModalComponent, {
      panelClass: 'modal-share',
      data: {
        slug: this.item.slug,
        title: this.item.title,
        artist: this.item.acf.artist,
        released: formatDate(this.item.acf.released, 'yyyy', 'en-US'),
      },
    });
  }
}
