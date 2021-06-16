import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/services/album/album.service';
import { GenresService } from 'src/app/services/genres/genres.service';

@Component({
  selector: 'app-list-albums-section',
  templateUrl: './list-albums-section.component.html',
  styleUrls: ['./list-albums-section.component.scss'],
})
export class ListAlbumsSectionComponent implements OnInit {
  firstLoading: boolean = true;
  list: any = {
    loading: true,
    items: [],
  };
  total: number = 0;
  genresParams: any = {};

  albumParams: any = {
    per_page: 96,
    page: 1,
    generos_album: [],
  };

  constructor(
    private genresService: GenresService,
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const { slug } = params;
      this.genresParams.slug = slug;
      this.getGenreId();
    });
  }

  getGenreId() {
    this.genresService.get({ params: this.genresParams }).subscribe((res) => {
      const data = res[0];
      this.albumParams.generos_album = data.id;

      this.getAlbums();
    });
  }

  getAlbums() {
    this.albumService
      .get({ observe: 'response', params: this.albumParams })
      .subscribe(
        (res: any) => {
          const { body, headers } = res;
          this.list.items = body;
          this.total = headers.get('X-WP-Total');
          this.list.loading = false;
          this.firstLoading = false;
        },
        (err: any) => {
          this.list.loading = false;
          // console.log(err);
        }
      );
  }
}
