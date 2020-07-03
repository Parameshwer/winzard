import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { OnboardRoutingModule } from './onboard-routing.module';
import { OnboardComponent } from './onboard/onboard.component';
import { EnterEmailComponent } from './enter-email/enter-email.component';
import { WelcomeWinzardComponent } from './welcome-winzard/welcome-winzard.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { CompanySizeComponent } from './company-size/company-size.component';
import { AccountUrlComponent } from './account-url/account-url.component';
import { WhatCompanyComponent } from './what-company/what-company.component';
import { AboutCompanyFinancialYearComponent } from './about-company-financial-year/about-company-financial-year.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SetupOrgComponent } from './setup-org/setup-org.component';
import { UploadUsersComponent } from './upload-users/upload-users.component';
import { NgxFlowModule, FlowInjectionToken } from '@flowjs/ngx-flow';
import Flow from '@flowjs/flow.js';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [OnboardComponent, EnterEmailComponent, WelcomeWinzardComponent, AboutCompanyComponent, CompanySizeComponent, AccountUrlComponent, WhatCompanyComponent, AboutCompanyFinancialYearComponent, PrivacyPolicyComponent, TermsOfUseComponent, CreateAccountComponent, SetupOrgComponent, UploadUsersComponent, EmployeeListComponent],
  imports: [
    NgxFlowModule,
    CommonModule,
    OnboardRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: FlowInjectionToken, 
      useValue: Flow
    }
  ]
})
export class OnboardModule { }
