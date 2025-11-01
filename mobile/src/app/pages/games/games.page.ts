import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  standalone: true, // 🔹 Importante: activa el modo standalone
  imports: [CommonModule, IonicModule] // 🔹 Importa módulos necesarios
})
export class GamesPage {
  games: any[] = [
    { id: 1, home: 'Team A', away: 'Team B' },
    { id: 2, home: 'Team C', away: 'Team D' }
  ];

  constructor(private navCtrl: NavController) {}

  goToReport(id: number) {
    this.navCtrl.navigateForward(`/report-result/${id}`);
  }
}
