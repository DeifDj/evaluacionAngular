import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeliculaService } from './pelicula.service';
import { Subscription } from 'rxjs';
import { LocalStorageService } from './local-storage.service'; // Asegúrate de importar el servicio de LocalStorage

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  [x: string]: any;
  peliculas: any[] = [];
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
    this.unsubscribe();
  }

  private cargarPeliculasDesdeLocalStorage(): void {
    // Recupera las películas desde el LocalStorage
    const storedPeliculas = this.localStorageService.getItem('peliculas');
    if (storedPeliculas) {
      this.peliculas = storedPeliculas;
    }
  }

  public cargarPeliculas(): void {
    this.subscription = this.peliculaService.obtenerPeliculas().subscribe(
      (peliculas) => {
        this.peliculas = peliculas;
        // Guarda las películas en el LocalStorage
        this.localStorageService.setItem('peliculas', peliculas);
      },
      (error) => {
        console.error('Error al obtener películas', error);
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


