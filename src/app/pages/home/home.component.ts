import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album/album.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  list: any = {
    items: [],
  };

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    const params = {
      per_page: 96,
    };
    this.albumService.get({ params: params }).subscribe(
      (res: any) => {
        this.list.items = res;
      },
      (err: any) => {
        // console.log(err);
      }
    );
  }
}
