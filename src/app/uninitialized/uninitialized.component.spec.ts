import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UninitializedComponent } from './uninitialized.component';

describe('UninitializedComponent', () => {
  let component: UninitializedComponent;
  let fixture: ComponentFixture<UninitializedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UninitializedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UninitializedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
