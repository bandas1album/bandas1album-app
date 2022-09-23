import { PageHeaderModule } from './../../components/headers/page-header/page-header.module';
import { CardAlbumModule } from './../../components/cards/card-album/card-album.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ListAlbumsModule } from './../../components/lists/list-albums/list-albums.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { GenreComponent } from './genre.component';

@NgModule({
  declarations: [GenreComponent],
  imports: [
    CommonModule,
    GenreRoutingModule,
    PageHeaderModule,
    ListAlbumsModule,
    CardAlbumModule,
    InfiniteScrollModule,
  ],
})
export class GenreModule {}
