import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentReviewComponent } from './talent-review.component';

describe('TalentReviewComponent', () => {
  let component: TalentReviewComponent;
  let fixture: ComponentFixture<TalentReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalentReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
