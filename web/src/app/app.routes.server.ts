import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsComponent } from './pages/teams/teams.component';
import { StandingsComponent } from './pages/standings/standings.component';

const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'standings', component: StandingsComponent },
  { path: '', redirectTo: '/teams', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
