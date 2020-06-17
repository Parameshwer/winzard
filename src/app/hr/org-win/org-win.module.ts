import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgWINRoutingModule } from './org-win-routing.module';
import { TalentManagementComponent } from './talent-management/talent-management.component';
import { OrgWinComponent } from './org-win/org-win.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PeopleAssessmentComponent } from './people-assessment/people-assessment.component';
import { GoalManagementComponent } from './goal-management/goal-management.component';


@NgModule({
  declarations: [TalentManagementComponent, OrgWinComponent, PeopleAssessmentComponent, GoalManagementComponent],
  imports: [
    CommonModule,
    OrgWINRoutingModule,
    SharedModule
  ]
})
export class OrgWINModule { }
