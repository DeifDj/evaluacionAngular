import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaService } from '../pelicula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario-actualizar-pelicula',
  templateUrl: './formulario-actualizar-pelicula.component.html',
  styleUrls: ['./formulario-actualizar-pelicula.component.css']
})
export class FormularioActualizarPeliculaComponent implements OnInit {
  @Input() pelicula: any;
  formularioPelicula: FormGroup;
  peliculaId: string = '';

  constructor(
    private fb: FormBuilder,
    private peliculaService: PeliculaService,
    private route: ActivatedRoute
  ) {
    this.formularioPelicula = this.fb.group({
      titulo: ['', Validators.required],
      director: ['', Validators.required],
      // Agrega más campos según tus necesidades
    });
  }

  ngOnInit(): void {
    this.obtenerPeliculaId();
  }

  obtenerPeliculaId() {
    this.route.params.subscribe(params => {
      this.peliculaId = params['id'];
      this.obtenerPeliculaPorId();
    });
  }

  obtenerPeliculaPorId() {
    this.peliculaService.obtenerPeliculaPorId(this.peliculaId).subscribe(
      (data) => {
        this.pelicula = data;
        this.actualizarFormulario();
      },
      (error) => {
        console.error('Error obteniendo la película por ID', error);
      }
    );
  }

  actualizarFormulario() {
    this.formularioPelicula.patchValue({
      titulo: this.pelicula.titulo,
      director: this.pelicula.director,
      // Actualiza con más campos según tus necesidades
    });
  }

  actualizarPelicula() {
    const peliculaActualizada = this.formularioPelicula.value;
    this.peliculaService.actualizarPelicula(this.peliculaId, peliculaActualizada).subscribe(
      (respuesta: any) => {
        console.log('Película actualizada con éxito', respuesta);
      },
      (error: any) => {
        console.error('Error al actualizar la película', error);
      }
    );
  }

  onSubmit() {
    const peliculaActualizada = this.formularioPelicula.value;
    this.peliculaService.actualizarPelicula(this.peliculaId, peliculaActualizada).subscribe(
      (respuesta: any) => {
        console.log('Película actualizada con éxito', respuesta);
      },
      (error: any) => {
        console.error('Error al actualizar la película', error);
      }
    );
  }
}
