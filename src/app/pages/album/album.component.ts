import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import ALBUM_QUERY from '../../@graphql/queries/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  data: any;
  loading = true;
  errors: any;

  private queryAlbum!: Subscription;

  constructor(private route: ActivatedRoute, private apollo: Apollo) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.queryAlbum = this.apollo
        .watchQuery<any>({
          query: ALBUM_QUERY,
          variables: {
            slug: params.slug,
          },
        })
        .valueChanges.subscribe((result) => {
          this.data = result.data;
          this.loading = result.loading;
          this.errors = result.errors;
        });
    });
  }

  ngOnDestroy() {
    this.queryAlbum.unsubscribe();
  }
}
