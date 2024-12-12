import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionPlotsComponent } from './projection-plots.component';

describe('ProjectionPlotsComponent', () => {
  let component: ProjectionPlotsComponent;
  let fixture: ComponentFixture<ProjectionPlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectionPlotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectionPlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
