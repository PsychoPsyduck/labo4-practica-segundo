import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaAlumComponent } from './materia-alum.component';

describe('MateriaAlumComponent', () => {
  let component: MateriaAlumComponent;
  let fixture: ComponentFixture<MateriaAlumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaAlumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
