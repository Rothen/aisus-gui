import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelingEngineDemoComponent } from './modeling-engine-demo.component';

describe('ModelingEngineDemoComponent', () => {
  let component: ModelingEngineDemoComponent;
  let fixture: ComponentFixture<ModelingEngineDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelingEngineDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelingEngineDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
