import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatTableDataSource,
  MatPaginator,
  MatSidenav,
  MatSort,
  MatOption,
} from "@angular/material";
import { HrService } from "../../hr.service";
import { FormControl } from "@angular/forms";
import { AuthService } from "../../../authentication/auth.service";
import * as _ from "lodash";

@Component({
  selector: "app-talent-management",
  templateUrl: "./talent-management.component.html",
  styleUrls: ["./talent-management.component.scss"],
})
export class TalentManagementComponent implements OnInit {
  @ViewChild("drawer", { static: true }) public sidenav: MatSidenav;
  @ViewChild("dueSidenav", { static: true }) public dueSidenav: MatSidenav;
  sideNavLoader: boolean = false;
  talentIntiateBtn: string = "INTIATE";
  talentID: any = "";
  checkActiveTm:string = '';
  displayedColumns: string[] = [
    "sNo",
    "start",
    "end",
    "sent",
    "submited",
    "dueEmp",
    "status",
    "edit",
    "reminder",
  ];
  loader: boolean = true;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild("allSelected", { static: false }) private allSelected: MatOption;
  gradesList: Array<any> = [];
  empList: Array<any> = [];
  dueEmpList: Array<any> = [];
  intiateTalent: any;
  gradesInfoRef = [];
  // selectedGrades: Array<any> = [];
  statusList: Array<any> = [
    {
      id: "1",
      name: "Active",
    },
    {
      id: "2",
      name: "Inactive",
    },
    {
      id: "3",
      name: "Completed",
    },
  ];
  grades = new FormControl();
  startDate = new FormControl();
  endDate = new FormControl();
  onlySupervisors: boolean = false;
  pageDetails = {
    page: 1,
    pageSize: 5,
    total: 0,
    sort: { start: 1 } as any,
  };
  intiateSucess: boolean = false;
  disableSelectAll: boolean = false;
  userInfo: any;
  isSelectAllClicked;
  stopChangeEvent;
  timeOutRef;
  constructor(private _service: HrService, private auth: AuthService) {}

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.getGradeList();
    this.getTalentSurveysData(true);
  }

  getTalentSurveysData(isFirst?) {
    const params = _.cloneDeep(this.pageDetails);
    params.page--;

    this._service.getTalentSurveys(params).subscribe(
      (res) => {
        console.log(res);
        if (res && res.data) {
          console.log(res.data, "dataaa");
          this.dataSource.data = res.data.talents;
          this.loader = false;
          // this.dataSource.paginator = this.paginator;
          this.pageDetails.total = res.data.TotalCount;
          if (isFirst) {
            setTimeout(() => {
              this.dataSource.sort = this.sort;
              this.onSortChange();
            }, 200);
          }
        }
      },
      (err) => {
        console.log("HTTP Error", err);
      }
    );
  }

  onSortChange() {
    if (this.sort && this.sort.sortChange) {
      this.sort.sortChange.subscribe((r) => {
        console.log(r);
        this.pageDetails.page = 1;
        const value = r.direction == "asc" ? 1 : -1;
        this.pageDetails.sort = { [r.active]: value };
        this.getTalentSurveysData();
     });
    }
  }
  getGradeList() {
    this._service.getGradeList().subscribe(
      (res) => {
        console.log(res);
        if (res && res.data) {
          console.log(res);
          this.gradesInfoRef = res.data;
          this.gradesInfoRef.splice(0, 1);
        }
      },
      (err) => {
        console.log("HTTP Error", err);
      }
    );
  }

  tosslePerOne(all) {
    if (this.allSelected.selected) {
      this.allSelected.deselect();
      return false;
    }
    if (this.grades.value.length == this.gradesList.length) {
      this.isSelectAllClicked = true;
      this.allSelected.select();
    } else {
      this.getEmployeeList(this.grades.value);
    }
  }
  toggleAllSelection() {
    const isSelected = this.gradesList.some((item) =>
      this.checkDisable(item["_id"])
    );
    if (this.allSelected.selected) {
      this.grades.patchValue([...this.gradesList.map((item) => item), 0], {
        emitEvent: false,
      });
      this.getEmployeeList(this.grades.value);
    } else {
      if (isSelected) {
        const list = this.gradesList.filter((item) =>
          this.checkDisable(item["_id"])
        );
        this.grades.patchValue(list, { emitEvent: false });
      } else {
        this.grades.patchValue([], { emitEvent: false });
      }
      this.getEmployeeList(this.grades.value);
    }
  }

  onGradesChages(event) {
    clearTimeout(this.timeOutRef);
    this.timeOutRef = setTimeout(() => {
      if (this.isSelectAllClicked) {
        this.toggleAllSelection();
        this.isSelectAllClicked = false;
      } else {
        this.tosslePerOne(this.allSelected.viewValue);
      }
    }, 100);
  }

  onCheckSupervisors(onlySupervisors) {
    //this.onlySupervisors = !onlySupervisors;
    this.getEmployeeList(this.grades.value);
  }
  getEmployeeList(params) {
    let selectedGrades = {
      gradeIds: params ? params.map((g) => g._id) : [],
    };
    selectedGrades["showSupervisors"] = this.onlySupervisors;
    if (!selectedGrades.gradeIds.length) {
      this.empList = [];
      return;
    }
    this._service.getEmployeeList(selectedGrades).subscribe(
      (res) => {
        console.log(res);
        if (res && res.data) {
          console.log(res);
          this.empList = res.data;
        }
      },
      (err) => {
        console.log("HTTP Error", err);
      }
    );
  }

  intiateTalentMangement() {
    let msg = "";
    this.sideNavLoader = true;
    const grades = this.grades.value.filter((g) => (typeof g === 'object')).map(g => g._id);
    this.intiateTalent = {
      gradeIds: grades,
      startsurvey: this.startDate.value,
      endsurvey: this.endDate.value,
      employees: this.empList.map((e) => {
        return {
          empId: e._id,
        };
      }),
    };
    if (this.talentID){
      this.intiateTalent["talentID"] = this.talentID;
   }
    if (!this.grades.value && !this.startDate.value && !this.endDate.value) {
      msg = "Please select Grade & Date";
      this.auth.openConfirmDialog(msg, "error");
      return;
    } else if (!this.grades.value) {
      msg = "Please select Grade";
      this.auth.openConfirmDialog(msg, "error");
      return;
    } else if (!this.startDate.value) {
      msg = "Please select Start Date";
      this.auth.openConfirmDialog(msg, "error");
      return;
    } else if (!this.endDate.value) {
      msg = "Please select End Date";
      this.auth.openConfirmDialog(msg, "error");
      return;
    }
    this._service.getSaveTalentManagerIntiate(this.intiateTalent).subscribe(
      (res) => {
        if (res) {
          this.sideNavLoader = false;
          let msg = res.msg ? res.msg : "Something went wrong";
          //this.auth.openConfirmDialog(msg, "error");
          this.intiateSucess = true;
          setTimeout(() => {
            this.getTalentSurveysData();
          },1000);
          setTimeout(() => {
            this.closeSidenav();
            this.intiateSucess = false;
          }, 2000);
        }
      },
      (err) => {
        console.log("HTTP Error", err);
      }
    );
  }

  getDueList(row) {
    this._service
      .getDueTalentSurveyEmployees({
        talentID: row.id,
      })
      .subscribe(
        (res) => {
          console.log(res);
          if (res && res.data) {
            this.dueEmpList = res.data;
            this.openDueSidenav();
          }
        },
        (err) => {
          console.log("HTTP Error", err);
        }
      );
  }

  onStatusChange(row) {
    let param = { talentID: row.id, status: row.status };
    this._service.getUpdateTalentSurveyStatus(param).subscribe(
      (res) => {
        //console.log(res);
        if (res) {
          this.auth.openConfirmDialog(res.msg, "error", "autoClose");
        }
      },
      (err) => {
        console.log("HTTP Error", err);
      }
    );
  }

  onReminder(row?) {
    if (row.status != "1") return;
    let msg = "Are you sure you want to send reminder";
    let cb = () => {
      this._service
        .getRemindTalentDueEmployees({
          talentID: row.id,
        })
        .subscribe(
          (res) => {
            if (res) {
              this.auth.openConfirmDialog(res.msg, "error", "autoClose");
            }
          },
          (err) => {
            console.log("HTTP Error", err);
          }
        );
    };
    this.auth.openConfirmDialog(msg, "reminder", "", cb);
  }

  onEdit(row) {
    if (row.status != "1") return;
    this.talentIntiateBtn = "UPDATE";
    this._service.getEditTalentSurveyById({ id: row.id }).subscribe(
      (res) => {
        console.log(res);
        if (res && res.data) {
          this.empList = res.data.empinfo;
          this.gradesList = _.cloneDeep(res.data.gradesInfo);
          const ids = res.data.gradesInfo.map((x) => x._id);
          const ref = _.cloneDeep(this.gradesInfoRef);
          ref.map((each) => {
            if (!ids.includes(each._id)) {
              this.gradesList.push(each);
            }
          });
          this.talentID = row.id;
          const list =  [];
          res.data.gradesInfo.map((each) => {
            const obj = _.find(this.gradesList, ["_id", each._id]);
            if (obj) {
              list.push(obj);
            }
          });
          this.disableSelectAll = this.gradesList.every((x) => x["select"]);
          if (this.disableSelectAll) {
            list.push(0);
          }
          this.grades.setValue(list);
          this.startDate.setValue(res.data.startsurvey);
          this.endDate.setValue(res.data.endsurvey);
          this.openUserSidenav();
        }
      },
      (err) => {
        console.log("HTTP Error", err);
      }
    );
  }
  // getShortName(str){
  //   return str.split('').map(n => n[0].join(''));
  // }
  openUserSidenav(create?) {
    this.sidenav.open();
    if (create == true) {
      this.talentID = "";
      this.gradesList = _.cloneDeep(this.gradesInfoRef);
      this.disableSelectAll = false;
    }
  }
  closeSidenav() {
    this.empList = [];
    this.startDate.setValue(null);
    this.endDate.setValue(null);
    this.grades.setValue(null);
    this.checkActiveTm = "";
    this.sidenav.close();
  }
  openDueSidenav() {
    this.dueSidenav.open();
  }
  closeDueSidenav() {
    this.dueSidenav.close();
  }

  pageChange() {
    // this.dataSource.data = this.totalData.slice(
    //   this.pageDetails.page * this.pageDetails.pageSize - this.pageDetails.pageSize,
    //   this.pageDetails.page * this.pageDetails.pageSize
    // );
    this.getTalentSurveysData();
  }

  pageItemsChange() {
    this.pageDetails.page = 1;
    this.getTalentSurveysData();
  }

  checkDisable(value) {
    if (this.gradesList.length) {
      const obj = _.find(this.gradesList, ["_id", value]);
      return obj && obj["select"];
    }
    return false;
  }

  StartNewTalent() {
    this._service
      .getCheckActiveStatusReviews({ status: "1" })
      .subscribe((res) => {
        console.log(res, "check active api res");
        if (res && res.success) {
          this.checkActiveTm = "";
          this.openUserSidenav(true);
        } else {
          this.checkActiveTm = res.msg;
          this.openUserSidenav(true);
          setTimeout(() => {
            this.closeSidenav();

          }, 3000);
          // this.auth.openConfirmDialog(res.msg, "error", "autoClose");
        }
      });
  }
  getDisplayName() {
    const list = [];
    if (this.grades.value) {
      this.grades.value.map((each) => {
        if (typeof each == "object") {
          list.push(each.gradeName);
        }
      });
    }
    return list.toString();
  }
}
