import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralSwayPipeComponent } from './lateral-sway-pipe.component';

describe('LateralSwayPipeComponent', () => {
  let component: LateralSwayPipeComponent;
  let fixture: ComponentFixture<LateralSwayPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LateralSwayPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralSwayPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
