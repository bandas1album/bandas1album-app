import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder-list-albums',
  templateUrl: './placeholder-list-albums.component.html',
  styleUrls: ['./placeholder-list-albums.component.scss'],
})
export class PlaceholderListAlbumsComponent implements OnInit {
  items: any = Array(48);

  constructor() {}

  ngOnInit(): void {}
}
