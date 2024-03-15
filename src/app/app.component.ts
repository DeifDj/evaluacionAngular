import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeliculaService } from './pelicula.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Pelicula } from './models/pelicula.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  [x: string]: any;
  peliculas: Pelicula[] = [];
  private subscription: Subscription = new Subscription();


  constructor(
    private peliculaService: PeliculaService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.cargarPeliculasDesdeLocalStorage();
    this.cargarPeliculas();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      console.log('El componente se está destruyendo.');
    }
  }

  private cargarPeliculasDesdeLocalStorage(): void {
    try {
      const storedPeliculas = this.localStorageService.getItem('peliculas');
      if (storedPeliculas && Array.isArray(storedPeliculas)) {
        this.peliculas = storedPeliculas;
      } else {
        console.warn('Datos no válidos en el LocalStorage para "peliculas".');
      }
    } catch (error) {
      console.error('Error al cargar películas desde el LocalStorage', error);
    }
  }

  public cargarPeliculas(): void {
    this.subscription = this.peliculaService.obtenerPeliculas().subscribe(
      (peliculas) => {
        this.peliculas = peliculas;
        this.localStorageService.setItem('peliculas', peliculas);
      },
      (error) => {
        console.error('Error al obtener películas desde el servicio', error);
        // Puedes mostrar un mensaje al usuario o tomar alguna otra acción aquí
      }
    );
  }

  private unsubscribe(): void {
    try {
      // Asegúrate de desuscribirte para evitar posibles fugas de memoria
      if (this.subscription) {
        this.subscription.unsubscribe();
        console.log('El componente se está destruyendo.');
      }
    } catch (error) {
      console.error('Error al desuscribirse', error);
    }
  }
}


