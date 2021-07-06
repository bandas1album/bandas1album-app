import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isBrowser = false;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      this.dialog.closeAll();

      /*
       * Caso somente a query string mude - em filtros por exemplo - não realizaremos o scroll para o topo
       */
      if (evt.url.includes('?')) {
        return;
      }

      if (this.isBrowser) {
        setTimeout(() => {
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }, 500);
      }
    });
  }
}
