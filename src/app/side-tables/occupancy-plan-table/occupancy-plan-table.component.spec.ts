import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupancyPlanTableComponent } from './occupancy-plan-table.component';

describe('OccupancyPlanTableComponent', () => {
  let component: OccupancyPlanTableComponent;
  let fixture: ComponentFixture<OccupancyPlanTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OccupancyPlanTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupancyPlanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
