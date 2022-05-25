import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSituationManagementComponent } from './current-situation-management.component';

describe('CurrentSituationManagementComponent', () => {
  let component: CurrentSituationManagementComponent;
  let fixture: ComponentFixture<CurrentSituationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentSituationManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSituationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
