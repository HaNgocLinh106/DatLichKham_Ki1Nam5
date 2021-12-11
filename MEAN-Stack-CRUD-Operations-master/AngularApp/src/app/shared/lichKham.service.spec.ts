import { TestBed, inject } from '@angular/core/testing';

import { LichKhamService } from './lichKham.service';

describe('LichKhamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LichKhamService]
    });
  });

  it('should be created', inject([LichKhamService], (service: LichKhamService) => {
    expect(service).toBeTruthy();
  }));
});
