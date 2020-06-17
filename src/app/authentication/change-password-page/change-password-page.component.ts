import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.scss']
})
export class ChangePagePasswordPageComponent implements OnInit {
  public changePasswordForm: FormGroup;
  public loggedInUserInfo = JSON.parse(localStorage.getItem("userInfo"));

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _service: AuthService
  ) { }

  ngOnInit() {
    this.changePasswordForm = this.fb.group({
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]

    })
  }
  onSubmit() {    
    if(this.validatePassword(this.changePasswordForm.value.newPassword,this.changePasswordForm.value.confirmPassword)) {
      let body = {
        email: this.loggedInUserInfo.data.user.email,
        otp: localStorage.getItem("otp"),
        password: this.changePasswordForm.value.newPassword
      };

      this._service.getResetPassword(body).subscribe(res => { 
        console.log(res);
        if (res) {
          this._service.openConfirmDialog(res.msg, 'error',false,() =>{
            localStorage.removeItem("otp");
            this.router.navigate(['/login']);
          });
        }
      }, err => {
        console.log('HTTP Error', err);
      })     
    }
  }
 
  validatePassword(newPassword, confirmPassword) {    
    var errors = [];
    if (newPassword.length < 8) {
        errors.push("Password should be min 8 and max 10 charecters");
    } else if (newPassword.search(/[a-z]/i) < 0) {
        errors.push("Password should have minimum one lowercase letter."); 
    } else if (newPassword.search(/[0-9]/) < 0) {
        errors.push("Password should have minimum one digit.");
    } else if (newPassword.search(/[A-Z]/) < 0) {
        errors.push("Password should have minimum one uppercase letter.");
    } else if(newPassword !== confirmPassword) {
        errors.push("Passwords doesn't Match.");
    }

    if (errors.length > 0) {        
        this._service.openConfirmDialog(errors.join("\n"), 'error');
        return false;
    }
    return true;
}
}
