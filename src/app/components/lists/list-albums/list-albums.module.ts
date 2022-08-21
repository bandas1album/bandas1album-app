import { CardAlbumModule } from './../../cards/card-album/card-album.module';
import { SlugifyModule } from './../../../pipes/slugify/slugify.module';
import { SlugifyPipe } from './../../../pipes/slugify/slugify.pipe';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlbumsComponent } from './list-albums.component';

@NgModule({
  declarations: [ListAlbumsComponent],
  imports: [CommonModule],
  exports: [ListAlbumsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ListAlbumsModule {}
