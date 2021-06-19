import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/services/album/album.service';
import { GenresService } from 'src/app/services/genres/genres.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
  showFilters: boolean = false;
  firstLoading: boolean = true;
  item: any = {};
  list: any = {
    loading: true,
    items: [],
  };
  total: number = 0;
  genresParams: any = {};
  countries: any = [];

  albumParams: any = {
    per_page: 96,
    page: 1,
    generos_album: [],
    orderby: 'meta_value',
    meta_key: 'released',
    order: 'asc',
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
      this.item = data;

      this.getAlbums();
    });
  }

  getAlbums() {
    this.list.loading = true;

    this.albumService
      .get({ observe: 'response', params: this.albumParams })
      .subscribe(
        (res: any) => {
          const { body, headers } = res;
          this.list.items = body;
          this.total = headers.get('X-WP-Total');
          this.list.loading = false;
          this.firstLoading = false;
          this.filterCountries();
        },
        (err: any) => {
          this.list.loading = false;
          // console.log(err);
        }
      );
  }

  async filterCountries() {
    await this.list.items.filter((item: any) => {
      const country = item.acf.country;

      if (!this.countries.includes(country)) {
        this.countries.push(country);
      }
    });
  }

  doFilter(data: any) {
    const { released, title, country } = data;

    this.albumParams.order = released ? 'asc' : 'desc';

    this.getAlbums();
  }
}
