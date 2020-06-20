import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-email-otp-page',
  templateUrl: './email-otp-page.component.html',
  styleUrls: ['./email-otp-page.component.scss']
})
export class EmailOtpPageComponent implements OnInit {
  @Output() onSubmitEvent = new EventEmitter<{type: string, to: string}>();
  public showSpinner: boolean = false;
  public otpValue;
  public loggedInUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  public userEmail;
  @Input() from: string;
  constructor(
    private _service: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
    if(this.loggedInUserInfo && this.loggedInUserInfo.user.data.user) {
      this.userEmail = this.loggedInUserInfo.user.data.user.email;
    } else {
      this.userEmail = this._service.userSignUpInfo.email;
    }
  }

  onOtpChange(event) {    
    if(event && event.length == 6) {
      this.otpValue = event;      
    } else {
      this.otpValue = "";
    }
  }

  onSubmit() {
    let msg = '';        
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 1000);
    if (this.otpValue) {      
      this._service.getVerifyOTP({email: this.userEmail, otp: this.otpValue}).subscribe(res => {                    
          if (res && res.data) {                        
            localStorage.setItem("otp", this.otpValue);
            this._service.userSignUpInfo.otp = this.otpValue;
            if(this.from == "onBoard") {
              this.router.navigate(['/changePassword']);
            } else {              
              this.onSubmitEvent.emit({type: "next",to: "welcomeWinzard"});
            }
          }
        }, err => {
          console.log('HTTP Error', err);
        })
    }else {      
      msg = "Please enter valid otp"
      this._service.openConfirmDialog(msg, 'error',false,this.onDialogClose());
    }
  }
  onBack() {
    this.onSubmitEvent.emit({type:"back",to:"enterEmail"});
  }
  onDialogClose() {
    console.log("iam here");
  }
}
