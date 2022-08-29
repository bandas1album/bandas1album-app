import { AlbumLinksModule } from './../album-links/album-links.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumInfosComponent } from './album-infos.component';

@NgModule({
  declarations: [AlbumInfosComponent],
  imports: [CommonModule, AlbumLinksModule],
  exports: [AlbumInfosComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlbumInfosModule {}
