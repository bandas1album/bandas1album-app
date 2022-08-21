import { Apollo } from 'apollo-angular';
import { Component, OnInit } from '@angular/core';
import ALBUMS_QUERY from 'src/app/@graphql/queries/albums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any;
  loading = true;
  errors: any;

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    return this.apollo
      .watchQuery<any>({
        query: ALBUMS_QUERY,
        variables: {
          page: 1,
        },
      })
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }
}
