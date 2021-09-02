import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    @Inject(DOCUMENT) private doc: any,
    private meta: Meta,
    private title: Title
  ) {}

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  metatags(data: any) {
    data.forEach((meta: any) => {
      this.meta.updateTag(meta);
    });
  }
}
