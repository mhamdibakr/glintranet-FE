import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaignDetailsComponent } from './campaign-details.component';

describe('CampaignDetailsComponent', () => {
  let component: CompaignDetailsComponent;
  let fixture: ComponentFixture<CompaignDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaignDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaignDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
