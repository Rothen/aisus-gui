import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeboardingCameraComponent } from './deboarding-camera.component';

describe('DeboardingCameraComponent', () => {
  let component: DeboardingCameraComponent;
  let fixture: ComponentFixture<DeboardingCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeboardingCameraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeboardingCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
