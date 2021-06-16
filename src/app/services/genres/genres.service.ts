import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { GenresItem } from './models';

@Injectable({
  providedIn: 'root',
})
export class GenresService extends BaseService<GenresItem, null, null> {
  constructor(private readonly httpClient: HttpClient) {
    super(httpClient, `generos_album`);
  }
}
