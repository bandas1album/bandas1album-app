import { Component, Input } from '@angular/core';
import { Album } from 'src/app/models/album/album.model';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss'],
})
export class CardMenuComponent {
  @Input() item!: Album;
  @Input() total: number = 0;

  constructor() {}
}
