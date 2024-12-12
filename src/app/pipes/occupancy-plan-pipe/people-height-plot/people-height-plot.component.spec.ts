import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleHeightPlotComponent } from './people-height-plot.component';

describe('PeopleHeightPlotComponent', () => {
  let component: PeopleHeightPlotComponent;
  let fixture: ComponentFixture<PeopleHeightPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleHeightPlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleHeightPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
