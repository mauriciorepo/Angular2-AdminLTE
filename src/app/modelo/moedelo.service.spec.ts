import { TestBed, inject } from '@angular/core/testing';

import { MoedeloService } from './moedelo.service';

describe('MoedeloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoedeloService]
    });
  });

  it('should be created', inject([MoedeloService], (service: MoedeloService) => {
    expect(service).toBeTruthy();
  }));
});
