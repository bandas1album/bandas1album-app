import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlbumItem } from './models';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root',
})
export class AlbumService extends BaseService<AlbumItem, null, null> {
  constructor(private readonly httpClient: HttpClient) {
    super(httpClient, `album`);
  }
}
