import { TestBed, inject } from '@angular/core/testing';

import { BacSiService } from './BacSi.service';

describe('BacSiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BacSiService]
    });
  });

  it('should be created', inject([BacSiService], (service: BacSiService) => {
    expect(service).toBeTruthy();
  }));
});
