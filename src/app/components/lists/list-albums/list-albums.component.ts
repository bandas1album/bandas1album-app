import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.scss'],
})
export class ListAlbumsComponent {
  @Input() loading: boolean = true;
  @Input() firstLoading: boolean = true;
  loadingArray: any = [];

  constructor() {
    this.loadingArray = Array(48).fill(48);
  }
}
