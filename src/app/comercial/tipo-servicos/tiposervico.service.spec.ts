import { TestBed, inject } from '@angular/core/testing';

import { TiposervicoService } from './tiposervico.service';

describe('TiposervicoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TiposervicoService]
    });
  });

  it('should be created', inject([TiposervicoService], (service: TiposervicoService) => {
    expect(service).toBeTruthy();
  }));
});
