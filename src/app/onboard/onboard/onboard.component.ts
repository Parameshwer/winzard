import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {
  public onBoardForm: FormGroup;
  public showSpinner: boolean = false;
  
  
  public signUpSections = {
    "enterEmail": {"show": true},
    "emailOtp": {"show": false},
    "welcomeWinzard": {"show": false},
    "aboutCompany": {"show": false}
  };
  public activeSignupArray = ["enterEmail","emailOtp","welcomeWinzard","aboutCompany"];
  public activeSignupIndex = 0;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    localStorage.removeItem("userInfo");
    this.onBoardForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  onSubmitHandler($event) {
    this.resetAllSections();
    this.signUpSections[$event.to]["show"] = true;
  }
  resetAllSections() {
    this.activeSignupArray.map((section) => {
      this.signUpSections[section]["show"] = false;
    });
  }

}
