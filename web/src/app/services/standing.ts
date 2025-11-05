import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StandingService {

  private apiUrl = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) {}

  // Clasificación
  getStandings(): Observable<any> {
    return this.http.get(`${this.apiUrl}/standings`);
  }

  // Equipos
  getTeams(): Observable<any> {
    return this.http.get(`${this.apiUrl}/teams`);
  }

  createTeam(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/teams`, data);
  }

  // Partidos
  getMatches(): Observable<any> {
    return this.http.get(`${this.apiUrl}/matches`);
  }

  reportMatchResult(matchId: number, result: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/matches/${matchId}/result`, result);
  }
}
