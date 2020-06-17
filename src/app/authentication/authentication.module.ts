import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AppLandingPageComponent } from './app-landing-page/app-landing-page.component';
import { ChangePagePasswordPageComponent } from './change-password-page/change-password-page.component';
import { EmailOtpPageComponent } from './email-otp-page/email-otp-page.component';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, AppLandingPageComponent, ChangePagePasswordPageComponent, EmailOtpPageComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    NgOtpInputModule
  ]
})
export class AuthenticationModule { }
