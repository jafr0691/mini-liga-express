import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'games',
    loadComponent: () => import('./games/games.page').then( m => m.GamesPage)
  },
  {
    path: 'result',
    loadComponent: () => import('./result/result.page').then( m => m.ResultPage)
  },
];
