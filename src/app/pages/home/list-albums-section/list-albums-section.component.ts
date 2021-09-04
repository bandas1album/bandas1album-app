import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-albums-section',
  templateUrl: './list-albums-section.component.html',
  styleUrls: ['./list-albums-section.component.scss'],
})
export class ListAlbumsSectionComponent implements OnInit {
  isBrowser = false;
  @Input() list: any = [];
  @Input() loading: boolean = true;
  @Input() total: number = 0;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
