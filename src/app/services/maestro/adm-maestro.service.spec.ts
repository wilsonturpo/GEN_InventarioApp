import { TestBed } from '@angular/core/testing';

import { AdmMaestroService } from './adm-maestro.service';

describe('AdmMaestroService', () => {
  let service: AdmMaestroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmMaestroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
