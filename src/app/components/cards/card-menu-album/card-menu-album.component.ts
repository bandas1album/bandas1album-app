import { Component, Input } from '@angular/core';
import { Album } from 'src/app/models/album/album.model';

@Component({
  selector: 'app-card-menu-album',
  templateUrl: './card-menu-album.component.html',
  styleUrls: ['./card-menu-album.component.scss'],
})
export class CardMenuAlbumComponent {
  @Input() item!: Album;

  constructor() {}
}