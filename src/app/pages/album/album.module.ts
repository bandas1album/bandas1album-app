import { AlbumLinksModule } from './components/album-links/album-links.module';
import { AlbumTracklistModule } from './components/album-tracklist/album-tracklist.module';
import { AlbumInfosModule } from './components/album-infos/album-infos.module';
import { PageHeaderModule } from './../../components/headers/page-header/page-header.module';
import { AlbumCoverModule } from './components/album-cover/album-cover.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';

@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    AlbumRoutingModule,
    AlbumCoverModule,
    AlbumLinksModule,
    AlbumInfosModule,
    AlbumTracklistModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlbumModule {}
