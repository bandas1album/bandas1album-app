import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';


@NgModule({
  declarations: [
    AlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
