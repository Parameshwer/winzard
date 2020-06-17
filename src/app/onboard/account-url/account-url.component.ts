import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-url',
  templateUrl: './account-url.component.html',
  styleUrls: ['./account-url.component.scss']
})
export class AccountUrlComponent implements OnInit {
  public accountUrlForm;
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.accountUrlForm = this.fb.group({
      companyName: ['', [Validators.required]],
      termsOfuse: ['', [Validators.required]],      
    })
  }

}
