import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  [x: string]: any;
  private apiUrl = 'https://ghibliapi.vercel.app';

  constructor(private http: HttpClient) {}

  // Obtiene todas las películas del servidor
  obtenerTodasLasPeliculas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/films`).pipe(
      tap(peliculas => this.guardarPeliculasLocalStorage(peliculas)),
      catchError(error => {
        console.error('Error al obtener películas:', error);
        return throwError(error);
      })
    );
  }
  obtenerPeliculasLocalStorage(): any[] {
    const peliculasString = localStorage.getItem('peliculas');
    return peliculasString ? JSON.parse(peliculasString) : [];
  }

  // Obtiene una película específica por su ID
  obtenerPeliculaPorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/films/${id}`).pipe(
      catchError(error => {
        console.error(`Error al obtener la película con ID ${id}:`, error);
        return throwError(error);
      })
    );
  }
  

  // Actualiza una película específica por su ID
  actualizarPelicula(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/films/${id}`, data).pipe(
      catchError(error => {
        console.error(`Error al actualizar la película con ID ${id}:`, error);
        return throwError(error);
      })
    );
  }

  // Crea una nueva película
  crearPelicula(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/films`, data).pipe(
      catchError(error => {
        console.error('Error al crear la película:', error);
        return throwError(error);
      })
    );
  }

  // Guarda las películas en el almacenamiento local
  private guardarPeliculasLocalStorage(peliculas: any[]): void {
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }
}
