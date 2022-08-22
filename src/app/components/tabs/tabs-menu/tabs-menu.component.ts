import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import ALBUMS_QUERY from 'src/app/@graphql/queries/albums';
import GENRES_QUERY from 'src/app/@graphql/queries/genres';
import { Album } from 'src/app/models/album/album.model';

class DataMenu {
  albums: DataMenuList = new DataMenuList();
  genres: DataMenuList = new DataMenuList();
  countries: DataMenuList = new DataMenuList();
  years: DataMenuList = new DataMenuList();
}

class DataMenuList {
  list: Album[] = [];
  errors: any = [];
  loading: boolean = false;
  page: number = 1;
  perpage: number = 16;
  total: number = 0;
}

@Component({
  selector: 'app-tabs-menu',
  templateUrl: './tabs-menu.component.html',
  styleUrls: ['./tabs-menu.component.scss'],
})
export class TabsMenuComponent implements OnInit {
  data = new DataMenu();

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
    this.data.albums.loading = true;

    return this.apollo
      .watchQuery<any>({
        query: ALBUMS_QUERY,
        variables: {
          page: this.data.albums.page,
          perpage: this.data.albums.perpage,
          sort: ['title:asc'],
        },
      })
      .valueChanges.subscribe((result) => {
        this.data.albums.loading = result.loading;
        this.data.albums.errors = result.errors;
        this.data.albums.list = result.data.albums.data;
      });
  }

  onScrollAlbums() {
    this.data.albums.loading = true;

    return this.apollo
      .watchQuery<any>({
        query: ALBUMS_QUERY,
        variables: {
          page: ++this.data.albums.page,
          perpage: this.data.albums.perpage,
          sort: ['title:asc'],
        },
      })
      .valueChanges.subscribe((result) => {
        this.data.albums.loading = result.loading;
        this.data.albums.errors = result.errors;
        this.data.albums.list = Object.assign([], this.data.albums.list);
        this.data.albums.list.push(...result.data.albums.data);
      });
  }

  getGenres() {
    this.data.genres.loading = true;

    return this.apollo
      .watchQuery<any>({
        query: GENRES_QUERY,
        variables: {
          page: this.data.genres.page,
          perpage: this.data.genres.perpage,
          sort: ['title:asc'],
        },
      })
      .valueChanges.subscribe((result) => {
        this.data.genres.loading = result.loading;
        this.data.genres.errors = result.errors;
        this.data.genres.list = result.data.genres.data;
      });
  }

  onScrollGenres() {
    this.data.genres.loading = true;

    return this.apollo
      .watchQuery<any>({
        query: GENRES_QUERY,
        variables: {
          page: ++this.data.genres.page,
          perpage: this.data.genres.perpage,
          sort: ['title:asc'],
        },
      })
      .valueChanges.subscribe((result) => {
        this.data.genres.loading = result.loading;
        this.data.genres.errors = result.errors;
        this.data.genres.list = Object.assign([], this.data.genres.list);
        this.data.genres.list.push(...result.data.genres.data);
      });
  }

  getCountries() {}

  getYears() {}
}
