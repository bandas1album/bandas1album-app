import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SidebarModalComponent } from '../../modals/sidebar-modal/sidebar-modal.component';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  modals: any = {
    albums: {
      title: 'Álbuns de A a Z',
      list: [],
      isOpen: false,
    },
    genres: {
      title: 'Gêneros',
      list: [],
      isOpen: false,
    },
    years: {
      title: 'Ano de lançamento',
      list: [],
      isOpen: false,
    },
    countries: {
      title: 'Bandas por países',
      list: [],
      isOpen: false,
    },
  };

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  open(modal: any) {
    if (!modal.isOpen) {
      modal.isOpen = true;
      this.dialog.open(SidebarModalComponent, {
        data: {
          title: modal.title,
          list: modal.list,
        },
        panelClass: 'sidebar-modal',
        position: {
          top: '0px',
          left: '0px',
        },
      });
    } else {
      this.dialog.closeAll();
      Object.entries(this.modals).forEach(([key, value]) => {
        this.modals[key].isOpen = false;
      });
    }
  }
}
