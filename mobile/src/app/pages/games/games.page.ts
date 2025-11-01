// src/app/pages/games/games.page.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule] // necesarios para *ngFor, *ngIf y ion-*
})
export class GamesPage implements OnInit {
  games: any[] = [];

  constructor(private navCtrl: NavController, private api: ApiService) {}

  ngOnInit() {
    this.loadGames();
  }

  loadGames() {
    this.api.getPendingGames().subscribe({
      next: (data) => {
        console.log('Datos recibidos:', data);
        // data puede ser array o contener "original"
        this.games = Array.isArray(data) ? data : data || [];
      },
      error: (err) => console.error('Error al obtener partidos:', err)
    });
  }

  goToReport(id: number) {
    this.navCtrl.navigateForward(`/report-result/${id}`);
  }
}
