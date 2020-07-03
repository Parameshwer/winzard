import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { FlowDirective, Transfer } from '@flowjs/ngx-flow';
import { Subscription } from 'rxjs';
import * as XLSX from 'xlsx';
import * as _ from "lodash";
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-upload-users',
  templateUrl: './upload-users.component.html',
  styleUrls: ['./upload-users.component.scss']
})
export class UploadUsersComponent implements OnInit {

  @ViewChild('flow', { static: false }) flow: FlowDirective;
  public employeesData = [];
  @Input() from: string;

  constructor(
    private _service: AuthService
  ) { }

  ngOnInit() {
  }
  autoUploadSubscription: Subscription;


  onFileChange(ev) {
    console.log(ev);
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev;
    reader.onload = (event) => {
      let workBook = XLSX.read(reader.result, { type: 'binary' });
      let jsonPagesArray = [];
      workBook.SheetNames.forEach(function (sheet) {
        jsonPagesArray.push(JSON.parse(JSON.stringify(XLSX.utils.sheet_to_json(workBook.Sheets[sheet], { defval: "" }))));
      });
      this.buildEmployeeData(jsonPagesArray[0]);
    }
    reader.readAsBinaryString(file);
  }
  buildEmployeeData(data) {
    let tempObj = Object.values(data);
    let xlKeys = Object.values(tempObj[0]);
    _.map(tempObj, (emp, index) => {
      if(index > 0) {
        let tempEmp = {};
        _.map(Object.values(emp), (em, emIndex) => {
          tempEmp[xlKeys[emIndex]] = em;
        })
        this.employeesData.push(tempEmp);
      }
    });
    this.uploadFiles();
    console.log(this.employeesData);
  }
  uploadFiles() {
    this._service.importEmployees({isFirstUpload: true, employees: this.employeesData}).subscribe(res => {
      console.log(res);
    });
  }
  downloadSampleFile() {
    window.open('../../../images/emp_template.xlsx');
  }
  ngAfterViewInit() {
    this.autoUploadSubscription = this.flow.events$.subscribe(event => {
      console.log(event);
      if (event.type === 'filesSubmitted') {
        this.flow.upload();
        console.log(event.event[0][0].file);
        this.onFileChange(event.event[0][0].file);
      }
    });
  }

  ngOnDestroy() {
    this.autoUploadSubscription.unsubscribe();
  }

}
