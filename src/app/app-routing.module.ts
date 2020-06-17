import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'onboard',
    loadChildren: () => import('./onboard/onboard.module').then(m => m.OnboardModule)
  },
  {
    path: '',
    redirectTo: '/winzard',
    pathMatch: 'full'
  },
  {
    path: 'winzard',
    loadChildren: () => import('./hr/hr.module').then(m => m.HrModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
