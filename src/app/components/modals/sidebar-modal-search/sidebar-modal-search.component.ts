import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar-modal-search',
  templateUrl: './sidebar-modal-search.component.html',
  styleUrls: ['./sidebar-modal-search.component.scss'],
})
export class SidebarModalSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput: any;
  data: any = [];
  term: string = '';

  constructor() {}

  ngOnInit(): void {}
}
