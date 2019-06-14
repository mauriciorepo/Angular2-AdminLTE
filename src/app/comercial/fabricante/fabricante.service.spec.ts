import { TestBed, inject } from '@angular/core/testing';

import { FabricanteService } from './fabricante.service';

describe('FabricanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FabricanteService]
    });
  });

  it('should be created', inject([FabricanteService], (service: FabricanteService) => {
    expect(service).toBeTruthy();
  }));
});
