import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreFilterComponent } from './genre-filter.component';

@NgModule({
  declarations: [GenreFilterComponent],
  imports: [CommonModule],
  exports: [GenreFilterComponent],
})
export class GenreFilterModule {}
