import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { GenreComponent } from './genre.component';
import { FullBannerModule } from 'src/app/components/banners/full-banner/full-banner.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';
import { ListAlbumsModule } from 'src/app/components/lists/list-albums/list-albums.module';
import { CardListAlbumsModule } from 'src/app/components/cards/card-list-albums/card-list-albums.module';

@NgModule({
  declarations: [GenreComponent],
  imports: [
    CommonModule,
    GenreRoutingModule,
    SidebarModule,
    FullBannerModule,
    RouterModule,
    ListAlbumsModule,
    CardListAlbumsModule,
  ],
})
export class GenreModule {}
