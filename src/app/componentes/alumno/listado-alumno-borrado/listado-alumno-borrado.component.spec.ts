import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoAlumnoBorradoComponent } from './listado-alumno-borrado.component';

describe('ListadoAlumnoBorradoComponent', () => {
  let component: ListadoAlumnoBorradoComponent;
  let fixture: ComponentFixture<ListadoAlumnoBorradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoAlumnoBorradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoAlumnoBorradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
