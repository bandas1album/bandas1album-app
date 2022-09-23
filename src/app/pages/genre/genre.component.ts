import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import ALBUMS_QUERY from 'src/app/@graphql/queries/albums';
import { Album } from 'src/app/interfaces/album';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
  firstLoading = true;
  loading = true;
  data!: Album[];
  errors: any;
  page: number = 1;
  perpage: number = 104;
  genre: string = '';
  meta: any;

  private queryGenre!: Subscription;

  constructor(private route: ActivatedRoute, private apollo: Apollo) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.genre = params.slug;

      this.queryGenre = this.apollo
        .watchQuery<any>({
          query: ALBUMS_QUERY,
          variables: {
            page: this.page,
            perpage: this.perpage,
            genres: {
              slug: {
                eq: this.genre,
              },
            },
          },
        })
        .valueChanges.subscribe((result) => {
          this.firstLoading = false;
          this.data = result.data.albums.data;
          this.loading = result.loading;
          this.errors = result.errors;
          this.meta = result.data.albums.meta;
        });
    });
  }

  ngOnDestroy() {
    this.queryGenre.unsubscribe();
  }

  onScroll() {
    if (this.meta.pagination.total < this.data.length) {
      this.loading = true;
      return this.apollo
        .watchQuery<any>({
          query: ALBUMS_QUERY,
          variables: {
            page: ++this.page,
            perpage: this.perpage,
            genres: {
              slug: {
                eq: this.genre,
              },
            },
          },
        })
        .valueChanges.subscribe((result) => {
          this.data = Object.assign([], this.data);
          this.data.push(...result.data.albums.data);
          this.loading = result.loading;
          this.errors = result.errors;
        });
    }

    return;
  }
}
