import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-links',
  templateUrl: './list-links.component.html',
  styleUrls: ['./list-links.component.scss'],
})
export class ListLinksComponent implements OnInit {
  @Input() item: any;

  constructor() {}

  ngOnInit(): void {}
}
