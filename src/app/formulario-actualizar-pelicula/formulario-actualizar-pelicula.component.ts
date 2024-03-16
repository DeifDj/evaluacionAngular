import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaService } from '../pelicula.service';
import { Pelicula } from '../models/pelicula.model';

@Component({
  selector: 'app-actualizar-pelicula',
  templateUrl: './formulario-actualizar-pelicula.component.html',
})
export class FormularioActualizarPeliculaComponent implements OnInit {
  formularioActualizar: FormGroup;
  peliculas: Pelicula[] = [];

  constructor(
    private fb: FormBuilder,
    private peliculaService: PeliculaService
  ) {
    this.formularioActualizar = this.fb.group({
      pelicula: ['', Validators.required],
      director: ['', Validators.required],
      descripcion: ['', Validators.required],
      // Agrega más campos según tus necesidades
    });
  }

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

  onPeliculaSeleccionada(event: any): void {
    const id = event.target.value;
    this.obtenerDatosPelicula(id);
  }

  obtenerDatosPelicula(id: string): void {
    const peliculaSeleccionada = this.peliculas.find(pelicula => pelicula.id === id);
    if (peliculaSeleccionada) {
      this.formularioActualizar.patchValue({
        director: peliculaSeleccionada.director,
        descripcion: peliculaSeleccionada.descripcion,
      });
    }
  }

  onSubmit(): void {
    if (this.formularioActualizar.valid) {
      const datosActualizados = this.formularioActualizar.value;
      const peliculaId = datosActualizados.pelicula;
      delete datosActualizados.pelicula; // Eliminamos el campo 'pelicula' del objeto de datos
      this.peliculaService.actualizarPelicula(peliculaId, datosActualizados).subscribe(
        () => {
          console.log('Película actualizada correctamente');
          // Puedes redirigir a otra ruta después de la actualización si lo deseas
        },
        (error) => {
          console.error('Error al actualizar la película:', error);
        }
      );
    } else {
      alert('Por favor completa todos los campos');
    }
  }
}
