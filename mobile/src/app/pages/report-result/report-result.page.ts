// src/app/pages/report-result/report-result.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-report-result',
  templateUrl: './report-result.page.html',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class ReportResultPage implements OnInit {
  gameId!: number;
  home_score: number = 0;
  away_score: number = 0;

  constructor(
    private navCtrl: NavController,
    private api: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.gameId = Number(this.route.snapshot.paramMap.get('id') || 0);
  }

  submit() {
    if (!this.gameId) return;

    this.api.reportResult(this.gameId, { home_score: this.home_score, away_score: this.away_score })
      .subscribe({
        next: (res) => {
          console.log('Resultado enviado:', res);
          this.navCtrl.back();
        },
        error: (err) => console.error('Error al enviar resultado:', err)
      });
  }
}
