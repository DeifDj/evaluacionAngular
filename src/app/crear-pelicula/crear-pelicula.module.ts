import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearPeliculaRoutingModule } from './crear-pelicula-routing.module';
import { CrearPeliculaComponent } from './crear-pelicula.component';


@NgModule({
  declarations: [
    CrearPeliculaComponent
  ],
  imports: [
    CommonModule,
    CrearPeliculaRoutingModule
  ]
})
export class CrearPeliculaModule { }
