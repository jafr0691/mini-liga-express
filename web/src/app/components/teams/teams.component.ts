import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teams.component.html',
})
export class TeamsComponent {
  teams: any[] = [];
  newTeamName = '';

  constructor(private teamService: TeamService) {
    this.loadTeams();
  }

  loadTeams() {
    this.teamService.getTeams().subscribe(data => this.teams = data);
  }

  addTeam() {
    if (!this.newTeamName) return;
    this.teamService.addTeam(this.newTeamName).subscribe(() => {
      this.newTeamName = '';
      this.loadTeams();
    });
  }
}
