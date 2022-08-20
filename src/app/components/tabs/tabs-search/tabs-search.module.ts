import { SlugifyModule } from './../../../pipes/slugify/slugify.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsSearchComponent } from './tabs-search.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TabsSearchComponent],
  imports: [CommonModule, RouterModule, SlugifyModule],
  exports: [TabsSearchComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsSearchModule {}
