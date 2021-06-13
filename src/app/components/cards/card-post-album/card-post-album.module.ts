import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPostAlbumComponent } from './card-post-album.component';
import { ListBreadcrumbModule } from '../../lists/list-breadcrumb/list-breadcrumb.module';

@NgModule({
  declarations: [CardPostAlbumComponent],
  imports: [CommonModule, ListBreadcrumbModule],
  exports: [CardPostAlbumComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CardPostAlbumModule {}
