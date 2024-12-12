import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDeviationPlotComponent } from './deviation-plot.component';

describe('NgxDeviationPlotComponent', () => {
  let component: NgxDeviationPlotComponent;
  let fixture: ComponentFixture<NgxDeviationPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxDeviationPlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxDeviationPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
