import { TestBed, inject } from '@angular/core/testing';

import { BSDichVuService } from './BSDichVu.service';

describe('BSDichVuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BSDichVuService]
    });
  });

  it('should be created', inject([BSDichVuService], (service: BSDichVuService) => {
    expect(service).toBeTruthy();
  }));
});
