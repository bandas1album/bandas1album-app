import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { PagesItem } from './models';

@Injectable({
  providedIn: 'root',
})
export class PagesService extends BaseService<PagesItem, null, null> {
  constructor(private readonly httpClient: HttpClient) {
    super(httpClient, `pages`);
  }
}
