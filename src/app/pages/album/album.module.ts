import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ListLinksModule } from 'src/app/components/lists/list-links/list-links.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { FooterDefaultModule } from 'src/app/components/footers/footer-default/footer-default.module';
import { ShareModalModule } from 'src/app/components/modals/share-modal/share-modal.module';
import { CardPostAlbumModule } from 'src/app/components/cards/card-post-album/card-post-album.module';
import { LoadingCardPostAlbumModule } from 'src/app/components/cards/card-post-album/loading-card-post-album/loading-card-post-album.module';
import { TracklistModule } from 'src/app/components/lists/tracklist/tracklist.module';
import { HtmlDecodeModule } from 'src/app/pipes/html-decode/html-decode.module';

@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    MatDialogModule,
    ListLinksModule,
    SidebarModule,
    FooterDefaultModule,
    ShareModalModule,
    CardPostAlbumModule,
    LoadingCardPostAlbumModule,
    TracklistModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AlbumModule {}
