import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterDefaultComponent } from './footer-default.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterDefaultComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterDefaultComponent],
})
export class FooterDefaultModule {}
