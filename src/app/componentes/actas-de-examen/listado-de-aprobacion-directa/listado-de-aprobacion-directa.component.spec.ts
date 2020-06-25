import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeAprobacionDirectaComponent } from './listado-de-aprobacion-directa.component';

describe('ListadoDeAprobacionDirectaComponent', () => {
  let component: ListadoDeAprobacionDirectaComponent;
  let fixture: ComponentFixture<ListadoDeAprobacionDirectaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDeAprobacionDirectaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDeAprobacionDirectaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
