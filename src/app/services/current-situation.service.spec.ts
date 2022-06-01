import { TestBed } from '@angular/core/testing';

import { CurrentSituationService } from './current-situation.service';

describe('CurrentSituationService', () => {
  let service: CurrentSituationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentSituationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
