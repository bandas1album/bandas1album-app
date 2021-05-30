import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { DisqusModule } from 'ngx-disqus';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    DisqusModule.forRoot('bandas1album'),
    MatDialogModule,
  ],
})
export class AlbumModule {}
