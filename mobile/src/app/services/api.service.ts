// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  base = environment.API_URL;

  constructor(private http: HttpClient) {}

  // Obtener partidos pendientes
  getPendingGames() {
    // ⚠️ /game según tu ruta Laravel
    return this.http.get<any[]>(`${this.base}/api/game`);
  }

  // Reportar resultado
  reportResult(id: number, payload: { home_score: number; away_score: number }) {
    // ⚠️ ruta Laravel es /games/{id}/result
    return this.http.post(`${this.base}/api/games/${id}/result`, payload);
  }
}
