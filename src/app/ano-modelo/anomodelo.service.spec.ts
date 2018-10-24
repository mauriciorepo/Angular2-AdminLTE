import { TestBed, inject } from '@angular/core/testing';

import { AnomodeloService } from './anomodelo.service';

describe('AnomodeloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnomodeloService]
    });
  });

  it('should be created', inject([AnomodeloService], (service: AnomodeloService) => {
    expect(service).toBeTruthy();
  }));
});
