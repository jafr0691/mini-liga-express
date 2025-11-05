import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TeamsComponent } from './components/teams/teams.component';
import { StandingsComponent } from './components/standings/standings.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    StandingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'teams', component: TeamsComponent },
      { path: 'standings', component: StandingsComponent },
      { path: '', redirectTo: '/teams', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
