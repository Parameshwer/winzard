import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleAssessmentComponent } from './people-assessment.component';

describe('PeopleAssessmentComponent', () => {
  let component: PeopleAssessmentComponent;
  let fixture: ComponentFixture<PeopleAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
