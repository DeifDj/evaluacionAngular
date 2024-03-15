import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-catalogo-peliculas',
  templateUrl: './catalogo-peliculas.component.html',
  styleUrls: ['./catalogo-peliculas.component.css']
})
export class CatalogoPeliculasComponent implements OnInit {
  peliculas: any[] = [];

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  obtenerPeliculas(): void {
    this.peliculaService.obtenerPeliculas().subscribe(
      (data: any[]) => {
        this.peliculas = data;
      },
      (error) => {
        console.error('Error al obtener películas', error);
      }
    );
  }
}
