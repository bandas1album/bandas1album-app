import { SlugifyPipe } from './slugify.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SlugifyPipe],
  imports: [CommonModule],
  exports: [SlugifyPipe],
})
export class SlugifyModule {}
