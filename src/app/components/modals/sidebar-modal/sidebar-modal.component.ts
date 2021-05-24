import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar-modal',
  templateUrl: './sidebar-modal.component.html',
  styleUrls: ['./sidebar-modal.component.scss'],
})
export class SidebarModalComponent implements OnInit {
  data: any = {};

  constructor(
    private dialogRef: MatDialogRef<SidebarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any
  ) {}

  ngOnInit(): void {
    this.data = this.modalData;
  }
}
