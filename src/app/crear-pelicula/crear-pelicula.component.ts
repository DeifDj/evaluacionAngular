import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaService } from '../pelicula.service';
import { CatalogoPeliculasComponent } from '../catalogo-peliculas/catalogo-peliculas.component';
import { PeliculaEventService } from '../pelicula-event.service';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
})
export class CrearPeliculaComponent implements OnInit {
  formularioPelicula: FormGroup;

  constructor(
    private fb: FormBuilder,
    private peliculaService: PeliculaService,
    private peliculaEventService: PeliculaEventService
  ) {
    this.formularioPelicula = this.fb.group({
      id: [''],
      titulo: ['', Validators.required],
      director: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.formularioPelicula.valid) {
      const peliculaData = this.formularioPelicula.value;
      this.peliculaService.crearPelicula(peliculaData).subscribe(
        (pelicula) => {
          // Guardar la película en el localStorage
          this.guardarEnLocalStorage(pelicula);
          console.log('Película creada correctamente:', pelicula);

          this.peliculaEventService.notificarPeliculaCreada();
          
      
        },
        (error) => {
          console.error('Error al crear la película:', error);
        }
      );
    } else {
      console.log('El formulario no es válido. Verifica los campos.');
    }
  }

  private guardarEnLocalStorage(pelicula: any): void {
    // Obtener las películas existentes en el localStorage
    let peliculas: any[] = JSON.parse(localStorage.getItem('peliculas') || '[]');
    // Agregar la nueva película al arreglo
    peliculas.push(pelicula);
    // Guardar el arreglo actualizado en el localStorage
    localStorage.setItem('peliculas', JSON.stringify(peliculas));
  }
}
