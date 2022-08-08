import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  showSearch: boolean = false;
  showMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
