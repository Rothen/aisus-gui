import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFactorDeviationPlotComponent } from './r-factor-deviation-plot.component';

describe('RFactorDeviationPlotComponent', () => {
  let component: RFactorDeviationPlotComponent;
  let fixture: ComponentFixture<RFactorDeviationPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RFactorDeviationPlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RFactorDeviationPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
