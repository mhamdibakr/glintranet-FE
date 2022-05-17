import { TestBed } from '@angular/core/testing';

import { CvTechService } from './cv-tech.service';

describe('CvTechService', () => {
  let service: CvTechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvTechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
