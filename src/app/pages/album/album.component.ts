import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
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

  constructor(
    private seoService: SeoService,
    private albumService: AlbumService,
    private router: Router
  ) {
    this.pageId = this.router.routerState.snapshot.url;
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    const slug = this.pageId.replace('/', '');
    const params = {
      slug: slug,
    };

    this.albumService.get({ params: params }).subscribe(
      (res: any) => {
        this.item = res[0];
        this.seoService.updateTitle(
          `${this.item.title.rendered} | Bandas de 1 Álbum`
        );
        this.seoService.metatags(this.item);
      },
      (err: any) => {
        // console.log(err);
      }
    );
  }
}
