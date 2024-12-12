import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VFactorDeviationPlotComponent } from './v-factor-deviation-plot.component';

describe('VFactorDeviationPlotComponent', () => {
  let component: VFactorDeviationPlotComponent;
  let fixture: ComponentFixture<VFactorDeviationPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VFactorDeviationPlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VFactorDeviationPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
