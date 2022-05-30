import { TestBed } from '@angular/core/testing';

import { AllCampaignService } from './all-campaign.service';

describe('AllCampaignService', () => {
  let service: AllCampaignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCampaignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
