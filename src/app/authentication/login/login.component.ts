import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']  
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide: boolean = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _service: AuthService
  ) { }
  public showForgotPasswordPage: boolean = false;
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  showForgotPassword() {
    this.showForgotPasswordPage = !this.showForgotPasswordPage;
  }
  onSubmit() {
    let msg = '';
    // stop here if form is invalid
    if (this.loginForm.valid) {
      this._service.validateLoginUser(this.loginForm.value)
        .subscribe(res => {
          console.log(res);
          if (res && res.data) {
            this.router.navigate(['/winzard'])
            localStorage.setItem("userInfo", JSON.stringify(res));
          }

        }, err => {
          console.log('HTTP Error', err);
        })
    } else if(!this.loginForm.get('username').value && !this.loginForm.get('password').value){
      msg = "Please enter User Name & Password"
      this._service.openConfirmDialog(msg, 'error');
    } else if(!this.loginForm.get('username').value){
      msg = "Please enter User Name"
      this._service.openConfirmDialog(msg, 'error');
    } else{
      msg = "Please enter Password"
      this._service.openConfirmDialog(msg, 'error');
    }

  }
}
