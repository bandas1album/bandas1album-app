import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SidebarModalComponent } from 'src/app/components/modals/sidebar-modal/sidebar-modal.component';
import { AlbumService } from 'src/app/services/album/album.service';

@Component({
  selector: 'app-list-albums-section',
  templateUrl: './list-albums-section.component.html',
  styleUrls: ['./list-albums-section.component.scss'],
})
export class ListAlbumsSectionComponent implements OnInit {
  firstLoading: boolean = true;
  list: any = {
    loading: true,
    items: [],
  };
  total: number = 0;
  params: any = {
    per_page: 95,
    page: 1,
    orderby: 'rand',
  };

  constructor(private albumService: AlbumService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  async getAlbums() {
    await this.albumService
      .get({ observe: 'response', params: this.params })
      .subscribe(
        (res: any) => {
          const { body, headers } = res;
          this.list.items = body;
          this.total = headers.get('X-WP-Total');
          this.list.loading = false;
          this.firstLoading = false;
        },
        (err: any) => {
          this.list.loading = false;
          // console.log(err);
        }
      );
  }
}
