import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-welcome-winzard',
  templateUrl: './welcome-winzard.component.html',
  styleUrls: ['./welcome-winzard.component.scss']
})
export class WelcomeWinzardComponent implements OnInit {
  public welcomeWinzardForm: FormGroup;
  public showSpinner: boolean = false;
  @Output() onSubmitEvent = new EventEmitter<{type: string,to: string}>();
  chide: boolean = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _service: AuthService  
  ) { }

  ngOnInit() {
    this.welcomeWinzardForm = this.fb.group({
      fullname: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  onSubmit() {   
    let msg = '';        
    if (this.welcomeWinzardForm.valid  && this.validatePassword(this.welcomeWinzardForm.value.password)) {
      this.showSpinner = true;
      let params = {
        fullname: this.welcomeWinzardForm.value.fullname,
        password: this.welcomeWinzardForm.value.password,
        email: this._service.userSignUpInfo.email
      };

      this._service.getUpdateUser(params)
        .subscribe(res => {     
          if (res && res.data) {
            this.showSpinner = false;            
            this.onSubmitEvent.emit({type: "next",to:"aboutCompany"});
          }
        }, err => {console.log('HTTP Error', err);})
    } else if(!this.welcomeWinzardForm.get('fullname').value){
      msg = "Please enter user name"
      this._service.openConfirmDialog(msg, 'error');
    } else if(!this.welcomeWinzardForm.get('password').value){
      msg = "Please enter password"
      this._service.openConfirmDialog(msg, 'error');
    }

  }
  validatePassword(newPassword) {    
    var errors = [];
    if (newPassword.length < 8) {
        errors.push("Password should be min 8 and max 10 charecters");
    } else if (newPassword.search(/[a-z]/i) < 0) {
        errors.push("Password should have minimum one lowercase letter."); 
    } else if (newPassword.search(/[0-9]/) < 0) {
        errors.push("Password should have minimum one digit.");
    } else if (newPassword.search(/[A-Z]/) < 0) {
        errors.push("Password should have minimum one uppercase letter.");
    }

    if (errors.length > 0) {        
        this._service.openConfirmDialog(errors.join("\n"), 'error');
        return false;
    }
    return true;
}

}
