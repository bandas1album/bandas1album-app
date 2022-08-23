import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule],
  exports: [PageHeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PageHeaderModule {}
