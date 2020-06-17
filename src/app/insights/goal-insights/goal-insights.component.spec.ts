import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalInsightsComponent } from './goal-insights.component';

describe('GoalInsightsComponent', () => {
  let component: GoalInsightsComponent;
  let fixture: ComponentFixture<GoalInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
