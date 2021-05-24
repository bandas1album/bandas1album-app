import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { SidebarModalModule } from '../../modals/sidebar-modal/sidebar-modal.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [SidebarMenuComponent],
  imports: [CommonModule, SidebarModalModule, MatDialogModule],
  exports: [SidebarMenuComponent],
})
export class SidebarMenuModule {}
