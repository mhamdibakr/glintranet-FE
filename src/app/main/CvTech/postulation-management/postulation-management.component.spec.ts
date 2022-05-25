import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulationManagementComponent } from './postulation-management.component';

describe('PostulationManagementComponent', () => {
  let component: PostulationManagementComponent;
  let fixture: ComponentFixture<PostulationManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulationManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
