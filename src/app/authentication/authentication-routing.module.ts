import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppLandingPageComponent } from './app-landing-page/app-landing-page.component';
import { ChangePagePasswordPageComponent } from './change-password-page/change-password-page.component';
import { EmailOtpPageComponent } from './email-otp-page/email-otp-page.component';


const routes: Routes = [ 
  { 
    path: '',
    component: AppLandingPageComponent,
    children: [      
      { path: 'login', component: LoginComponent },
      { path: 'forgotPassword', component: ForgotPasswordComponent },
      { path: 'changePassword', component: ChangePagePasswordPageComponent },
      { path: 'emailOtp', component: EmailOtpPageComponent }       
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
