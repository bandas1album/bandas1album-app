import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-cover',
  templateUrl: './album-cover.component.html',
  styleUrls: ['./album-cover.component.scss'],
})
export class AlbumCoverComponent implements OnInit {
  @Input() image: string = '';
  constructor() {}

  ngOnInit(): void {}
}
