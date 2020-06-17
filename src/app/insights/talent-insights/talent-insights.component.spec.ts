import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentInsightsComponent } from './talent-insights.component';

describe('TalentInsightsComponent', () => {
  let component: TalentInsightsComponent;
  let fixture: ComponentFixture<TalentInsightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentInsightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
