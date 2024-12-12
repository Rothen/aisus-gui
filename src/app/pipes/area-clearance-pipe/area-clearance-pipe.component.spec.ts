import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaClearancePipeComponent } from './area-clearance-pipe.component';

describe('AreaClearancePipeComponent', () => {
  let component: AreaClearancePipeComponent;
  let fixture: ComponentFixture<AreaClearancePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaClearancePipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaClearancePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
