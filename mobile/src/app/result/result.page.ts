import { Component } from '@angular/core';
import { ResultService } from '../services/result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html'
})
export class ResultPage {
  gameId!: number;
  home_score = 0;
  away_score = 0;

  constructor(private resultService: ResultService) {}

  submit() {
    this.resultService.saveResult(this.gameId, {
      home_score: this.home_score,
      away_score: this.away_score
    }).subscribe(() => alert('Resultado guardado'));
  }
}
