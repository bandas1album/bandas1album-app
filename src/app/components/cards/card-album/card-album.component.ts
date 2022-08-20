import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.scss'],
})
export class CardAlbumComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.item);
  }
}
