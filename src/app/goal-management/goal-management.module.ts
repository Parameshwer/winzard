import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalManagementRoutingModule } from './goal-management-routing.module';
import { GoalManagementComponent } from './goal-management.component';
import { SharedModule } from '../shared/shared.module';
import { AddGoalDialogComponent } from './add-goal-dialog/add-goal-dialog.component';


@NgModule({
  declarations: [GoalManagementComponent, AddGoalDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    GoalManagementRoutingModule
  ],
  entryComponents:[AddGoalDialogComponent]
})
export class GoalManagementModule { }
