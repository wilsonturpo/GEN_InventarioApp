import { TestBed } from '@angular/core/testing';

import { AdmUtilitarioService } from './adm-utilitario.service';

describe('AdmUtilitarioService', () => {
  let service: AdmUtilitarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmUtilitarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
