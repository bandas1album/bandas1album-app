import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.scss'],
})
export class GenreFilterComponent implements OnInit {
  @ViewChild('form', { static: false }) public form: any;
  @Input() loading = false;
  @Input() optionsCountries: any = [];
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  optionsOrder: any = [
    {
      label: 'Nome de A-Z',
      value: {
        orderby: 'title',
        order: 'asc',
      },
    },
    {
      label: 'Nome de Z-A',
      value: {
        orderby: 'title',
        order: 'desc',
      },
    },
    {
      label: 'Mais recentes',
      value: {
        orderby: 'date',
        order: 'asc',
      },
    },
    {
      label: 'Mais antigos',
      value: {
        orderby: 'date',
        order: 'desc',
      },
    },
  ];
  filters: any = {};

  constructor() {}

  ngOnInit(): void {}

  submit() {
    const { form, filters } = this;

    this.submitted.emit(filters);
  }

  filtersCountry(country: 'string') {
    if (country) {
      this.filters.country = {
        meta_key: 'country',
        meta_value: country,
      };
    } else {
      this.filters.country = '';
    }

    this.submit();
  }
}
