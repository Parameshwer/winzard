import { TestBed } from '@angular/core/testing';

import { TalentReviewService } from './talent-review.service';

describe('TalentReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TalentReviewService = TestBed.get(TalentReviewService);
    expect(service).toBeTruthy();
  });
});
