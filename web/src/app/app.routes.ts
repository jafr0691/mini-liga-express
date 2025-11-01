import { Routes } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { StandingsComponent } from './components/standings/standings.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'teams', component: TeamsComponent },
  { path: 'standings', component: StandingsComponent },
  { path: '', redirectTo: '/teams', pathMatch: 'full' }
];
