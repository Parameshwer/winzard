import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss']
})
export class AboutCompanyComponent implements OnInit {
  public onBoardForm: FormGroup;
  public months: Array<string> = moment.months();
  public years: Array<number> = [];
  public frequencies: Array<object> = [{id: 1, name: "Monthly"},{id: 2, name: "Quaterly"}];
  public financialYear;  

  public activeSectionsObj = {
    "aboutCompany": {"show": true},
    "whatCompany": {"show": false},
    "companySize": {"show": false},
    "accountUrl": {"show": false},
    "companyFinancialYear": {"show": false},
  };
  
  public activeSectionsArray = Object.keys(this.activeSectionsObj);
  public activeSectionIndex = -1;
  public companyTypes: Array<object> = [
    {id: 1, name: "Abortion Policy/ Anti abortion"},
    {id: 2, name: "Abortion Policy/Pro Abortion Rights"},
    {id: 3, name: "Accountants"},
    {id: 4, name: "Advertising/Public Relations"},
    {id: 5, name: "Abortion Policy/ Anti abortion"},
    {id: 6, name: "Aerospace, Defence Contractors"}
  ];
  public companySizes: Array<object> = [
    {id:1, value: "0-10", name: "0-10"},
    {id:2, value: "10-100", name: "10-100"},
    {id:3, value: "100-200", name: "100-200"},
    {id:4, value: "200-500", name: "200-500"},
    {id:5, value: "500-1000", name: "500-1000"},
    {id:6, value: "1000-2000", name: "1000-2000"},
    {id:7, value: "2000", name: "2000+"}
  ];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _service: AuthService
  ) { }

  ngOnInit() {
    this.onBoardForm = this.fb.group({
      companyName: ['', [Validators.required]],
      companyWebsite: ['', [Validators.required]],
      companyType: ['', [Validators.required]],
      companyTeamName: ['', [Validators.required]],
      termsOfuse: ['', [Validators.required]],
      startMonth: ['', [Validators.required]],
      startYear: ['', [Validators.required]],
      subgoalFrequency: ['', [Validators.required]]
    })
    this.generateYears();
    this.setActiveSection();
  }
  onNext(sectionName) {
    console.log(sectionName);
    let msg = "";
    if(sectionName == "whatCompany") {
      if(!this.onBoardForm.get('companyName').value){
        msg = "Please enter company name"
        this._service.openConfirmDialog(msg, 'error');
      } else if(!this.onBoardForm.get('companyWebsite').value){
        msg = "Please enter company website"
        this._service.openConfirmDialog(msg, 'error');
      } else {
        this.resetAllSections();
        this.activeSectionsObj[sectionName]['show'] = true;
      }
    } else if(sectionName == "companySize") {
      if(!this.onBoardForm.get('companyType').value){
        msg = "Please select company type"
        this._service.openConfirmDialog(msg, 'error');
      } else {
        this.resetAllSections();
        this.activeSectionsObj[sectionName]['show'] = true;
      }
    } else if(sectionName == "accountUrl") {
      this.resetAllSections();
      this.activeSectionsObj[sectionName]['show'] = true;
    } else if(sectionName == 'companyFinancialYear') {
      if(!this.onBoardForm.get('companyTeamName').value){
        msg = "Please select company team name"
        this._service.openConfirmDialog(msg, 'error');
      } else if(!this.onBoardForm.get('termsOfuse').value){
        msg = "Please select terms of use"
        this._service.openConfirmDialog(msg, 'error');
      } else {
        this.resetAllSections();
        this.activeSectionsObj[sectionName]['show'] = true;
      }
    }  
  }
  
  setActiveSection() {
    if(this.activeSectionIndex == this.activeSectionsArray.length - 1) {
      return false;
    }
    this.activeSectionIndex = this.activeSectionIndex + 1;        
    this.showActiveSection();
  }

  showActiveSection() {
    if(this.activeSectionIndex < this.activeSectionsArray.length) {
      this.resetAllSections();
      this.activeSectionsObj[this.activeSectionsArray[this.activeSectionIndex]]["show"] = true; 
    } else {
      this.activeSectionIndex = this.activeSectionsArray.length;
    }
  }
  resetAllSections() {
    this.activeSectionsArray.map((section) => {
      this.activeSectionsObj[section]["show"] = false;
    });
  }
  generateYears() {
    for(let i = 2020; i < 2030; i++) {
      this.years.push(i);
    }
  }
  generateCurrentFinancialYear() {
    let formObj = this.onBoardForm.value;
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
  onCompanySizeSelect(index) {
    this.companySizes.map((companySize) => {
      companySize['selected'] = false;
    });    
    this.companySizes[index]['selected'] = true;
  }

  onBack() {
    this.activeSectionIndex = this.activeSectionIndex - 1;        
    this.showActiveSection();
  }
  onFinish() {
    let msg = "";
    if (this.onBoardForm.valid) {
      let params = {
        category: this.onBoardForm.value.companyType,
        companyname: this.onBoardForm.value.companyName,
        companyurl: this.onBoardForm.value.companyWebsite,
        peopleCount: "2000+",
        teamurl: this.onBoardForm.value.companyTeamName
      };
      this._service.getUpdateCompanyInfo(params)
        .subscribe(res => {   
          console.log(res);       
          if (res && res.data) {
            
          }
        }, err => {
          console.log('HTTP Error', err);
        })
    } else if(!this.onBoardForm.get('startMonth').value){
      msg = "Please enter start month"
      this._service.openConfirmDialog(msg, 'error');
    } else if(!this.onBoardForm.get('startYear').value){
      msg = "Please enter start year"
      this._service.openConfirmDialog(msg, 'error');
    } else if(!this.onBoardForm.get('startYear').value){
      msg = "Please enter start year"
      this._service.openConfirmDialog(msg, 'error');
    } else if(!this.onBoardForm.get('subgoalFrequency').value){
      msg = "Please enter sub goal frequency"
      this._service.openConfirmDialog(msg, 'error');
    }
  }
}
