import { TestBed, inject } from '@angular/core/testing';

import { TipoSistemaService } from './tipo-sistema.service';

describe('TipoSistemaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoSistemaService]
    });
  });

  it('should be created', inject([TipoSistemaService], (service: TipoSistemaService) => {
    expect(service).toBeTruthy();
  }));
});
