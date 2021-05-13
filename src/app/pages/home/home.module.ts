import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { ListAlbumsModule } from 'src/app/components/lists/list-albums/list-albums.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SidebarModule, ListAlbumsModule],
})
export class HomeModule {}
