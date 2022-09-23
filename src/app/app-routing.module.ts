import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'album/:slug',
    loadChildren: () =>
      import('./pages/album/album.module').then((m) => m.AlbumModule),
  },
  {
    path: 'genero/:slug',
    loadChildren: () =>
      import('./pages/genre/genre.module').then((m) => m.GenreModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
