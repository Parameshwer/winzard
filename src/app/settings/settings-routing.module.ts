import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SettingsLayoutComponent } from './settings-layout/settings-layout.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { InvoicesComponent } from './invoices/invoices.component';


const routes: Routes = [
  {
    path:'',
    component:SettingsLayoutComponent,
    children:[
      {
        path:'accountInfo',
        component:AccountInfoComponent
      },
      {
        path:'UserAndRoles',
        component:InvoicesComponent
      },
      {
        path:'invoices',
        component:InvoicesComponent
      },
      {
        path:'paymentMethod',
        component:InvoicesComponent
      },
      {
        path:'terms',
        component:InvoicesComponent
      },
      {
        path:'personalInfo',
        component:PersonalInfoComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
