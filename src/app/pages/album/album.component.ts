import { SlugifyPipe } from './../../pipes/slugify/slugify.pipe';
import { Location } from '@angular/common';
import { Apollo, gql } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

const GET_ALBUM = gql`
  query getAlbum($slug: String) {
    albums(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
        }
      }
    }
  }
`;

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  album: any;

  constructor(private route: ActivatedRoute, private apollo: Apollo) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    this.getAlbum(slug);
  }

  getAlbum(slug: string | null) {
    return this.apollo
      .watchQuery<any>({
        query: GET_ALBUM,
        variables: {
          slug,
        },
      })
      .valueChanges.subscribe(({ data }) => {
        this.album = data.albums.data[0].attributes;
      });
  }
}
