import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaestroComponent } from './create-maestro.component';

describe('CreateMaestroComponent', () => {
  let component: CreateMaestroComponent;
  let fixture: ComponentFixture<CreateMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMaestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
