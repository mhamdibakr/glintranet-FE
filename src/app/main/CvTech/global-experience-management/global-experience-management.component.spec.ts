import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalExperienceManagementComponent } from './global-experience-management.component';

describe('GlobalExperienceManagementComponent', () => {
  let component: GlobalExperienceManagementComponent;
  let fixture: ComponentFixture<GlobalExperienceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalExperienceManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalExperienceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
