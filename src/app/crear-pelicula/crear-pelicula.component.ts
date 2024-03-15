import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service'; 

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent {
  formularioPelicula: FormGroup;

  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService) {
    this.formularioPelicula = this.fb.group({
      titulo: ['', Validators.required],
      director: ['', Validators.required],
      descripcion: ['', Validators.required],
      // Agrega más campos según tus necesidades
    });
  }

  onSubmit(): void {
    if (this.formularioPelicula.valid) {
      const nuevaPelicula = this.formularioPelicula.value;
      // Guarda la nueva película en el localStorage
      this.localStorageService.guardarPelicula(nuevaPelicula);
      // Limpia el formulario después de guardar la película
      this.formularioPelicula.reset();
      alert('Película creada correctamente');
    } else {
      alert('Por favor completa todos los campos');
    }
  }
}
