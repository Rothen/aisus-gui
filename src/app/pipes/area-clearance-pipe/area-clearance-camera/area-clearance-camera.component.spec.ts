import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaClearanceCameraComponent } from './area-clearance-camera.component';

describe('AreaClearanceCameraComponent', () => {
  let component: AreaClearanceCameraComponent;
  let fixture: ComponentFixture<AreaClearanceCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaClearanceCameraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaClearanceCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
