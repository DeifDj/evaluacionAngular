import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-actualizar-pelicula',
  templateUrl: './formulario-actualizar-pelicula.component.html',
})
export class FormularioActualizarPeliculaComponent implements OnInit {
  formularioActualizar: FormGroup;
  peliculaId!: string;
  peliculas: any[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private peliculaService: PeliculaService
  ) {
    this.formularioActualizar = this.fb.group({
      pelicula: ['', Validators.required],
      titulo: ['', Validators.required],
      director: ['', Validators.required],
      descripcion: ['', Validators.required],
      // Agrega más campos según tus necesidades
    });
  }

  ngOnInit(): void {
    this.obtenerPeliculas();
    this.obtenerPeliculaId();
  }

  obtenerPeliculas(): void {
    this.peliculaService.obtenerTodasLasPeliculas().subscribe(
      (peliculas) => {
        this.peliculas = peliculas;
      },
      (error) => {
        console.error('Error al obtener las películas:', error);
      }
    );
  }

  obtenerPeliculaId(): void {
    const peliculaIdParam = this.route.snapshot.paramMap.get('id');
    this.peliculaId = peliculaIdParam !== null ? peliculaIdParam : '';
    if (this.peliculaId) {
      this.obtenerPelicula();
    }
  }

  onPeliculaSeleccionada(event: any): void {
    const id = event.target.value;
    this.obtenerDatosPelicula(id);
  }

  obtenerDatosPelicula(id: string): void {
    const peliculaSeleccionada = this.peliculas.find(pelicula => pelicula.id === id);
    if (peliculaSeleccionada) {
      this.formularioActualizar.patchValue({
        titulo: peliculaSeleccionada.titulo,
        director: peliculaSeleccionada.director,
        descripcion: peliculaSeleccionada.descripcion,
      });
    }
  }

  obtenerPelicula(): void {
    if (this.peliculaId) {
      this.peliculaService.obtenerPeliculaPorId(this.peliculaId).subscribe(
        (pelicula) => {
          this.formularioActualizar.patchValue({
            titulo: pelicula.titulo,
            director: pelicula.director,
            descripcion: pelicula.descripcion,
          });
        },
        (error) => {
          console.error('Error al obtener la película:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.formularioActualizar.valid && this.peliculaId) {
      const datosActualizados = this.formularioActualizar.value;
      this.peliculaService.actualizarPelicula(this.peliculaId, datosActualizados).subscribe(
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
