// src/app/pages/report-result/report-result.page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-report-result',
  templateUrl: './report-result.page.html',
  standalone: true,   // <--- importante
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ReportResultPage {
  home_score!: number;
  away_score!: number;
  gameId!: number;

  constructor() {}
  
  submit() {
    console.log('Submit result', this.home_score, this.away_score);
  }
}
