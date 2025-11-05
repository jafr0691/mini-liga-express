import { Component, OnInit } from '@angular/core';
import { StandingService } from '../../services/standing';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html'
})
export class StandingsComponent implements OnInit {
  standings: any[] = [];

  constructor(private standingService: StandingService) {}

  ngOnInit(): void {
    this.standingService.getStandings().subscribe(data => {
      this.standings = data;
    });
  }
}
