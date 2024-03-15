import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiUrl = 'https://ghibliapi.vercel.app';
  public peliculas: any[] = []; // Definición de la propiedad peliculas

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
  obtenerTodasLasPeliculas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/films`)
      .pipe(
        catchError(error => {
          console.error('Error al obtener todas las películas:', error);
          return throwError(error);
        })
      );
    }
  
  // Método para crear una nueva película
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
