import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';

import ALBUMS_QUERY from 'src/app/@graphql/queries/albums';
import GENRES_QUERY from 'src/app/@graphql/queries/genres';
import COUNTRIES_QUERY from 'src/app/@graphql/queries/countries';

import { DataMenu } from 'src/app/models/menu/data-menu.model';

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

  private getAlbums(): Subscription {
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

  protected onScrollAlbums(): Subscription {
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

  private getGenres(): Subscription {
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

  protected onScrollGenres(): Subscription {
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

  private getCountries(): Subscription {
    this.data.countries.loading = true;

    return this.apollo
      .watchQuery<any>({
        query: COUNTRIES_QUERY,
        variables: {
          page: this.data.countries.page,
          perpage: this.data.countries.perpage,
          sort: ['title:asc'],
        },
      })
      .valueChanges.subscribe((result) => {
        this.data.countries.loading = result.loading;
        this.data.countries.errors = result.errors;
        this.data.countries.list = result.data.countries.data;
      });
  }

  protected onScrollCountries(): Subscription {
    this.data.countries.loading = true;

    return this.apollo
      .watchQuery<any>({
        query: COUNTRIES_QUERY,
        variables: {
          page: ++this.data.countries.page,
          perpage: this.data.countries.perpage,
          sort: ['title:asc'],
        },
      })
      .valueChanges.subscribe((result) => {
        this.data.countries.loading = result.loading;
        this.data.countries.errors = result.errors;
        this.data.countries.list = Object.assign([], this.data.countries.list);
        this.data.countries.list.push(...result.data.countries.data);
      });
  }

  private getYears(): void {}
}
