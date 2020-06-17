import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamWinComponent } from './team-win/team-win.component';


const routes: Routes = [
  {
    path:'',
    component:TeamWinComponent,
    children:[
      {
        path:'',
        loadChildren:() => import('../../talent-review-questionnaire/talent-review-questionnaire.module')
        .then(x => x.TalentReviewQuestionnaireModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamWinRoutingModule { }
