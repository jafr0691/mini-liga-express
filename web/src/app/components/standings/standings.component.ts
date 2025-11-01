import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- IMPORTANTE
import { StandingService } from '../../services/standing.service';

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [CommonModule], // <-- aquí va CommonModule para ngFor, ngIf
  templateUrl: './standings.component.html',
})
export class StandingsComponent implements OnInit {
  standings: any[] = [];

  constructor(private standingService: StandingService) {}

  ngOnInit(): void {
    this.standingService.getStandings().subscribe((data: any[]) => {
      this.standings = data;
      console.log(this.standings);
    });
  }
}
