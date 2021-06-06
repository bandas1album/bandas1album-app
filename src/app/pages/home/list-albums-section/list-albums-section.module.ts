import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlbumsSectionComponent } from './list-albums-section.component';
import { ListAlbumsModule } from 'src/app/components/lists/list-albums/list-albums.module';
import { CardListAlbumsModule } from 'src/app/components/cards/card-list-albums/card-list-albums.module';
import { RouterModule } from '@angular/router';
import { PlaceholderListAlbumsModule } from 'src/app/components/lists/list-albums/placeholder-list-albums/placeholder-list-albums.module';

@NgModule({
  declarations: [ListAlbumsSectionComponent],
  imports: [
    CommonModule,
    PlaceholderListAlbumsModule,
    ListAlbumsModule,
    CardListAlbumsModule,
    RouterModule,
  ],
  exports: [ListAlbumsSectionComponent],
})
export class ListAlbumsSectionModule {}
