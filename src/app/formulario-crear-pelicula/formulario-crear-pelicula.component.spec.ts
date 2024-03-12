import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearPeliculaComponent } from './formulario-crear-pelicula.component';

describe('FormularioCrearPeliculaComponent', () => {
  let component: FormularioCrearPeliculaComponent;
  let fixture: ComponentFixture<FormularioCrearPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCrearPeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCrearPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
