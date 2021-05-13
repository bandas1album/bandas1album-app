import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { SidebarMenuModule } from './sidebar-menu/sidebar-menu.module';
import { SidebarSocialModule } from './sidebar-social/sidebar-social.module';
import { SidebarFooterModule } from './sidebar-footer/sidebar-footer.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    SidebarMenuModule,
    SidebarSocialModule,
    SidebarFooterModule,
    RouterModule,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
