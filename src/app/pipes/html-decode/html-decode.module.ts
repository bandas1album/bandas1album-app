import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlDecodePipe } from './html-decode.pipe';

@NgModule({
  declarations: [HtmlDecodePipe],
  imports: [CommonModule],
  exports: [HtmlDecodePipe],
})
export class HtmlDecodeModule {}
