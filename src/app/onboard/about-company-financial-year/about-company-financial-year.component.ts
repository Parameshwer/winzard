import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment'; // add this 1 of 4

@Component({
  selector: 'app-about-company-financial-year',
  templateUrl: './about-company-financial-year.component.html',
  styleUrls: ['./about-company-financial-year.component.scss']
})
export class AboutCompanyFinancialYearComponent implements OnInit {
  public companyFinacialYearForm;
  public months: Array<string> = moment.months();
  public years: Array<number> = [];
  public frequencies: Array<object> = [{id: 1, name: "Monthly"},{id: 2, name: "Quaterly"}];
  public financialYear;
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.companyFinacialYearForm = this.fb.group({
      startMonth: ['', [Validators.required]],
      startYear: ['', [Validators.required]],
      subgoalFrequency: ['', [Validators.required]]      
    });
    this.generateYears();
  }
  generateYears() {
    for(let i = 2020; i < 2030; i++) {
      this.years.push(i);
    }
  }

  generateCurrentFinancialYear() {
    let formObj = this.companyFinacialYearForm.value;
    if(formObj && formObj.startMonth && formObj.startYear && formObj.subgoalFrequency) {
        let startYear = moment(`01-${formObj.startMonth}-${formObj.startYear}`,"DD-MMMM-YYYY"),
            endYear;            
        if(formObj.subgoalFrequency == 1) {
          endYear = startYear.clone().add(11, 'M');
        } else {
          endYear = startYear.clone().add(3, 'M');
        }
        console.log(startYear.format("MM/DD/YYYY"));
        console.log(endYear.format("MM/DD/YYYY"));
        this.financialYear = startYear.format("MMM YYYY") +'  - '+ endYear.format("MMM YYYY");
    }        
  }
  
}
