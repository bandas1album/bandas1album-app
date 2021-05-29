import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlbumService } from 'src/app/services/album/album.service';
import { SidebarModalComponent } from '../../modals/sidebar-modal/sidebar-modal.component';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  albums: any = [];
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

  params: any = {
    page: 1,
    per_page: 100,
    order: 'asc',
    orderby: 'title',
    _fields: ['title', 'slug', 'acf'],
  };

  constructor(private dialog: MatDialog, private albumService: AlbumService) {}

  ngOnInit(): void {
    this.getAllPosts();

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

  getAllPosts() {
    this.albumService
      .get({ observe: 'response', params: this.params })
      .subscribe(
        (res: any) => {
          const { body, headers } = res;
          this.albums = body;
          this.loadMore();

          this.getAlbums();
          this.getCountries();
          this.getYears();
          this.getGenres();
        },
        (err: any) => {
          // console.log(err);
        }
      );
  }

  loadMore() {
    console.log('load more');
  }

  getAlbums() {
    const obj = this.albums.reduce((acc: any, c: any) => {
      const title = c.title.rendered[0];
      acc[title] = (acc[title] || []).concat(c);
      return acc;
    }, {});

    this.modals.albums.list = Object.entries(obj)
      .map(([title, albums]) => {
        return { title, albums };
      })
      .sort((a: any, b: any) => {
        return a.title - b.title;
      });
  }

  getCountries() {
    const obj = this.albums.reduce((acc: any, c: any) => {
      const title = c.acf.country;
      acc[title] = (acc[title] || []).concat(c);
      return acc;
    }, {});

    this.modals.countries.list = Object.entries(obj)
      .map(([title, albums]) => {
        return { title, albums };
      })
      .sort((a: any, b: any) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
  }

  getYears() {
    const obj = this.albums.reduce((acc: any, c: any) => {
      const year = new Date(c.acf.released).getFullYear();

      const title = year;
      acc[title] = (acc[title] || []).concat(c);
      return acc;
    }, {});

    this.modals.years.list = Object.entries(obj)
      .map(([title, albums]) => {
        return { title, albums };
      })
      .sort((a: any, b: any) => {
        return a.title - b.title;
      });
  }

  getGenres() {}
}
