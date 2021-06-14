import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar-modal-genres',
  templateUrl: './sidebar-modal-genres.component.html',
  styleUrls: ['./sidebar-modal-genres.component.scss'],
})
export class SidebarModalGenresComponent implements OnInit {
  data: any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public modalData: any) {}

  ngOnInit(): void {
    this.data = this.modalData;
  }
}
