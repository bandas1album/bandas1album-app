import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TracklistComponent } from './tracklist.component';



@NgModule({
  declarations: [
    TracklistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TracklistComponent
  ]
})
export class TracklistModule { }
