import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAsignacionesComponent } from './listar-asignaciones.component';

describe('ListarAsignacionesComponent', () => {
  let component: ListarAsignacionesComponent;
  let fixture: ComponentFixture<ListarAsignacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAsignacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAsignacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
