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

  update(meta: any) {
    const title = `${meta.title} | HSA`;
    const description = meta.description ? meta.description : '';
    const image = meta?.image || meta?.images?.desktop;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });

    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });

    this.meta.updateTag({ property: 'twitter:title', content: title });
    this.meta.updateTag({ name: 'twitter:description', content: description });

    if (image) {
      this.meta.updateTag({ property: 'og:image', content: image });
      this.meta.updateTag({ property: 'twitter:image:src', content: image });
    }
  }

  updateOgUrl(url?: string) {
    if (!url) {
      url = this.doc.URL;
    }

    url = url || '';

    this.meta.addTags([
      { name: 'og:url', content: url },
      { name: 'twitter:urltwitter:url', content: url }
    ]);

    this.meta.updateTag({
      name: 'robots',
      content: environment.production ? 'index, follow' : 'noindex, nofollow',
    });

    this.createLinkForCanonicalURL();
  }

  createLinkForCanonicalURL() {
    const link: HTMLLinkElement = this.doc.createElement('link');

    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL);
  }
}
