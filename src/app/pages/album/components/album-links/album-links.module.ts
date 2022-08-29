import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumLinksComponent } from './album-links.component';

@NgModule({
  declarations: [AlbumLinksComponent],
  imports: [CommonModule],
  exports: [AlbumLinksComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlbumLinksModule {}
