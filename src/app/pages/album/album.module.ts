import { AlbumInfosModule } from './components/album-infos/album-infos.module';
import { PageHeaderModule } from './../../components/headers/page-header/page-header.module';
import { AlbumCoverModule } from './components/album-cover/album-cover.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';

@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    AlbumCoverModule,
    AlbumInfosModule,
    PageHeaderModule,
  ],
})
export class AlbumModule {}
