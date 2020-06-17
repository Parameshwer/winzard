import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-email-otp-page',
  templateUrl: './email-otp-page.component.html',
  styleUrls: ['./email-otp-page.component.scss']
})
export class EmailOtpPageComponent implements OnInit {
  public showSpinner: boolean = false;
  public otpValue;
  public loggedInUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  constructor(
    private _service: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {

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
      this._service.getVerifyOTP({email: this.loggedInUserInfo.data.user.email,otp: this.otpValue}).subscribe(res => {                    
          if (res && res.data) {                        
            localStorage.setItem("otp", this.otpValue);
            this.router.navigate(['/changePassword']);
          }
        }, err => {
          console.log('HTTP Error', err);
        })
    }else {      
      msg = "Please enter valid otp"
      this._service.openConfirmDialog(msg, 'error',false,this.onDialogClose());
    }
  }
  onDialogClose() {
    console.log("iam here");
  }
}
