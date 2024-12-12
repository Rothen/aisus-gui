import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UFactorDeviationPlotComponent } from './u-factor-deviation-plot.component';

describe('UFactorDeviationPlotComponent', () => {
  let component: UFactorDeviationPlotComponent;
  let fixture: ComponentFixture<UFactorDeviationPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UFactorDeviationPlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UFactorDeviationPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
