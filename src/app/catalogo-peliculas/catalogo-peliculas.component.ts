import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeliculaService } from '../pelicula.service';
import { PeliculaEventService } from '../pelicula-event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalogo-peliculas',
  templateUrl: './catalogo-peliculas.component.html',
  styleUrls: ['./catalogo-peliculas.component.css']
})
export class CatalogoPeliculasComponent implements OnInit, OnDestroy {
  peliculas: any[] = [];
  peliculaCreadaSubscription!: Subscription;

  constructor(private peliculaService: PeliculaService, private peliculaEventService: PeliculaEventService) {}

  ngOnInit(): void {
    this.obtenerPeliculas();
    this.peliculaCreadaSubscription = this.peliculaEventService.peliculaCreada$.subscribe(() => {
      this.obtenerPeliculas(); // Actualizar la lista de películas cuando se crea una nueva película
    });
  }

  ngOnDestroy(): void {
    // Realizar un unsubscribe en ngOnDestroy para evitar fugas de memoria
    this.peliculaCreadaSubscription.unsubscribe();
  }

  obtenerPeliculas(): void {
    this.peliculaService.obtenerTodasLasPeliculas().subscribe(
      (peliculas) => {
        this.peliculas = peliculas;
      },
      (error) => {
        console.error('Error al obtener películas', error);
      }
    );
  }

  actualizarCatalogo(): void {
    this.obtenerPeliculas();
  }
}
