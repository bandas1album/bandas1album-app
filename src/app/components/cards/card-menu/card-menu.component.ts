import { Component, Input } from '@angular/core';
import { Album } from 'src/app/interfaces/album';
import { Genre } from 'src/app/interfaces/genre';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss'],
})
export class CardMenuComponent {
  @Input() item!: Album | Genre;
  @Input() total: number = 0;

  constructor() {}
}
