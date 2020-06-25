import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMateriaProfeComponent } from './detalle-materia-profe.component';

describe('DetalleMateriaProfeComponent', () => {
  let component: DetalleMateriaProfeComponent;
  let fixture: ComponentFixture<DetalleMateriaProfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleMateriaProfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMateriaProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
