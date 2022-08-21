import { CardAlbumModule } from './../../cards/card-album/card-album.module';
import { SlugifyModule } from './../../../pipes/slugify/slugify.module';
import { SlugifyPipe } from './../../../pipes/slugify/slugify.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlbumsComponent } from './list-albums.component';

@NgModule({
  declarations: [ListAlbumsComponent],
  imports: [CommonModule],
  exports: [ListAlbumsComponent],
})
export class ListAlbumsModule {}
