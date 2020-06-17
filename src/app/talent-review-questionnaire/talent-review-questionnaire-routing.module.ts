import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalentReviewComponent } from './talent-review/talent-review.component';


const routes: Routes = [
  {
    path:'',
    component:TalentReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalentReviewQuestionnaireRoutingModule { }
