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
  number: number = 1;
  @ViewChild('form', { static: false }) public form: any;
  optionsReleased: any = [
    {
      label: 'Mais recentes',
      value: 'desc',
    },
    {
      label: 'Mais antigos',
      value: 'asc',
    },
  ];
  optionsTitle: any = [
    {
      label: 'Nome de A-z',
      value: 'desc',
    },
    {
      label: 'Nome de Z-a',
      value: 'asc',
    },
  ];
  @Input() optionsCountries: any = [];
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  filters: any = {
    orderReleased: false,
    orderTitle: false,
    orderCountries: [],
  };

  constructor() {}

  ngOnInit(): void {}

  submit() {
    const { form, filters } = this;

    this.submitted.emit(filters);
  }
}
