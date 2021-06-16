import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { GenreComponent } from './genre.component';
import { FullBannerModule } from 'src/app/components/banners/full-banner/full-banner.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { ListAlbumsSectionModule } from './list-albums-section/list-albums-section.module';

@NgModule({
  declarations: [GenreComponent],
  imports: [
    CommonModule,
    GenreRoutingModule,
    SidebarModule,
    FullBannerModule,
    ListAlbumsSectionModule,
  ],
})
export class GenreModule {}
