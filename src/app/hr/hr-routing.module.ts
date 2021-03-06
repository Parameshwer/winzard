import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from '../shared/components/tasks/tasks.component';
import { GoalManagementComponent } from './org-win/goal-management/goal-management.component';


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
      },
      {
        path: 'goalManagement',
        loadChildren: () => import('../goal-management/goal-management.module').then(m => m.GoalManagementModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsModule)
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
