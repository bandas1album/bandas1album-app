import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.scss'],
})
export class GenreFilterComponent implements OnInit {
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
  optionsCountries: any = [
    {
      label: 'Alemanha',
      value: 'alemanha',
    },
    {
      label: 'Brasil',
      value: 'brasil',
    },
  ];
  orderReleased: string = 'desc';
  orderTitle: string = 'desc';
  orderCountries: any = [];

  constructor() {}

  ngOnInit(): void {}
}
