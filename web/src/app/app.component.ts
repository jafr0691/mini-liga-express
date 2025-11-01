import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Esto es importante
  imports: [RouterModule],
  template: `
    <h1>Mini Liga</h1>
    <nav>
      <a routerLink="/teams">Equipos</a> |
      <a routerLink="/standings">Clasificación</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
