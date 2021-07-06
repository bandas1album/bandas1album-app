import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/services/album/album.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
})
export class RandomComponent implements OnInit {
  isBrowser = false;
  params: any = {
    page: 1,
    per_page: 1,
    orderby: 'rand',
  };

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private albumService: AlbumService,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    if (!this.isBrowser) {
      return;
    }

    this.albumService.get({ params: this.params }).subscribe(
      (res: any) => {
        const data = res[0];
        this.router.navigateByUrl(`/album/${data.slug}`);
      },
      (err: any) => {
        // console.log(err);
      }
    );
  }
}
