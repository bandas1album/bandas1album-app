import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlbumService } from 'src/app/services/album/album.service';
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
    countries: {
      title: 'Bandas por países',
      list: [],
      isOpen: false,
    },
    years: {
      title: 'Ano de lançamento',
      list: [],
      isOpen: false,
    },
    genres: {
      title: 'Gêneros',
      list: [],
      isOpen: false,
    },
  };

  constructor(private dialog: MatDialog, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.getAlbums();
    this.getCountries();
    this.getYears();
    this.getGenres();
  }

  open(modal: any) {
    Object.entries(this.modals).forEach(([key, value]) => {
      this.modals[key].ref = '';
      this.dialog.closeAll();
    });

    modal.ref = this.dialog.open(SidebarModalComponent, {
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
  }

  async getAlbums() {
    const params = {
      page: 1,
      per_page: 100,
      order: 'asc',
      orderby: 'title',
      _fields: ['title', 'slug', 'acf'],
    };

    await this.albumService
      .get({ observe: 'response', params: params })
      .subscribe(
        (res: any) => {
          const { body, headers } = res;

          const obj = body.reduce((acc: any, c: any) => {
            const letter = c.title.rendered[0];
            acc[letter] = (acc[letter] || []).concat(c);
            return acc;
          }, {});

          this.modals.albums.list = Object.entries(obj)
            .map(([letter, albums]) => {
              return { letter, albums };
            })
            .sort((a: any, b: any) => {
              return a.letter - b.letter;
            });
        },
        (err: any) => {
          // console.log(err);
        }
      );
  }

  getCountries() {}

  getYears() {}

  getGenres() {}
}
