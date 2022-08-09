import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-menu',
  templateUrl: './tabs-menu.component.html',
  styleUrls: ['./tabs-menu.component.scss'],
})
export class TabsMenuComponent implements OnInit {
  showAlbums: boolean = false;
  showGenres: boolean = false;
  showCountries: boolean = false;
  showDebut: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
