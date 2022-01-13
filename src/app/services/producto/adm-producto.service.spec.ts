import { TestBed } from '@angular/core/testing';

import { AdmProductoService } from './adm-producto.service';

describe('AdmProductoService', () => {
  let service: AdmProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
