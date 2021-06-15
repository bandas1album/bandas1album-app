import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages/pages.service';
import { SeoService } from 'src/app/services/seo/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  params: any = {
    slug: 'homepage',
  };

  constructor(
    private pagesService: PagesService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
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
