import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionalPlotsComponent } from './positional-plots.component';

describe('PositionalPlotsComponent', () => {
  let component: PositionalPlotsComponent;
  let fixture: ComponentFixture<PositionalPlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PositionalPlotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionalPlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
