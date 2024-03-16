// pelicula-event.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaEventService {
  private peliculaCreadaSubject = new Subject<void>();

  peliculaCreada$ = this.peliculaCreadaSubject.asObservable();

  notificarPeliculaCreada() {
    this.peliculaCreadaSubject.next();
  }
}
