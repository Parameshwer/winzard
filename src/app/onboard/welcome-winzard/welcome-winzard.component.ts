import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-winzard',
  templateUrl: './welcome-winzard.component.html',
  styleUrls: ['./welcome-winzard.component.scss']
})
export class WelcomeWinzardComponent implements OnInit {
  public welcomeWinzardForm: FormGroup;
  public showSpinner: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.welcomeWinzardForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

}
