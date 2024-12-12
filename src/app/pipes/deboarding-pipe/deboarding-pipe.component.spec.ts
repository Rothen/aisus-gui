import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeboardingPipeComponent } from './deboarding-pipe.component';

describe('DeboardingPipeComponent', () => {
  let component: DeboardingPipeComponent;
  let fixture: ComponentFixture<DeboardingPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeboardingPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeboardingPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
