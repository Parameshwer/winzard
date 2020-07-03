import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SettingSidebarComponent } from './setting-sidebar/setting-sidebar.component';
import { SharedModule } from '../shared/shared.module';
import { InvoicesComponent } from './invoices/invoices.component';
import { SetFinancialYearComponent } from './set-financial-year/set-financial-year.component';


@NgModule({
  declarations: [SettingsLayoutComponent, AccountInfoComponent, PersonalInfoComponent, SettingSidebarComponent, InvoicesComponent, SetFinancialYearComponent],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule
  ],
  entryComponents:[SetFinancialYearComponent]
})
export class SettingsModule { }
