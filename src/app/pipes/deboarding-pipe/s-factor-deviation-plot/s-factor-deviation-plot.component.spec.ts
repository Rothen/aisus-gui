import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SFactorDeviationPlotComponent } from './s-factor-deviation-plot.component';

describe('SFactorDeviationPlotComponent', () => {
  let component: SFactorDeviationPlotComponent;
  let fixture: ComponentFixture<SFactorDeviationPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SFactorDeviationPlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SFactorDeviationPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
