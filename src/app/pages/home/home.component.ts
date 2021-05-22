import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album/album.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list: any = {
    loading: true,
    items: [],
  };
  total: number = 0;
  params: any = {
    per_page: 95,
    page: 1,
  };

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  async getAlbums() {
    await this.albumService
      .get({ observe: 'response', params: this.params })
      .subscribe(
        (res: any) => {
          const { body, headers } = res;
          this.list.items = body;
          this.total = headers.get('X-WP-Total');
        },
        (err: any) => {
          // console.log(err);
        }
      );
  }
}
