import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageQualityComponent } from './image-quality.component';

describe('ImageQualityComponent', () => {
  let component: ImageQualityComponent;
  let fixture: ComponentFixture<ImageQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageQualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
