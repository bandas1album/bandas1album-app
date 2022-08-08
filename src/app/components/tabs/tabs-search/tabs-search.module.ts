import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsSearchComponent } from './tabs-search.component';

@NgModule({
  declarations: [TabsSearchComponent],
  imports: [CommonModule],
  exports: [TabsSearchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsSearchModule {}
