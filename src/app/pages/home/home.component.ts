import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import ALBUMS_QUERY from 'src/app/@graphql/queries/albums';
import { Album } from 'src/app/models/album/album.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  firstLoading = true;
  loading = true;
  data?: Album[];
  errors: any;
  page: number = 1;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo
      .watchQuery<any>({
        query: ALBUMS_QUERY,
        variables: {
          page: 1,
        },
      })
      .valueChanges.subscribe((result) => {
        this.firstLoading = false;
        this.data = result.data.albums.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }

  onScroll() {
    this.loading = true;

    return this.apollo
      .watchQuery<any>({
        query: ALBUMS_QUERY,
        variables: {
          page: ++this.page,
        },
      })
      .valueChanges.subscribe((result) => {
        this.data = Object.assign([], this.data);
        this.data.push(...result.data.albums.data);
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }
}
