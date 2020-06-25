import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMateriaAlumComponent } from './listado-materia-alum.component';

describe('ListadoMateriaAlumComponent', () => {
  let component: ListadoMateriaAlumComponent;
  let fixture: ComponentFixture<ListadoMateriaAlumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMateriaAlumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMateriaAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
