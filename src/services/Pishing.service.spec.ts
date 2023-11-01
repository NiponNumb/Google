
import { TestBed } from '@angular/core/testing';

import { PishingService } from './Pishing.service';

describe('PishingService', () => {
  let service: PishingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PishingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});