import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { SharedService } from "src/app/shared/shared.service";

@Component({
  selector: "app-set-financial-year",
  templateUrl: "./set-financial-year.component.html",
  styleUrls: ["./set-financial-year.component.scss"],
})
export class SetFinancialYearComponent implements OnInit {
  setFinancialForm: FormGroup;
  monthList: Array<any> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  yearList = [];
  monthDropdown = [];
  date = new Date();
  constructor(
    private fb: FormBuilder,
    private service: SharedService,
    public dialogRef: MatDialogRef<SetFinancialYearComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data)
    this.setFinancialForm = this.fb.group({
      startmonth: this.monthList[this.date.getMonth()],
      endmonth: this.monthList[this.date.getMonth() - 1],
      firstyear: this.date.getFullYear(),
      secondyear: this.date.getFullYear() + 1,
      frequency: "monthly",
      OrgId: this.data.accountInfoData._id,
    });

    this.setYearDropdown();
    this.setMonthDropdown();
    if (this.data.type == "Edit") {
      this.setForm(this.data.formData);
    }
  }

  onFormSubmit() {
    this.service
      .getSaveFincalYear(this.setFinancialForm.value)
      .subscribe((res) => {
        console.log(res);
        if (res && res.success) {
          this.dialogRef.close({ success: true, result: res.data });
        }
      });
  }

  onYearChange(ev) {
    this.setFinancialForm.get("secondyear").setValue(ev.value + 1);
    if (ev.value == this.date.getFullYear()) {
      this.setMonthDropdown();
    } else {
      this.setMonthDropdown(true);
      const index = this.monthList.indexOf(
        this.setFinancialForm.value.startmonth
      );
      if (index < this.date.getMonth()) {
        this.setFinancialForm
          .get("startmonth")
          .setValue(this.monthList[this.date.getMonth()]);
      }
    }
  }

  onMonthChange(ev) {
    const index = this.monthList.indexOf(ev.value);
    this.setFinancialForm.get("endmonth").setValue(this.monthList[index - 1]);
  }

  setYearDropdown() {
    this.yearList.push(this.date.getFullYear());
    this.yearList.push(this.date.getFullYear() + 1);
  }

  setMonthDropdown(enableAll?) {
    if (enableAll) {
      this.monthDropdown.map((each) => (each.disabled = false));
    } else {
      this.monthDropdown = [];
      this.monthList.map((each, index) => {
        const isdisabled = index < this.date.getMonth();
        this.monthDropdown.push({
          value: each,
          disabled: isdisabled,
        });
      });
    }
  }

  setForm(data) {
    this.setFinancialForm.patchValue({
      startmonth: data.startmonth,
      endmonth: "",
      firstyear: data.firstyear,
      secondyear: "",
      frequency: data.frequency,
      OrgId: this.data.accountInfoData.OrgId,
    });
  }
}
