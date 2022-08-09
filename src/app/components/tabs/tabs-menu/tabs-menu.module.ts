import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsMenuComponent } from './tabs-menu.component';

@NgModule({
  declarations: [TabsMenuComponent],
  imports: [CommonModule],
  exports: [TabsMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsMenuModule {}
