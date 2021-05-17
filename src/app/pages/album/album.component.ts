import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService } from 'src/app/services/album/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  pageId: string = '';
  item: any = {};

  constructor(private albumService: AlbumService, private router: Router) {
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
      },
      (err: any) => {
        // console.log(err);
      }
    );
  }
}
