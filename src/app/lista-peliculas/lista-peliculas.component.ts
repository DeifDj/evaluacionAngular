import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../pelicula.service';


@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css']
})
export class ListaPeliculasComponent implements OnInit {
  peliculas: any[] = [];

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    // Llama al servicio para obtener todas las películas
    this.peliculaService.obtenerPeliculas().subscribe(
      (peliculas) => {
        this.peliculas = peliculas;
      },
      (error) => {
        console.error('Error al obtener películas', error);
      }
    );
  }
}