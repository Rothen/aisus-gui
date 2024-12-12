import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviationPlotComponent } from './deviation-plot.component';

describe('DeviationPlotComponent', () => {
  let component: DeviationPlotComponent;
  let fixture: ComponentFixture<DeviationPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviationPlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviationPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
