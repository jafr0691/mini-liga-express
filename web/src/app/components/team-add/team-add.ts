import { Component, OnInit } from '@angular/core';
import { StandingService } from '../../services/standing';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html'
})
export class TeamsComponent implements OnInit {
  teams: any[] = [];
  newTeam: string = '';

  constructor(private standingService: StandingService) {}

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams(): void {
    this.standingService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

  createTeam(): void {
    if (!this.newTeam.trim()) return;

    this.standingService.createTeam({ name: this.newTeam }).subscribe(() => {
      this.newTeam = '';
      this.loadTeams();
    });
  }
}
