import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { PagesService } from 'src/app/services/pages/pages.service';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isBrowser = false;
  params: any = {
    slug: 'homepage',
  };

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private pagesService: PagesService,
    private seoService: SeoService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    if (!this.isBrowser) {
      return;
    }

    this.pagesService.get({ params: this.params }).subscribe((res) => {
      const data = res[0];

      data.yoast_meta.map((item: any) => {
        if (item.property === 'og:title') {
          this.seoService.updateTitle(item.content);
        }
      });

      this.seoService.metatags(data);
    });
  }
}
