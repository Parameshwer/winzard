import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalManagementComponent } from './goal-management.component';


const routes: Routes = [
  {
    path:'',
    component:GoalManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalManagementRoutingModule { }
