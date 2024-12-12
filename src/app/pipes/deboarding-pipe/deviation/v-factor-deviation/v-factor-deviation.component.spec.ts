import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VFactorDeviationComponent } from './v-factor-deviation.component';

describe('VFactorDeviationComponent', () => {
  let component: VFactorDeviationComponent;
  let fixture: ComponentFixture<VFactorDeviationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VFactorDeviationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VFactorDeviationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
