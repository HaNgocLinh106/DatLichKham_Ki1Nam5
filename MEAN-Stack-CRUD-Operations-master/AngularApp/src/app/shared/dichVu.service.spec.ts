import { TestBed, inject } from '@angular/core/testing';

import { DichVuService } from './dichVu.service';

describe('DichVuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DichVuService]
    });
  });

  it('should be created', inject([DichVuService], (service: DichVuService) => {
    expect(service).toBeTruthy();
  }));
});
