import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
import { AlphhaNumericDirective } from './validators/alphha-numeric.directive';
import  { EmailOtpPageComponent } from '../authentication/email-otp-page/email-otp-page.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [EmailOtpPageComponent,HeaderComponent, SidebarComponent, TasksComponent, CustomDropdownComponent, ConfirmDialogComponent, AlphhaNumericDirective],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule,
    NgOtpInputModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule,
    EmailOtpPageComponent,
    HeaderComponent,
    SidebarComponent,
    TasksComponent,
    CustomDropdownComponent,
    AgGridModule
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class SharedModule { }
