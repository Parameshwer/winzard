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


@NgModule({
  declarations: [OnboardComponent, EnterEmailComponent, WelcomeWinzardComponent, AboutCompanyComponent, CompanySizeComponent, AccountUrlComponent, WhatCompanyComponent, AboutCompanyFinancialYearComponent],
  imports: [
    CommonModule,
    OnboardRoutingModule,
    SharedModule
  ]
})
export class OnboardModule { }
