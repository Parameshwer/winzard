import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TalentReviewQuestionnaireRoutingModule } from './talent-review-questionnaire-routing.module';
import { TalentReviewComponent } from './talent-review/talent-review.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TalentReviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    TalentReviewQuestionnaireRoutingModule
  ]
})
export class TalentReviewQuestionnaireModule { }
