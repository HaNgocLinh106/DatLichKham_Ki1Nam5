import { BacSiService } from './BacSi.service';
import { TestBed, inject } from '@angular/core/testing';

import { LichKhamService } from './lichKham.service';

describe('LichKhamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LichKhamService, BacSiService]
    });
  });

  it('should be created', inject([LichKhamService], (service: LichKhamService) => {
    expect(service).toBeTruthy();
  }));
});
