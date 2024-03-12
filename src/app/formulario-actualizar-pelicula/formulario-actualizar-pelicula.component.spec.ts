import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioActualizarPeliculaComponent } from './formulario-actualizar-pelicula.component';

describe('FormularioActualizarPeliculaComponent', () => {
  let component: FormularioActualizarPeliculaComponent;
  let fixture: ComponentFixture<FormularioActualizarPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioActualizarPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioActualizarPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
