import { Component, Input, OnInit } from '@angular/core';
import { Album } from 'src/app/interfaces/album';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.scss'],
})
export class CardAlbumComponent implements OnInit {
  @Input() item!: Album;

  constructor() {}

  ngOnInit(): void {}
}
