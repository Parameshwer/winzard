import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Chart } from "chart.js";
import { InsightsService } from "../insights.service";
import * as _ from "lodash";
import { Observable } from "rxjs";
import { FormControl } from "@angular/forms";
import { startWith, map } from "rxjs/operators";
import { ExcelService } from "../../shared/services/excel.service";
import { AuthService } from 'src/app/authentication/auth.service';
@Component({
  selector: "app-talent-insights",
  templateUrl: "./talent-insights.component.html",
  styleUrls: ["./talent-insights.component.scss"],
})
export class TalentInsightsComponent implements OnInit {
  details: any;
  tabsList = [
    {
      name: "Unit",
      path: "unit",
    },
    {
      name: "Org",
      path: "org",
    },
  ];
  noInsights = true;
  salesChartRef: any;
  salesChartOtions: any = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [50, 50],
          backgroundColor: ["#B58A8A", "#6BC462"],
        },
      ],
      labels: ["Yes", "No"],
    },
    options: {
      cutoutPercentage: 50,
    },
  };
  jobChartOtions: any = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [50, 50],
          backgroundColor: ["#B58A8A", "#6BC462"],
        },
      ],
      labels: ["Yes", "No"],
    },
    options: {
      cutoutPercentage: 50,
    },
  };
  jobChartRef: any;
  jobList = new Array(6);
  selectedFilter: any = { id: "gender", label: "Gender", key: "label" };
  filterList = [
    { id: "gender", label: "Gender", key: "label" },
    { id: "location", label: "Location", key: "locationName" },
    { id: "grade", label: "Grades", key: "gradeName" },
    { id: "ageonnetwork", label: "Age on Network", key: "ageNo" },
    { id: "unit", label: "Units / Functions", key: "unitName" },
  ];
  rightFilterList = {
    genderList: [
      {
        label: "Male",
        _id: "M",
      },
      {
        label: "Female",
        _id: "F",
      },
      {
        label: "Others",
        _id: "O",
      },
    ],
    locationList: [],
    unitList: [],
    gradeList: [],
    ageonnetworkList: [],
  };
  selectedDevNeeds: any;
  datesList: any = [];
  talentId: any;
  filterForm = {
    gender: [],
    location: [],
    grade: [],
    unit: [],
    ageonnetwork: [],
    searchby: null,
    filterby: "org",
    directby: false,
  };
  autoCompleteList = [];
  myControl = new FormControl();
  filteredOptions: Observable<any[]>;
  editable = false;
  sheetData: any = [
    {
      eid: "e101",
      ename: "ravi",
      esal: 1000,
    },
    {
      eid: "e102",
      ename: "ram",
      esal: 2000,
    },
    {
      eid: "e103",
      ename: "rajesh",
      esal: 3000,
    },
  ];
  detailRef: any;
  constructor(
    private excelService: ExcelService,
    private service: InsightsService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.getTalentDates();
  }

  drop(event: CdkDragDrop<string[]>, isPerformance?) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    if (isPerformance) {
      this.calcalutePercentage("performanceList");
    } else {
      this.calcalutePercentage("impactList");
    }
  }
  onleftFilterSelect(each) {
    this.selectedFilter = each;
    const key = each.id + "List";
    let type = _.cloneDeep(each.id);
    if (each.id == "grade") {
      type = "grades";
    } else if (each.id == "unit") {
      type = "units";
    }
    if (each.id != "gender" && this.rightFilterList[key].length == 0) {
      this.service.getValueTypes({ type: type }).subscribe((resp) => {
        this.rightFilterList[key] = resp.data;
      });
    }
  }

  onDevSelect(each) {
    this.selectedDevNeeds = each;
  }

  getTalentDates() {
    this.service.getTalentDates().subscribe((resp) => {
      this.datesList = resp.data;
      if (this.datesList.length) {
        this.noInsights = false;
        this.talentId = this.datesList[0]._id;
        this.search();
      } else {
        this.noInsights = true;
      }
    });

    this.service.getValueTypes({ type: "emps" }).subscribe((resp) => {
      this.autoCompleteList = resp.data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(""),
        map((value) => this._filter(value))
      );
    });
  }

  search() {
    console.log(this.filterForm);

    const params = {
      talentID: this.talentId,
      // talentID: "5ebf75480f0f3c221fc41fdf",
      filter: this.filterForm,
    };
    // console.log(this.myControl);
    this.service.getInsightsData(params).subscribe((resp) => {
      this.modifyData(resp.data, 'performanceList');
      this.modifyData(resp.data, 'impactList');
      this.details = resp.data;
      this.detailRef = _.cloneDeep(resp.data);
      this.selectedDevNeeds = this.details.developmentNeeds[0];
      this.updateCharts();
    });
  }

  updateCharts() {
    let saleCtx = document.getElementById("dNeedsChart");
    const devData = this.details.developmentNeedsChart.map(
      (data) => data.percentage
    );
    this.salesChartOtions.data.datasets[0].data = devData;
    this.salesChartRef = new Chart(saleCtx, this.salesChartOtions);

    const jobCtx = document.getElementById("jobChart");
    const jobData = this.details.jobFitmentChart.map((data) => data.percentage);
    this.jobChartOtions.data.datasets[0].data = jobData;
    this.jobChartRef = new Chart(jobCtx, this.jobChartOtions);
  }

  clearFilters() {
    this.filterForm = {
      gender: [],
      location: [],
      grade: [],
      unit: [],
      ageonnetwork: [],
      searchby: null,
      filterby: "org",
      directby: false,
    };
  }

  onTabsChnage(tab) {
    this.filterForm.filterby = tab.path;
    this.search();
  }

  onFilterSelectionChanged(event, each, selectedFilter) {
    if (event.checked) {
      if (!this.filterForm[selectedFilter.id].includes(each._id)) {
        this.filterForm[selectedFilter.id].push(each._id);
      }
    } else {
      if (this.filterForm[selectedFilter.id].includes(each._id)) {
        const index = this.filterForm[selectedFilter.id].indexOf(each._id);
        this.filterForm[selectedFilter.id].splice(index, 1);
      }
    }
  }

  resetFilters() {
    this.filterForm = {
      ...this.filterForm,
      gender: [],
      location: [],
      grade: [],
      unit: [],
      ageonnetwork: [],
    };
  }

  optionSelected(event) {
    // console.log(event, 'test');
    this.filterForm.searchby = event.option.value;
  }
  private _filter(value: string): string[] {
    if (typeof value == "string") {
      const filterValue = value.toLowerCase();
      return this.autoCompleteList.filter(
        (option) => option.fullname.toLowerCase().indexOf(filterValue) === 0
      );
    } else {
      return [];
    }
  }

  displayFn(user: any): string {
    return user && user.fullname ? user.fullname : "";
  }

  exportSummary() {
    const resultArray = this.mergeExcelData();
    const headers = {
      potentialEnhancement:"Potential enhancement",
      performanceEnhancement: "Performance enhancement" ,
      carrerProgression: "Carrer Progression" ,
      pip:"PIP",
      jobFitment: "Job Fitment" ,
      learningReward:"Rewards",
      retentionPlan:"Retention Plan",
      successionPlan:"Succession Plan",
      questionablePosition:"Questionable Position"
  };
    this.excelService.exportAsExcelFile(resultArray, headers,"sample");
  }

  calcalutePercentage(key) {
    let count = 0;
    this.details[key].map((each) => {
      each.list.map((item) => {
        count = count + item.data.length;
      });
    });
    this.details[key].map((each) => {
      each.list.map((item) => {
        item.percentage = Math.round((item.data.length / count) * 100);
      });
    });
  }

  makeEditable() {
    this.editable = !this.editable;
  }

  modifyData(data, key) {
    if (data[key] && data[key].length) {
      data[key].map(each => {
        each.list.map(item => {
          item['data'] = [];
          item.list.map((row, index) => {
            item['data'].push({
              name: row,
              ansId: item.ansIds ? item.ansIds[index] : 0,
              empId: item.empIds ? item.empIds[index] : 0
            });
          });
        })
      });
    }
  }
  saveEditable() {
    this.editable = false;
    const params = {
      talentID: this.talentId,
      answer: this.getSaveData()
    }
    this.service.saveInsights(params).subscribe(resp => {
      if (resp && resp.success) {
        this.search();
        this.auth.openConfirmDialog('Submitted Successfully', "error", "autoClose");
      }
    });
  }

  getSaveData() {
    const data = [];
    this.details.performanceList.map(each => {
      each.list.map(items => {
        items.data.map(row => {
          data.push({
            "answerID": row.ansId,
            "answer": each.label == 'High' ? 3 : each.label == 'Medium' ? 2 : 1,
            "empId": row.empId
          });
        });
      });
    });
    this.details.impactList.map(each => {
      each.list.map(items => {
        items.data.map(row => {
          data.push({
            "answerID": row.ansId,
            "answer": each.label == 'High' ? 3 : each.label == 'Medium' ? 2 : 1,
            "empId": row.empId
          });
        });
      });
    });
    return data;
  }

  mergeExcelData() {
    const result = this.details.potentialEnhancement.map(res => ({ potentialEnhancement: res['name'] }));
    this.mergeData('performanceEnhancement', result);
    this.mergeData('carrerProgression', result);
    this.mergeData('pip', result);
    this.mergeData('jobFitment', result);
    this.mergeData('learningReward', result);
    this.mergeData('retentionPlan', result);
    this.mergeData('successionPlan', result);
    this.mergeData('questionablePosition', result);
    return result;
  }

  mergeData(key, result){
    this.details[key].map((res, index) => {
      if (result[index] === undefined) {
        result[index] = { [key]: res['name'] };
      } else {
        result[index] = {...result[index], [key]: res['name'] };
      }
    });
  }

  saveSearch(){
    this.search();
  }
  resetSearch(){
    this.myControl.reset();
    this.search();
  }
}
