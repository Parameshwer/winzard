import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmployeeComponent } from '../hr/dialogs/add-employee/add-employee.component';
import { UploadUsersComponent } from '../onboard/upload-users/upload-users.component';
import { NgxFlowModule, FlowInjectionToken } from '@flowjs/ngx-flow';
import Flow from '@flowjs/flow.js';

@NgModule({
  declarations: [DashboardComponent,AddEmployeeComponent,UploadUsersComponent],
  imports: [
    CommonModule,
    HrRoutingModule,
    SharedModule,
    NgxFlowModule
  ],
  entryComponents: [AddEmployeeComponent,UploadUsersComponent],
  providers: [
    {
      provide: FlowInjectionToken, 
      useValue: Flow
    }
  ]
})
export class HrModule { }
