import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  public createUserForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  public activeUserCreationTab = "userCreation";
  ngOnInit() {
    this.createUserForm = this.fb.group({
      employeeCode: ['', [Validators.required]],
      employeeName: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      dateOfJoing: ['', [Validators.required]],
      gradeOrLevel: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      unitHead: ['', [Validators.required]],
      subFunction2: ['', [Validators.required]],
      location: ['', [Validators.required]],
      branch: ['', [Validators.required]],
      reportingManagerEmployeeCode: ['', [Validators.required]]
    })
  }
  setActiveTab() {
    console.log(this.activeUserCreationTab);
    if(this.activeUserCreationTab == 'userCreation') {
      this.activeUserCreationTab = "uploadDoc";
    } else {
      this.activeUserCreationTab = "userCreation";
    }
  }

}
