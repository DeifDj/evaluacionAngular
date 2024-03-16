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
    this.peliculas = this.peliculaService['obtenerPeliculasLocalStorage']();
  }
}

