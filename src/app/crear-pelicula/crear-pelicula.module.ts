import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CrearPeliculaRoutingModule } from './crear-pelicula-routing.module';
import { CrearPeliculaComponent } from './crear-pelicula.component';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CrearPeliculaRoutingModule,
    FormsModule,
    RouterModule,
  ]
})
export class CrearPeliculaModule { }
