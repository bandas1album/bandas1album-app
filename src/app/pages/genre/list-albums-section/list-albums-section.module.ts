import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlbumsSectionComponent } from './list-albums-section.component';
import { RouterModule } from '@angular/router';
import { ListAlbumsModule } from 'src/app/components/lists/list-albums/list-albums.module';
import { CardListAlbumsModule } from 'src/app/components/cards/card-list-albums/card-list-albums.module';

@NgModule({
  declarations: [ListAlbumsSectionComponent],
  imports: [CommonModule, RouterModule, ListAlbumsModule, CardListAlbumsModule],
  exports: [ListAlbumsSectionComponent],
})
export class ListAlbumsSectionModule {}
