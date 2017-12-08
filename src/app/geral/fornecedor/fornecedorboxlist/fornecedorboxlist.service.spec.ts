import { TestBed, inject } from '@angular/core/testing';

import { FornecedorboxlistService } from './fornecedorboxlist.service';

describe('FornecedorboxlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FornecedorboxlistService]
    });
  });

  it('should be created', inject([FornecedorboxlistService], (service: FornecedorboxlistService) => {
    expect(service).toBeTruthy();
  }));
});
