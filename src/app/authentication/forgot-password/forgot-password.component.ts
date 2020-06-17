import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: FormGroup;
  public showSpinner: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _service: AuthService
  ) { }

  ngOnInit() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  onSubmit() {
    let msg = '';
    // stop here if form is invalid
    this.showSpinner = true;
    if (this.forgotPasswordForm.valid) {
      this._service.getForgotPassword(this.forgotPasswordForm.value)
        .subscribe(res => {   
          console.log(res);       
          if (res && res.data) {
            this.showSpinner = false;
            this.router.navigate(['/emailOtp']);
          }
        }, err => {
          console.log('HTTP Error', err);
        })
    }else if(!this.forgotPasswordForm.get('email').value){
      msg = "Please enter User Email"
      this._service.openConfirmDialog(msg, 'error');
    }

  }

}
