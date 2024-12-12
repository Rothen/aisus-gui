import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupancyPlanPipeComponent } from './occupancy-plan-pipe.component';

describe('OccupancyPlanPipeComponent', () => {
  let component: OccupancyPlanPipeComponent;
  let fixture: ComponentFixture<OccupancyPlanPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccupancyPlanPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupancyPlanPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
