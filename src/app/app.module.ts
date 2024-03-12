import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';

import { FormularioCrearPeliculaComponent } from './formulario-crear-pelicula/formulario-crear-pelicula.component';
import { PeliculaService } from './pelicula.service';
import { FormularioActualizarPeliculaComponent } from './formulario-actualizar-pelicula/formulario-actualizar-pelicula.component';
import { CapitalizarPipe } from './capitalizar.pipe';
import { ListaPeliculasComponent } from './lista-peliculas/lista-peliculas.component';
import { LocalStorageService } from './local-storage.service';
import { DetalleModule } from './detalle/detalle.module';
import { CatalogoPeliculasComponent } from './catalogo-peliculas/catalogo-peliculas.component';






@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CatalogoPeliculasComponent,
    FormularioCrearPeliculaComponent,
    ListaPeliculasComponent,
    FormularioActualizarPeliculaComponent,
    CapitalizarPipe,
    
  ],
  
  imports: [
    DetalleModule,
    BrowserModule,
    MatSlideToggleModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatListModule,
    MatCardModule,
    
  ],
  exports: [
    CatalogoPeliculasComponent,
  ],
  providers: [LocalStorageService,PeliculaService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
