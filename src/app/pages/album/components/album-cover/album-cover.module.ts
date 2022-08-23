import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCoverComponent } from './album-cover.component';

@NgModule({
  declarations: [AlbumCoverComponent],
  imports: [CommonModule],
  exports: [AlbumCoverComponent],
})
export class AlbumCoverModule {}
