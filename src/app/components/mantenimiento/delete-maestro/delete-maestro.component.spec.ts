import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMaestroComponent } from './delete-maestro.component';

describe('DeleteMaestroComponent', () => {
  let component: DeleteMaestroComponent;
  let fixture: ComponentFixture<DeleteMaestroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMaestroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMaestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
