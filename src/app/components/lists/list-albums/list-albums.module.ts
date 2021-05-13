import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlbumsComponent } from './list-albums.component';

@NgModule({
  declarations: [ListAlbumsComponent],
  imports: [CommonModule],
  exports: [ListAlbumsComponent],
})
export class ListAlbumsModule {}
