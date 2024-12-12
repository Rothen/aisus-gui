import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupancyPlanCameraComponent } from './occupancy-plan-camera.component';

describe('OccupancyPlanCameraComponent', () => {
  let component: OccupancyPlanCameraComponent;
  let fixture: ComponentFixture<OccupancyPlanCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccupancyPlanCameraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupancyPlanCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
