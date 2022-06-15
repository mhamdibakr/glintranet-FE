import { TestBed } from '@angular/core/testing';

import { AvailabiltyService } from './availabilty.service';

describe('AvailabiltyService', () => {
  let service: AvailabiltyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailabiltyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
