import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html'
})
export class GamesPage implements OnInit {
  games: any[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGames().subscribe(data => {
      this.games = data.filter((g: any) => !g.is_played);
    });
  }
}
