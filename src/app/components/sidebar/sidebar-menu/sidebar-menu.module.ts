import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu.component';

@NgModule({
  declarations: [SidebarMenuComponent],
  imports: [CommonModule],
  exports: [SidebarMenuComponent],
})
export class SidebarMenuModule {}
