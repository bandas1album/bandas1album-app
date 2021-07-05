import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AlbumService } from 'src/app/services/album/album.service';

@Component({
  selector: 'app-sidebar-modal-search',
  templateUrl: './sidebar-modal-search.component.html',
  styleUrls: ['./sidebar-modal-search.component.scss'],
})
export class SidebarModalSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput: any;
  list: any = {
    loading: false,
    items: [],
  };
  term: string = '';
  searchControl = new FormControl();
  formControlSub: any = Subscription;
  subject = new Subject();

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.formControlSub = this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((newValue) => this.get(newValue));
  }

  get(newValue: string) {
    this.term = newValue;
    this.list.loading = true;

    const params: any = {
      per_page: 10,
      page: 1,
      orderby: 'title',
      search: newValue,
    };

    if (!newValue) {
      this.term = '';
      this.list.items = [];
      this.list.loading = false;
      return;
    }

    this.albumService.get({ observe: 'response', params }).subscribe(
      (res: any) => {
        const { body, headers } = res;
        // this.total = headers.get('X-WP-Total');
        this.list.items = body;
        this.list.loading = false;
      },
      (err: any) => {
        this.list.loading = false;
        // console.log(err);
      }
    );
  }
}
