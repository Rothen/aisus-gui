import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeboardingTableComponent } from './deboarding-table.component';

describe('DeboardingTableComponent', () => {
  let component: DeboardingTableComponent;
  let fixture: ComponentFixture<DeboardingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeboardingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeboardingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
