import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import ALBUMS_QUERY from 'src/app/@graphql/queries/albums';

@Component({
  selector: 'app-tabs-menu',
  templateUrl: './tabs-menu.component.html',
  styleUrls: ['./tabs-menu.component.scss'],
})
export class TabsMenuComponent implements OnInit {
  data: any = {
    albums: [],
    genres: [],
    countries: [],
    years: [],
  };
  errors: any = [];
  loading: boolean = false;

  page: number = 1;
  perpage: number = 16;

  // TODO
  showAlbums: boolean = false;
  showGenres: boolean = false;
  showCountries: boolean = false;
  showDebut: boolean = false;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.getAlbums();
    this.getGenres();
    this.getCountries();
    this.getYears();
  }

  getAlbums() {
    this.loading = true;

    return this.apollo
      .watchQuery<any>({
        query: ALBUMS_QUERY,
        variables: {
          page: this.page,
          perpage: this.perpage,
        },
      })
      .valueChanges.subscribe((result) => {
        this.loading = result.loading;
        this.errors = result.errors;
        this.data.albums = result.data.albums.data;
      });
  }

  onScrollAlbums() {
    this.loading = true;

    return this.apollo
      .watchQuery<any>({
        query: ALBUMS_QUERY,
        variables: {
          page: ++this.page,
          perpage: this.perpage,
        },
      })
      .valueChanges.subscribe((result) => {
        this.loading = result.loading;
        this.errors = result.errors;
        this.data.albums = Object.assign([], this.data.albums);
        this.data.albums.push(...result.data.albums.data);
      });
  }

  getGenres() {}

  getCountries() {}

  getYears() {}
}
