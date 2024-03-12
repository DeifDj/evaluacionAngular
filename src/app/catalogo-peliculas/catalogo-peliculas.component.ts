
import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../pelicula.service'; // Ajusta la ruta según tu estructura
import { Pelicula } from '../models/pelicula.model';

@Component({
  selector: 'app-catalogo-peliculas',
  templateUrl: './catalogo-peliculas.component.html',
  styleUrls: ['./catalogo-peliculas.component.css']
})
export class CatalogoPeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.peliculaService.obtenerPeliculas().subscribe(
      (data: Pelicula[]) => {
        this.peliculas = data;
      },
      (error) => {
        console.error('Error al obtener películas', error);
        // Puedes agregar lógica para informar al usuario sobre el error.
      }
    );
  }
}
