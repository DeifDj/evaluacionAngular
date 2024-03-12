import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiUrl = 'https://ghibliapi.vercel.app';

  constructor(private http: HttpClient) {}

  obtenerPeliculas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/films`)
      .pipe(
        catchError(error => {
          console.error('Error al obtener películas:', error);
          return throwError(error);
        })
      );
  }

  obtenerPeliculaPorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/films/${id}`)
      .pipe(
        catchError(error => {
          console.error(`Error al obtener la película con ID ${id}:`, error);
          return throwError(error);
        })
      );
  }

  actualizarPelicula(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/films/${id}`, data)
      .pipe(
        catchError(error => {
          console.error(`Error al actualizar la película con ID ${id}:`, error);
          return throwError(error);
        })
      );
  }

  // Agregamos el método crearPelicula
  crearPelicula(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/films`, data)
      .pipe(
        catchError(error => {
          console.error('Error al crear la película:', error);
          return throwError(error);
        })
      );
  }
}
