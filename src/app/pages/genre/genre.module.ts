import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { GenreComponent } from './genre.component';
import { FullBannerModule } from 'src/app/components/banners/full-banner/full-banner.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';
import { ListAlbumsModule } from 'src/app/components/lists/list-albums/list-albums.module';
import { CardListAlbumsModule } from 'src/app/components/cards/card-list-albums/card-list-albums.module';
import { GenreFilterModule } from 'src/app/components/filters/genre-filter/genre-filter.module';
import { ButtonModule } from 'src/app/components/buttons/button/button.module';
import { PlaceholderListAlbumsModule } from 'src/app/components/lists/list-albums/placeholder-list-albums/placeholder-list-albums.module';

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
    GenreFilterModule,
    ButtonModule,
    PlaceholderListAlbumsModule,
  ],
})
export class GenreModule {}
