import { Observable } from "rxjs";

export interface PeliculaServiceInterface {
    obtenerTodasLasPeliculas(): unknown;
    obtenerPeliculas: () => Observable<any[]>;
    eliminarPelicula: (id: string) => Observable<any>;
    // Agrega aquí otros métodos del servicio si los tienes
  }