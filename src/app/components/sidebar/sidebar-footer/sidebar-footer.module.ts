import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarFooterComponent } from './sidebar-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarFooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarFooterComponent],
})
export class SidebarFooterModule {}
