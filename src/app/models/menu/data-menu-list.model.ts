export class DataMenuList<T> {
  list: T[] = [];
  errors: any = [];
  loading: boolean = false;
  page: number = 1;
  perpage: number = 16;
  total: number = 0;
}
