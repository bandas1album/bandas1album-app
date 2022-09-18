import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  @Input() isFixed: boolean = false;

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.headerFixed();
  }

  public back(): void {
    this.location.back();
  }

  public headerFixed(): void {
    window.addEventListener('scroll', () => {
      this.isFixed = window.scrollY >= 80 ? true : false;
    });
  }
}
