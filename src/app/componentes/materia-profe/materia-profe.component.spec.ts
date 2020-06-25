import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaProfeComponent } from './materia-profe.component';

describe('MateriaProfeComponent', () => {
  let component: MateriaProfeComponent;
  let fixture: ComponentFixture<MateriaProfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaProfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
