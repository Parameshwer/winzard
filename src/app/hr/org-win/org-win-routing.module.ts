import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalentManagementComponent } from './talent-management/talent-management.component';
import { OrgWinComponent } from './org-win/org-win.component';
import { PeopleAssessmentComponent } from './people-assessment/people-assessment.component';
import { GoalManagementComponent } from './goal-management/goal-management.component';


const routes: Routes = [
  {
    path:'',
    component:OrgWinComponent,
    children:[
      {
        path:'talentMangement',
        component:TalentManagementComponent
      },
      {
        path:'peopleAssessment',
        component:PeopleAssessmentComponent
      },
      {
        path:'goalManagement',
        component:GoalManagementComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgWINRoutingModule { }
