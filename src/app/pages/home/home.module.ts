import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { ListAlbumsModule } from 'src/app/components/lists/list-albums/list-albums.module';
import { CardListAlbumsModule } from 'src/app/components/cards/card-list-albums/card-list-albums.module';
import { ListAlbumsSectionModule } from './list-albums-section/list-albums-section.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarModule,
    ListAlbumsSectionModule,
  ],
})
export class HomeModule {}
