import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModalSearchComponent } from './sidebar-modal-search.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SidebarModalSearchComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [SidebarModalSearchComponent],
})
export class SidebarModalSearchModule {}
