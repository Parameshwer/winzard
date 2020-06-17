import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-landing-page',
  templateUrl: './app-landing-page.component.html',
  styleUrls: ['./app-landing-page.component.scss']
})
export class AppLandingPageComponent implements OnInit {
  public activeComponent = "";
  constructor(public route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event && event["url"] == "/emailOtp") {
        this.activeComponent = "email-otp-page";
      } else if(event && event["url"] == "/changePassword") {
        this.activeComponent = "change-password-page";
      } else {
        this.activeComponent = "";
      }
    });
  }

  ngOnInit() {
  }

}
