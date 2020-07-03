import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnboardComponent } from './onboard/onboard.component';

import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SetupOrgComponent } from './setup-org/setup-org.component';
import { UploadUsersComponent } from './upload-users/upload-users.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { 
    path: '',
    component: OnboardComponent
  },
  {
    path: 'privacyPolicy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'termsOfServices',
    component: TermsOfUseComponent
  },
  {
    path: "setupOrg",
    component: SetupOrgComponent
  },
  {
    path: "uploadUsers",
    component: UploadUsersComponent
  },
  {
    path: "employeeList",
    component: EmployeeListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule]
})
export class OnboardRoutingModule { }
