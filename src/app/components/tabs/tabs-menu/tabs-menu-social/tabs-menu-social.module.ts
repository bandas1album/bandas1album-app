import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsMenuSocialComponent } from './tabs-menu-social.component';

@NgModule({
  declarations: [TabsMenuSocialComponent],
  imports: [CommonModule],
  exports: [TabsMenuSocialComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsMenuSocialModule {}
