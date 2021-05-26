import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModalComponent } from './sidebar-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarModalComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarModalComponent],
})
export class SidebarModalModule {}
