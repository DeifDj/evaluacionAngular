import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../pelicula.service';
import { Pelicula } from '../models/pelicula.model';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  obtenerPeliculas(): void {
    this.peliculaService.obtenerTodasLasPeliculas().subscribe(
      (peliculas: Pelicula[]) => {
        this.peliculas = peliculas;
      },
      (error: any) => {
        console.error('Error al obtener las películas:', error);
      }
    );
  }

  eliminarPelicula(id: string): void {
    this.peliculaService.eliminarPelicula(id).subscribe(
      () => {
        // Eliminar la película del array local
        this.peliculas = this.peliculas.filter(pelicula => pelicula.id !== id);
      },
      (error: any) => {
        console.error('Error al eliminar película', error);
      }
    );
  }
}
