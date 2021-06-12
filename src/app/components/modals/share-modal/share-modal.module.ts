import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModalComponent } from './share-modal.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  declarations: [ShareModalComponent],
  imports: [CommonModule, ClipboardModule],
  exports: [ShareModalComponent],
})
export class ShareModalModule {}
