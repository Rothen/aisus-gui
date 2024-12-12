import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AisusComponent } from './aisus.component';

describe('AisusComponent', () => {
  let component: AisusComponent;
  let fixture: ComponentFixture<AisusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AisusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AisusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
