import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedidaComponent } from './create-medida.component';

describe('CreateMedidaComponent', () => {
  let component: CreateMedidaComponent;
  let fixture: ComponentFixture<CreateMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
