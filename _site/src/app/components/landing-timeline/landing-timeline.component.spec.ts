import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTimelineComponent } from './landing-timeline.component';

describe('LandingTimelineComponent', () => {
  let component: LandingTimelineComponent;
  let fixture: ComponentFixture<LandingTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingTimelineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
