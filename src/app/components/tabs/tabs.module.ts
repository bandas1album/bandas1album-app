import { TabsSearchModule } from './tabs-search/tabs-search.module';
import { TabsMenuModule } from './tabs-menu/tabs-menu.module';
import { LogoModule } from './../logo/logo.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    LogoModule,
    TabsMenuModule,
    TabsSearchModule,
    RouterModule,
  ],
  exports: [TabsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsModule {}
