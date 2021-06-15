import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from 'src/app/services/album/album.service';
import { SeoService } from 'src/app/services/seo/seo.service';
import { ShareModalComponent } from 'src/app/components/modals/share-modal/share-modal.component';
import { formatDate } from '@angular/common';
import { HtmlDecodePipe } from 'src/app/pipes/html-decode/html-decode.pipe';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  pageId: string = '';
  item: any = {};
  loading: boolean = true;
  params: any = {
    slug: '',
  };

  constructor(
    private seoService: SeoService,
    private albumService: AlbumService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private htmlDecodePipe: HtmlDecodePipe
  ) {
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
    this.albumService.get({ params: this.params }).subscribe(
      (res: any) => {
        this.item = res[0];

        const mountTitle =
          this.item.title.rendered == this.item.acf.artist
            ? this.item.title.rendered
            : `${this.item.title.rendered} - ${this.item.acf.artist}`;
        const title = this.htmlDecodePipe.transform(mountTitle);
        const year = new Date(this.item.acf.released).getFullYear();

        this.seoService.updateTitle(`${title} (${year}) | Bandas de 1 Álbum`);
        this.seoService.metatags(this.item);

        this.loading = false;
      },
      (err: any) => {
        // console.log(err);
        this.loading = false;
      }
    );
  }

  share() {
    this.dialog.open(ShareModalComponent, {
      panelClass: 'modal-share',
      data: {
        slug: this.item.slug,
        title: this.item.title.rendered,
        artist: this.item.acf.artist,
        released: formatDate(this.item.acf.released, 'yyyy', 'en-US'),
      },
    });
  }
}
