import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../authentication/auth.service';


@Component({
  selector: 'app-enter-email',
  templateUrl: './enter-email.component.html',
  styleUrls: ['./enter-email.component.scss']
})
export class EnterEmailComponent implements OnInit {
  @Output() onSubmitEvent = new EventEmitter<{type: string,to: string}>();
  public signUpForm: FormGroup;
  public showSpinner: boolean = false;
  constructor(
    private fb: FormBuilder,
    private _service: AuthService  
  ) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  onSubmit() {   
    let msg = '';        
    if (this.signUpForm.valid) {
      this.showSpinner = true;
      this._service.getCheckEmailSignup(this.signUpForm.value)
        .subscribe(res => {     
          if (res && res.data) {
            this.showSpinner = false;
            this._service.userSignUpInfo["email"] = this.signUpForm.value.email;
            this.onSubmitEvent.emit({type: "next",to:"emailOtp"});
          }
        }, err => {console.log('HTTP Error', err);})
    } else if(!this.signUpForm.get('email').value){
      msg = "Please enter User Email"
      this._service.openConfirmDialog(msg, 'error');
    } else {
      msg = "Please enter valid User Email"
      this._service.openConfirmDialog(msg, 'error');
    }

  }

}
