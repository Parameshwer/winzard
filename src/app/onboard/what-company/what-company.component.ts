import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-company',
  templateUrl: './what-company.component.html',
  styleUrls: ['./what-company.component.scss']
})
export class WhatCompanyComponent implements OnInit {
  public companyForm: FormGroup;
  public showSpinner: boolean = false;
  public companyTypes: Array<object> = [
    {id: 1, name: "Abortion Policy/ Anti abortion"},
    {id: 2, name: "Abortion Policy/Pro Abortion Rights"},
    {id: 3, name: "Accountants"},
    {id: 4, name: "Advertising/Public Relations"},
    {id: 5, name: "Abortion Policy/ Anti abortion"},
    {id: 6, name: "Aerospace, Defence Contractors"}
  ];
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.companyForm = this.fb.group({
      companyType: ['', [Validators.required]]
    })
  }

}
