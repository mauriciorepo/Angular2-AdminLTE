import { TestBed, inject } from '@angular/core/testing';

import { ParcelasService } from './parcelas.service';

describe('ParcelasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParcelasService]
    });
  });

  it('should be created', inject([ParcelasService], (service: ParcelasService) => {
    expect(service).toBeTruthy();
  }));
});
