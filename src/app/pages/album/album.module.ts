import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { DisqusModule } from 'ngx-disqus';
import { MatDialogModule } from '@angular/material/dialog';
import { ListLinksModule } from 'src/app/components/lists/list-links/list-links.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';

@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    DisqusModule.forRoot('bandas1album'),
    MatDialogModule,
    ListLinksModule,
    SidebarModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AlbumModule {}
