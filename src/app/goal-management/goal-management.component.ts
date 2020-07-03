import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { AuthService } from "src/app/authentication/auth.service";
import { Router } from "@angular/router";
import { TalentReviewService } from '../talent-review-questionnaire/talent-review.service';
import { AddGoalDialogComponent } from './add-goal-dialog/add-goal-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-goal-management',
  templateUrl: './goal-management.component.html',
  styleUrls: ['./goal-management.component.scss']
})
export class GoalManagementComponent implements OnInit {

  userListLoaded: boolean = false;
  loader: boolean = true;
  usersList = [];
  selectedRow: any;
  selectedIndex: number;
  questionSections = {
    performance: [],
    attrition: [],
    developmentNeeds: [],
    jobFitment: [],
    strengths: [],
    weaknesses: [],
  };
  formSubmmitted = false;
  diableEditable = false;
  formGroup: FormGroup;
 
  allowRedirection: boolean = false;
  constructor(
    private auth: AuthService,
    private service: TalentReviewService,
    private router: Router,
    private dialog:MatDialog
  ) { }

  ngOnInit() {
     this.getQuestionsBasedonUser();
      this.loader = false;
  }

  getQuestionsBasedonUser() {
    this.service.getQuestionsBasedonUser().subscribe(
      (res) => {
        console.log(res);
        this.userListLoaded = true;
        if (res && res.success && res.data) {
          this.usersList = res.data;
          this.createForm(this.usersList[0]);
          this.onSelect(this.usersList[0], 0);
          this.loader = false;
        }
      },
      (err) => {
        console.log("HTTP Error", err);
      }
    );
  }
  createForm(row) {
    this.formGroup = new FormGroup({
      developNeedsDesc: new FormControl(null, []),
      jobFitmentDesc: new FormControl(null, []),
      developFitmentDropdown: new FormControl(null, []),
    });
    row.questions.map((each) => {
      if (["Strengths", "Weaknesses"].includes(each.category)) {
        this.formGroup.addControl(
          each["_id"],
          new FormBuilder().array([
            new FormControl(null, []),
            new FormControl(null, []),
            new FormControl(null, []),
          ])
        );
      } else {
        this.formGroup.addControl(
          each["_id"],
          new FormControl(null, [Validators.required])
        );
      }
    });
  }
  onSelect(row, index) {
    //this.formGroup.reset()
    this.selectedRow = row;
    this.selectedIndex = index;
    this.formSubmmitted = false;
    this.diableEditable = false;
    this.questionSections = {
      performance: [],
      attrition: [],
      developmentNeeds: [],
      jobFitment: [],
      strengths: [],
      weaknesses: [],
    };
    this.formGroup.reset();
    if (this.selectedRow && this.selectedRow.questions) {
      this.selectedRow.questions.map((each) => {
        if (each.value && !["Strengths", "Weaknesses"].includes(each.category)) {
          this.diableEditable = true;
          this.formGroup.patchValue({
            [each["_id"]]: each.value,
          });
        }
        if (each.category == "Potential" || each.category == "Performance") {
          this.questionSections.performance.push(each);
        }
        if (
          each.category == "Probability of attrition" ||
          each.category == "Impact of Attrition"
        ) {
          this.questionSections.attrition.push(each);
        }
        if (each.category == "Development Needs") {
          this.onDevelopValueChange({ value: each.value });
          this.questionSections.developmentNeeds.push(each);
          if (each.description) {
            const li = each.description.split(",");
            // if(li.length ==2)
            this.formGroup.patchValue({
              developNeedsDesc: li[0],
              developFitmentDropdown: li[1],
            });
          }
        }
        if (each.category == "Job Fitment") {
          this.onJobValueChange({ value: each.value });
          this.questionSections.jobFitment.push(each);
          if (each.description) {
            this.formGroup.patchValue({
              jobFitmentDesc: each.description,
            });
          }
        }
        if (each.category == "Strengths") {
          this.questionSections.strengths.push(each);
          if (each.description) {
            const li = each.description.split(",");
            if (li.length == 1) {
              li.push("");
              li.push("");
            } else if (li.length == 2) {
              li.push("");
            }
            this.formGroup.patchValue({
              [each["_id"]]: li,
            });
          }
        }
        if (each.category == "Weaknesses") {
          this.questionSections.weaknesses.push(each);
          if (each.description) {
            const li = each.description.split(",");
            if (li.length == 1) {
              li.push("");
              li.push("");
            } else if (li.length == 2) {
              li.push("");
            }
            this.formGroup.patchValue({
              [each["_id"]]: li,
            });
          }
        }
      });
    }

    // if (index + 1 == this.usersList.length) {
    //   this.checkRedirection();
    // }
  }

  onFormSubmit() {
    console.log(this.formGroup);
    this.formSubmmitted = true;
    if (this.formGroup.valid) {
      const params = {
        userId: this.selectedRow.user_id,
        talentID: this.selectedRow.talentId,
        talentEmpId: this.selectedRow._id,
        answers: [],
      };
      this.selectedRow.questions.map((each) => {
        if (each.category == "Development Needs") {
          params.answers.push({
            answerId: each["answerId"],
            qid: each["_id"],
            answer: this.formGroup.value[each["_id"]],
            desc:
              this.formGroup.value[each["_id"]] == "1"
                ? [
                  this.formGroup.value.developNeedsDesc,
                  this.formGroup.value.developFitmentDropdown,
                ]
                : [],
          });
        } else if (each.category == "Job Fitment") {
          params.answers.push({
            answerId: each["answerId"],
            qid: each["_id"],
            answer: this.formGroup.value[each["_id"]],
            desc:
              this.formGroup.value[each["_id"]] == "1"
                ? [this.formGroup.value.jobFitmentDesc]
                : [],
          });
        } else if (["Strengths", "Weaknesses"].includes(each.category)) {
          params.answers.push({
            answerId: each["answerId"],
            qid: each["_id"],
            answer: "1",
            desc: this.formGroup.value[each["_id"]],
          });
        } else {
          params.answers.push({
            answerId: each["answerId"],
            qid: each["_id"],
            answer: this.formGroup.value[each["_id"]],
            desc: [],
          });
        }
      });

      this.service.saveQuestionsBasedonUser(params).subscribe(
        (res) => {
          console.log(res);
          if (res && res.data) {
            let msg = "Sucessfully submitted";
            this.auth.openConfirmDialog(msg, "error", "autoClose");
            this.usersList = res.data;
            if (this.allowRedirection || this.selectedIndex + 1 == this.usersList.length) {
              this.checkRedirection()
            } else {
              this.onSelect(
                this.usersList[this.selectedIndex + 1],
                this.selectedIndex + 1
              );
            }
            this.loader = false;
          }
        },
        (err) => {
          console.log("HTTP Error", err);
        }
      );
    } else {
      let msg = "Please enter all mandatory fields";
      this.auth.openConfirmDialog(msg, "error", "autoClose");
    }
  }

  onJobValueChange(ev) {
    if (ev.value == "1") {
      this.formGroup.get("jobFitmentDesc").clearValidators();
      this.formGroup.get("jobFitmentDesc").updateValueAndValidity();
      this.formGroup.get("jobFitmentDesc").setValue('');
      this.formGroup.get("jobFitmentDesc").setValue('');
    } else {
      this.formGroup.get("jobFitmentDesc").setValidators([Validators.required]);

      this.formGroup.get("jobFitmentDesc").updateValueAndValidity();
    }
  }
  onDevelopValueChange(ev) {
    if (ev.value == "2") {
      this.formGroup.get("developNeedsDesc").clearValidators();
      this.formGroup.get("developNeedsDesc").updateValueAndValidity();
      this.formGroup.get("developFitmentDropdown").clearValidators();
      this.formGroup.get("developFitmentDropdown").updateValueAndValidity();
      this.formGroup.get("developNeedsDesc").setValue('');
      this.formGroup.get("developFitmentDropdown").setValue('');
    } else {
      this.formGroup
        .get("developNeedsDesc")
        .setValidators([Validators.required]);
      this.formGroup.get("developNeedsDesc").updateValueAndValidity();
      this.formGroup
        .get("developFitmentDropdown")
        .setValidators([Validators.required]);
      this.formGroup.get("developFitmentDropdown").updateValueAndValidity();
    }
  }

  makeEditable() {
    this.diableEditable = false;
  }

  checkRedirection() {
    // this.allowRedirection
    let allUsersFillted = this.usersList.every(
      (each) => each.questions[0]["value"] != undefined
    );
    if (allUsersFillted) {
      console.log('all empolyee reviews are done')
    }
  }

  addGoal(): void {
    const dialogRef = this.dialog.open(AddGoalDialogComponent, {
      width: "900px",
      panelClass: "square-dialog",
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
       
      }
    });
  }

}
