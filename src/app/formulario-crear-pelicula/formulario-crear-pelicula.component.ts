import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaService } from '../pelicula.service';


@Component({
  selector: 'app-formulario-crear-pelicula',
  templateUrl: './formulario-crear-pelicula.component.html',
  styleUrls: ['./formulario-crear-pelicula.component.css']
})
export class FormularioCrearPeliculaComponent implements OnInit {
  formularioPelicula: FormGroup;

  constructor(private fb: FormBuilder, private peliculaService: PeliculaService) {
    this.formularioPelicula = this.fb.group({
      titulo: ['', Validators.required],
      director: ['', Validators.required],
      // Agrega más campos según tus necesidades
    });
  }

  ngOnInit(): void {
    // Lógica de inicialización si es necesario
  }

  onSubmit() {
    // Lógica para enviar el formulario y crear la película
    const nuevaPelicula = this.formularioPelicula.value;
    this.peliculaService['crearPelicula'](nuevaPelicula).subscribe(
      (respuesta: any) => {
        // Lógica después de crear la película
      },
      (error: any) => {
        console.error('Error al crear la película', error);
      }
    );
  }
}