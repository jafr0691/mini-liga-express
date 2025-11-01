import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // IMPORTANTE

@Injectable({
  providedIn: 'root'
})
export class StandingService {
  private apiUrl = 'http://localhost:8000/api/standings';

  constructor(private http: HttpClient) {}

  getStandings(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((data: any) => {
        // Si tu backend envía { original: [...] }, usamos data.original
        if (data && data.original && Array.isArray(data.original)) {
          return data.original;
        }
        // Si ya es un array, lo devolvemos tal cual
        return Array.isArray(data) ? data : [];
      })
    );
  }
}
