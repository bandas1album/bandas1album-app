import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlbumService } from 'src/app/services/album/album.service';
import { GenresService } from 'src/app/services/genres/genres.service';
import { SidebarModalGenresComponent } from '../../modals/sidebar-modal-genres/sidebar-modal-genres.component';
import { SidebarModalSearchComponent } from '../../modals/sidebar-modal-search/sidebar-modal-search.component';
import { SidebarModalComponent } from '../../modals/sidebar-modal/sidebar-modal.component';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  @Output() toggleSearch: EventEmitter<any> = new EventEmitter();
  searchIsOpened: boolean = false;
  isLoaded: boolean = false;
  selectedModal: string = '';
  albums: any = {
    loading: false,
    loadingMore: false,
    list: [],
    hasMore: false,
  };
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

  constructor(
    private dialog: MatDialog,
    private albumService: AlbumService,
    private genresService: GenresService
  ) {}

  ngOnInit(): void {
    this.getGenres();
  }

  getAllPosts(resetList: boolean = false) {
    this.albums.loading = true;

    this.albumService
      .get({ observe: 'response', params: this.params })
      .subscribe(
        (res: any) => {
          const { body, headers } = res;
          this.isLoaded = true;

          if (resetList) {
            this.albums.list = body;
          } else {
            this.albums.list = this.albums.list.concat(body);
          }

          this.albums.loading = false;
          this.albums.firstLoading = false;
          this.albums.hasMore =
            this.params.page < headers.get('X-WP-TotalPages');
          this.params.page++;

          if (this.albums.loadingMore) {
            this.albums.loadingMore = false;
          }

          if (this.albums.hasMore) {
            this.loadMore();
          } else {
            this.open(this.selectedModal);
          }

          this.getAlbums();
          this.getCountries();
          this.getYears();
        },
        (err: any) => {
          this.albums.loading = false;

          if (this.albums.loadingMore) {
            this.albums.loadingMore = false;
          }
        }
      );
  }

  open(modal: any) {
    this.selectedModal = modal;

    if (this.isLoaded) {
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
    } else {
      this.getAllPosts();
    }
  }

  openGenres() {
    const modal = this.modals.genres;

    Object.entries(this.modals).forEach(([key, value]) => {
      this.modals[key].ref = '';
      this.dialog.closeAll();
    });

    modal.ref = this.dialog.open(SidebarModalGenresComponent, {
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

  loadMore() {
    this.albums.loadingMore = true;
    this.getAllPosts();
  }

  getAlbums() {
    const obj = this.albums.list.reduce((acc: any, c: any) => {
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
    const obj = this.albums.list.reduce((acc: any, c: any) => {
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
    const obj = this.albums.list.reduce((acc: any, c: any) => {
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

  getGenres() {
    const params = {
      per_page: 100,
      page: 1,
    };

    this.genresService.get({ params }).subscribe((res) => {
      this.modals.genres.list = res;
    });
  }

  openSearch() {
    this.dialog.open(SidebarModalSearchComponent, {
      panelClass: 'sidebar-modal',
      position: {
        top: '0px',
        left: '0px',
      },
    });
  }
}
