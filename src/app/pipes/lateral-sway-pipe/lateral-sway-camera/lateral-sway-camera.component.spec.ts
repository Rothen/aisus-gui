import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralSwayCameraComponent } from './lateral-sway-camera.component';

describe('LateralSwayCameraComponent', () => {
  let component: LateralSwayCameraComponent;
  let fixture: ComponentFixture<LateralSwayCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateralSwayCameraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralSwayCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
