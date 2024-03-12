import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioCrearPeliculaComponent } from './formulario-crear-pelicula/formulario-crear-pelicula.component';
import { FormularioActualizarPeliculaComponent } from './formulario-actualizar-pelicula/formulario-actualizar-pelicula.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';

const routes: Routes = [
  { path: 'crear-pelicula', component: FormularioCrearPeliculaComponent },
  { path: 'formulario-actualizar-pelicula/:id', component: FormularioActualizarPeliculaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'lista-peliculas', component: ListaPeliculasComponent },
  { path: 'crear-pelicula', loadChildren: () => import('./crear-pelicula/crear-pelicula.module').then(m => m.CrearPeliculaModule) }, 
  { path: 'detalle', loadChildren: () => import('./detalle/detalle.module').then(m => m.DetalleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }