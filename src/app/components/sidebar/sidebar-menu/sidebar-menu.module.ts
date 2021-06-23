import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMenuComponent } from './sidebar-menu.component';
import { SidebarModalModule } from '../../modals/sidebar-modal/sidebar-modal.module';
import { MatDialogModule } from '@angular/material/dialog';
import { SidebarModalGenresModule } from '../../modals/sidebar-modal-genres/sidebar-modal-genres.module';
import { SidebarModalSearchModule } from '../../modals/sidebar-modal-search/sidebar-modal-search.module';

@NgModule({
  declarations: [SidebarMenuComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    SidebarModalModule,
    SidebarModalGenresModule,
    SidebarModalSearchModule,
  ],
  exports: [SidebarMenuComponent],
})
export class SidebarMenuModule {}
