import { CardMenuModule } from './../../cards/card-menu/card-menu.module';
import { CardMenuAlbumModule } from './../../cards/card-menu-album/card-menu-album.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsMenuComponent } from './tabs-menu.component';

@NgModule({
  declarations: [TabsMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule,
    CardMenuModule,
    CardMenuAlbumModule,
  ],
  exports: [TabsMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsMenuModule {}
