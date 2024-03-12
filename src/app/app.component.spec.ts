import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PeliculaService } from './pelicula.service';
import { LocalStorageService } from './local-storage.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let peliculaService: jasmine.SpyObj<PeliculaService>;
  let localStorageService: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    peliculaService = jasmine.createSpyObj('PeliculaService', ['obtenerPeliculas']);
    localStorageService = jasmine.createSpyObj('LocalStorageService', ['setItem', 'getItem']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: PeliculaService, useValue: peliculaService },
        { provide: LocalStorageService, useValue: localStorageService }
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should load movies from localStorage on initialization', () => {
    const storedPeliculas = [{ title: 'Pelicula 1' }, { title: 'Pelicula 2' }];
    localStorageService.getItem.and.returnValue(storedPeliculas);

    component.ngOnInit();

    expect(localStorageService.getItem).toHaveBeenCalledWith('peliculas');
    expect(component.peliculas).toEqual(storedPeliculas);
  });

  it('should load movies from PeliculaService and save to localStorage', () => {
    const peliculasFromService = [{ title: 'Pelicula 1' }, { title: 'Pelicula 2' }];
    peliculaService.obtenerPeliculas.and.returnValue(of(peliculasFromService));

    component.cargarPeliculas();

    expect(peliculaService.obtenerPeliculas).toHaveBeenCalled();
    expect(localStorageService.setItem).toHaveBeenCalledWith('peliculas', peliculasFromService);
    expect(component.peliculas).toEqual(peliculasFromService);
  });

  it('should unsubscribe on ngOnDestroy', () => {
    component.ngOnDestroy();
    expect(component['subscription'].unsubscribe).toHaveBeenCalled();
  });
});

