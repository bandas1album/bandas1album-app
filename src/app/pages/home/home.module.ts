import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListAlbumsModule } from './../../components/lists/list-albums/list-albums.module';
import { CardAlbumModule } from './../../components/cards/card-album/card-album.module';
import { SlugifyModule } from './../../pipes/slugify/slugify.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ListAlbumsModule,
    CardAlbumModule,
    SlugifyModule,
  ],
})
export class HomeModule {}
