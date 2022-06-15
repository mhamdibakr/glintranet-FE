import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationLevelManagementComponent } from './education-level-management.component';

describe('EducationLevelManagementComponent', () => {
  let component: EducationLevelManagementComponent;
  let fixture: ComponentFixture<EducationLevelManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationLevelManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationLevelManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
