import { Apollo } from 'apollo-angular';
import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import AUTOCOMPLETE_QUERY from 'src/app/@graphql/queries/autocomplete';

@Component({
  selector: 'app-tabs-search',
  templateUrl: './tabs-search.component.html',
  styleUrls: ['./tabs-search.component.scss'],
})
export class TabsSearchComponent implements OnChanges {
  data: any = [];
  errors: any = [];
  loading: boolean = true;

  @ViewChild('search') searchElement!: ElementRef;
  @Input() focus: boolean = false;
  showTooltip = false;

  constructor(private apollo: Apollo) {}

  get(event: any) {
    if (!event.target.value) {
      return (this.data = []);
    }

    return this.apollo
      .watchQuery<any>({
        query: AUTOCOMPLETE_QUERY,
        variables: {
          search: event.target.value,
        },
      })
      .valueChanges.subscribe((result) => {
        this.data = result.data;
        this.errors = result.errors;
        this.loading = result.loading;
      });
  }

  ngOnChanges(): void {
    if (this.focus) {
      this.searchElement.nativeElement.focus();
    }
  }
}
