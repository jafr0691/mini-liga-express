// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  base = environment.API_URL;

  constructor(private http: HttpClient) {}

  // Obtener partidos pendientes (sin resultado)
  getPendingGames() {
    return this.http.get<any[]>(`${this.base}/api/games?played=false`);
  }

  // Reportar resultado
  reportResult(id: number, payload: { home_score: number; away_score: number }) {
    return this.http.post(`${this.base}/api/games/${id}/result`, payload);
  }
}
