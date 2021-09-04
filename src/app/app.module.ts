import {APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HtmlDecodePipe } from './pipes/html-decode/html-decode.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [HtmlDecodePipe, {
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: environment.graphql,
        }),
      };
    },
    deps: [HttpLink],
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
