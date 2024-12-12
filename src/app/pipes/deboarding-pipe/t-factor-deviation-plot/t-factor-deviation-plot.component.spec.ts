import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TFactorDeviationPlotComponent } from './t-factor-deviation-plot.component';

describe('TFactorDeviationPlotComponent', () => {
  let component: TFactorDeviationPlotComponent;
  let fixture: ComponentFixture<TFactorDeviationPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TFactorDeviationPlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TFactorDeviationPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
