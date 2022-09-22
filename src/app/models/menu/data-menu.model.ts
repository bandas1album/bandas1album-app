import { Album } from 'src/app/interfaces/album';
import { Country } from 'src/app/interfaces/country';
import { Genre } from 'src/app/interfaces/genre';
import { Year } from 'src/app/interfaces/year';
import { DataMenuList } from './data-menu-list.model';

export class DataMenu {
  albums: DataMenuList<Album> = new DataMenuList();
  genres: DataMenuList<Genre> = new DataMenuList();
  countries: DataMenuList<Country> = new DataMenuList();
  years: DataMenuList<Year> = new DataMenuList();
}
