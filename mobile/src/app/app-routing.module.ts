// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'games', loadComponent: () => import('./pages/games/games.page').then(m => m.GamesPage) },
  { path: 'report-result/:id', loadComponent: () => import('./pages/report-result/report-result.page').then(m => m.ReportResultPage) },
  { path: 'tab', loadComponent: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

