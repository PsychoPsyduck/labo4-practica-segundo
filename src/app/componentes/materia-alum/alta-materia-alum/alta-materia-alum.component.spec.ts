import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMateriaAlumComponent } from './alta-materia-alum.component';

describe('AltaMateriaAlumComponent', () => {
  let component: AltaMateriaAlumComponent;
  let fixture: ComponentFixture<AltaMateriaAlumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaMateriaAlumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMateriaAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
