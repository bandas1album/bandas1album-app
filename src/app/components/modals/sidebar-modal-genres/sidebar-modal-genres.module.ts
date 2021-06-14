import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModalGenresComponent } from './sidebar-modal-genres.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarModalGenresComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarModalGenresComponent],
})
export class SidebarModalGenresModule {}
