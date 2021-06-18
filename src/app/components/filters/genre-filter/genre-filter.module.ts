import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreFilterComponent } from './genre-filter.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [GenreFilterComponent],
  imports: [CommonModule, FormsModule, NgSelectModule],
  exports: [GenreFilterComponent],
})
export class GenreFilterModule {}
