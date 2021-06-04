import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from 'src/app/services/album/album.service';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  pageId: string = '';
  item: any = {};
  params: any = {
    slug: '',
  };

  constructor(
    private seoService: SeoService,
    private albumService: AlbumService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
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
        const title =
          this.item.title.rendered == this.item.acf.artist
            ? this.item.title.rendered
            : `${this.item.title.rendered} - ${this.item.acf.artist}`;
        const year = new Date(this.item.acf.released).getFullYear();
        this.seoService.updateTitle(`${title} (${year}) | Bandas de 1 Álbum`);
        this.seoService.metatags(this.item);
      },
      (err: any) => {
        // console.log(err);
      }
    );
  }
}
