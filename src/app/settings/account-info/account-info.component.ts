import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SetFinancialYearComponent } from "../set-financial-year/set-financial-year.component";
import { MatDialog } from "@angular/material";
import { SharedService } from "src/app/shared/shared.service";

@Component({
  selector: "app-account-info",
  templateUrl: "./account-info.component.html",
  styleUrls: ["./account-info.component.scss"],
})
export class AccountInfoComponent implements OnInit {
  accountInfo: FormGroup;
  accountInfoData: any;
  userInfo: any;
  countryList: Array<any> = [];
  fincalYearDetails: any;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private shared: SharedService
  ) {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo")).data.user;
    this.getAccountCompanyInfo();
  }

  ngOnInit() {
    this.accountInfo = this.fb.group({
      companyName: [""],
      companyWebsite: [""],
      companyAddress: [""],
      companyAddress2: [""],
      pincode: [""],
      city: [""],
      state: [""],
      country: [""],
      customUrl: [""],
      empId: this.userInfo.id,
      orgId: this.userInfo.gid,
    });
    this.getCountrysList();
  }

  getAccountCompanyInfo() {
    this.shared
      .getAccountCompanyInfo({ orgId: this.userInfo.gid })
      .subscribe((res) => {
        console.log(res);
        if (res && res.success) {
          this.accountInfoData = res.data[0];
          this.setAccountInfoForm(this.accountInfoData);
        }
      });
    this.getFincalYearDetails();
  }

  getFincalYearDetails() {
    this.shared.getFincalYearDetails().subscribe((res) => {
      if (res && res.success) {
        this.fincalYearDetails = res.data;
      }
    });
  }

  setAccountInfoForm(data) {
    this.accountInfo.patchValue({
      companyName: data.companyName ? data.companyName : "",
      companyWebsite: data.companyWebsite ? data.companyWebsite : "",
      companyAddress: data.companyAddress ? data.companyAddress : "",
      companyAddress2: data.companyAddress2 ? data.companyAddress2 : "",
      pincode: data.pincode ? data.pincode : "",
      city: data.city ? data.city : "",
      state: data.state ? data.state : "",
      country: data.country ? data.country : "",
      customUrl: data.customUrl ? data.customUrl : "",
    });
  }

  getCountrysList() {
    this.shared.getCountrysList().subscribe((res) => {
      if (res && res.success) {
        this.countryList = res.data;
      }
    });
  }

  openDialog(row?, type?) {
    const dialogRef = this.dialog.open(SetFinancialYearComponent, {
      width: "620px",
      data: {
        type: type,
        formData: row,
        accountInfoData: this.accountInfoData,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.getFincalYearDetails();
      }
    });
  }

  getUpdateCompanyInfo() {
    this.shared
      .getUpdateCompanyInfo(this.accountInfo.value)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
