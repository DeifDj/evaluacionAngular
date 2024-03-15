import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { CatalogoPeliculasComponent } from './catalogo-peliculas/catalogo-peliculas.component';
import { CrearPeliculaComponent } from './crear-pelicula/crear-pelicula.component';
import { FormularioActualizarPeliculaComponent } from './formulario-actualizar-pelicula/formulario-actualizar-pelicula.component';






const routes: Routes = [
  { path: 'crear-pelicula', component: CrearPeliculaComponent },
  { path: 'catalogo-peliculas', component: CatalogoPeliculasComponent },
  { path: 'actualizar-pelicula', component: FormularioActualizarPeliculaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'lista-peliculas', component: ListaPeliculasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }