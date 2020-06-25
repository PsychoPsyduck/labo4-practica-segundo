import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMateriaProfeComponent } from './listado-materia-profe.component';

describe('ListadoMateriaProfeComponent', () => {
  let component: ListadoMateriaProfeComponent;
  let fixture: ComponentFixture<ListadoMateriaProfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoMateriaProfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMateriaProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
