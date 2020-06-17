import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from '../shared/components/tasks/tasks.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: TasksComponent,
      },
      {
        path: 'orgWIN',
        loadChildren: () => import('./org-win/org-win.module').then(m => m.OrgWINModule)
      },
      {
        path: 'teamWIN',
        loadChildren: () => import('./team-win/team-win.module').then(m => m.TeamWinModule)
      },
      {
        path: 'insights',
        loadChildren: () => import('../insights/insights.module').then(m => m.InsightsModule)
      },
      {
        path: 'talentReview',
        loadChildren: () => import('../talent-review-questionnaire/talent-review-questionnaire.module').then(m => m.TalentReviewQuestionnaireModule)
      }
      
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
