import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material';
import { AddEmployeeComponent } from '../../dialogs/add-employee/add-employee.component';


@Component({
  selector: 'app-org-win',
  templateUrl: './org-win.component.html',
  styleUrls: ['./org-win.component.scss']
})
export class OrgWinComponent implements OnInit {

  private gridApi;
  private gridColumnApi;

  public modules;
  private columnDefs;
  private defaultColDef;
  private rowSelection;
  public rowData= [];

  constructor(private http: HttpClient,private dialog:MatDialog) {
    this.columnDefs = [
      {
        headerName: 'EMP Id',
        field: 'empId',
        minWidth: 90,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
        checkboxSelection: true,
        resizable: false
      },
      {
        headerName: 'Name', 
        field: 'fullname',
        resizable: false
      },
      {
        headerName: 'Date of Joining', 
        field: 'dateofjoining',
        minWidth: 160,
        resizable: false,
        cellRenderer: (params) => {
          return moment(params.data.dateofjoining).format("DD/MMM/YYYY");
        }
      },
      {
        headerName: 'Email', 
        field: 'email' ,
        minWidth: 220,
        resizable: false
      },
      {
        headerName: 'DoB', 
        field: 'dob',
        resizable: false,
        cellRenderer: (params) => {
          return moment(params.data.dob).format("DD/MMM/YYYY");
        }
      },
      {
        headerName: 'Access', 
        field: 'subunit',
        resizable: false
      },
      {
        headerName: 'Reporting to', 
        field: 'designation',
        resizable: false
      },
      {
        headerName: 'Actions', 
        cellRenderer: (params) => {
          return '<span class="edit-ag-row"></span>';
        }

      }
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
      resizable: true,
    };
    this.rowSelection = 'multiple';
  }
  ngOnInit(){

  }

  addGoal(): void {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      width: "430px",
      panelClass: ["add-employee-dialog", "animation-from-right"],
      autoFocus: false,
      height: "100vh"

    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
       
      }
    });
  }
  onQuickFilterChanged() {
    //this.gridApi.setQuickFilter(document.getElementById('quickFilter').value);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    
    let temp = {"success":true,"code":5,"data":{"Employees":[{"_id":"5ef850b550664068d2187603","fullname":"Sandeep Pandey","email":"asquaretech19+1@gmail.com","empId":"100","phone":"9100987077","status":true,"dob":"1978-03-03T00:08:50.000","gender":"M","reportingTo":"5ef850b550664068d2187602","unit":"5ef850b450664068d21875fa","unithead":"Yes","subunit":"Operations","subunit2":"Yes","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d2187600","designation":"CEO","OrgId":"5ef8500150664068d21875f5","role":"1","branch":"RO","location":"5ef850b450664068d21875fb","superadminaccess":false,"otp":"CcLpV4w5","locationobja":{"_id":"5ef850b450664068d21875fb","locationName":"Hyderabad","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"gradeinfo":{"_id":"5ef850b450664068d2187600","gradeName":"A","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"unitinfo":{"_id":"5ef850b450664068d21875fa","unitName":"Operations","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"reportinginfo":{"_id":"5ef850b550664068d2187602","fullname":"Head of Company"}},{"_id":"5ef84fab50664068d21875f4","email":"asquaretech19@gmail.com","otp":"j6kr3i","role":"1","otpverify":true,"onboard":true,"status":true,"empId":"101","__v":0,"firstpassword":false,"fullname":"AS Tech","OrgId":"5ef8500150664068d21875f5","branch":"RO","dateofjoining":"2015-08-03T00:08:50.000Z","designation":"HR Manager","dob":"1978-03-03T00:08:50.000","gender":"M","grade":"5ef850b450664068d2187600","location":"5ef850b450664068d21875fb","phone":"9100987075","subunit":"Operations","subunit2":"No","superadminaccess":true,"team":null,"unit":"5ef850b450664068d21875fa","unithead":"No","reportingTo":"5ef850b550664068d2187603","locationobja":{"_id":"5ef850b450664068d21875fb","locationName":"Hyderabad","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"gradeinfo":{"_id":"5ef850b450664068d2187600","gradeName":"A","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"unitinfo":{"_id":"5ef850b450664068d21875fa","unitName":"Operations","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"reportinginfo":{"_id":"5ef850b550664068d2187603","fullname":"Sandeep Pandey","email":"asquaretech19+1@gmail.com","empId":"100","password":"$2a$10$hnMHiPFZSKY0qefOwLSuye.ojq5AqI7JOicJhtMYc5mtefoa2zmH2","phone":"9100987077","status":true,"dob":"1978-03-03T00:08:50.000","gender":"M","reportingTo":"5ef850b550664068d2187602","unit":"5ef850b450664068d21875fa","unithead":"Yes","subunit":"Operations","subunit2":"Yes","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d2187600","designation":"CEO","OrgId":"5ef8500150664068d21875f5","role":"1","branch":"RO","location":"5ef850b450664068d21875fb","superadminaccess":false,"otp":"CcLpV4w5","firstpassword":true,"__v":0}},{"_id":"5ef850b750664068d2187604","fullname":"Sunil Varma ","email":"asquaretech19+2@gmail.com","empId":"102","phone":"9100987076","status":true,"dob":"1978-03-03T00:08:50.000","gender":"M","reportingTo":"5ef850b550664068d2187603","unit":"5ef850b450664068d21875fa","unithead":"No","subunit":"Operations","subunit2":"No","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d2187600","designation":"Manager","OrgId":"5ef8500150664068d21875f5","role":"2","branch":"RO","location":"5ef850b450664068d21875fb","superadminaccess":false,"otp":"4qoio3","firstpassword":true,"__v":0,"reqForgot":true,"locationobja":{"_id":"5ef850b450664068d21875fb","locationName":"Hyderabad","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"gradeinfo":{"_id":"5ef850b450664068d2187600","gradeName":"A","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"unitinfo":{"_id":"5ef850b450664068d21875fa","unitName":"Operations","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"reportinginfo":{"_id":"5ef850b550664068d2187603","fullname":"Sandeep Pandey","email":"asquaretech19+1@gmail.com","empId":"100","password":"$2a$10$hnMHiPFZSKY0qefOwLSuye.ojq5AqI7JOicJhtMYc5mtefoa2zmH2","phone":"9100987077","status":true,"dob":"1978-03-03T00:08:50.000","gender":"M","reportingTo":"5ef850b550664068d2187602","unit":"5ef850b450664068d21875fa","unithead":"Yes","subunit":"Operations","subunit2":"Yes","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d2187600","designation":"CEO","OrgId":"5ef8500150664068d21875f5","role":"1","branch":"RO","location":"5ef850b450664068d21875fb","superadminaccess":false,"otp":"CcLpV4w5","firstpassword":true,"__v":0}},{"_id":"5ef850b850664068d2187605","fullname":"Sushma","email":"asquaretech19+3@gmail.com","empId":"103","phone":"9100987078","status":true,"dob":"1978-03-03T00:08:50.000","gender":"F","reportingTo":"5ef84fab50664068d21875f4","unit":"5ef850b450664068d21875f8","unithead":"Yes","subunit":"SALES","subunit2":"Yes","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d2187600","designation":"UNIT HEAD","OrgId":"5ef8500150664068d21875f5","role":"2","branch":"RO","location":"5ef850b450664068d21875fb","superadminaccess":false,"otp":"bL9rAAWU","firstpassword":true,"__v":0,"locationobja":{"_id":"5ef850b450664068d21875fb","locationName":"Hyderabad","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"gradeinfo":{"_id":"5ef850b450664068d2187600","gradeName":"A","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"unitinfo":{"_id":"5ef850b450664068d21875f8","unitName":"SALES","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"reportinginfo":{"_id":"5ef84fab50664068d21875f4","email":"asquaretech19@gmail.com","otp":"j6kr3i","role":"1","otpverify":true,"onboard":true,"status":true,"empId":"101","__v":0,"firstpassword":false,"fullname":"AS Tech","password":"$2a$10$3d8VYlB2myHAbKQrRTjap.pcCush6RocALaFUD8Y.Tgs3cl5ykAS.","OrgId":"5ef8500150664068d21875f5","branch":"RO","dateofjoining":"2015-08-03T00:08:50.000Z","designation":"HR Manager","dob":"1978-03-03T00:08:50.000","gender":"M","grade":"5ef850b450664068d2187600","location":"5ef850b450664068d21875fb","phone":"9100987075","subunit":"Operations","subunit2":"No","superadminaccess":true,"team":null,"unit":"5ef850b450664068d21875fa","unithead":"No","reportingTo":"5ef850b550664068d2187603"}},{"_id":"5ef850b950664068d2187606","fullname":"Karteek M","email":"asquaretech19+4@gmail.com","empId":"104","phone":"9100987079","status":true,"dob":"1978-03-03T00:08:50.000","gender":"M","reportingTo":"5ef84fab50664068d21875f4","unit":"5ef850b450664068d21875fc","unithead":"Yes","subunit":"TECH","subunit2":"Yes","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d2187600","designation":"UNIT HEAD","OrgId":"5ef8500150664068d21875f5","role":"2","branch":"RO","location":"5ef850b450664068d21875fd","superadminaccess":false,"otp":"3ER7Uvpy","firstpassword":true,"__v":0,"locationobja":{"_id":"5ef850b450664068d21875fd","locationName":"Bangalore","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"gradeinfo":{"_id":"5ef850b450664068d2187600","gradeName":"A","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"unitinfo":{"_id":"5ef850b450664068d21875fc","unitName":"TECH","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"reportinginfo":{"_id":"5ef84fab50664068d21875f4","email":"asquaretech19@gmail.com","otp":"j6kr3i","role":"1","otpverify":true,"onboard":true,"status":true,"empId":"101","__v":0,"firstpassword":false,"fullname":"AS Tech","password":"$2a$10$3d8VYlB2myHAbKQrRTjap.pcCush6RocALaFUD8Y.Tgs3cl5ykAS.","OrgId":"5ef8500150664068d21875f5","branch":"RO","dateofjoining":"2015-08-03T00:08:50.000Z","designation":"HR Manager","dob":"1978-03-03T00:08:50.000","gender":"M","grade":"5ef850b450664068d2187600","location":"5ef850b450664068d21875fb","phone":"9100987075","subunit":"Operations","subunit2":"No","superadminaccess":true,"team":null,"unit":"5ef850b450664068d21875fa","unithead":"No","reportingTo":"5ef850b550664068d2187603"}},{"_id":"5ef850bb50664068d2187607","fullname":"Naga Ashwini","email":"asquaretech19+5@gmail.com","empId":"105","phone":"9100987080","status":true,"dob":"1978-03-03T00:08:50.000","gender":"F","reportingTo":"5ef850b850664068d2187605","unit":"5ef850b450664068d21875fa","unithead":"Yes","subunit":"Operations","subunit2":"Yes","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d2187600","designation":"UNIT HEAD","OrgId":"5ef8500150664068d21875f5","role":"2","branch":"RO","location":"5ef850b450664068d21875f9","superadminaccess":false,"otp":"iua1l975","firstpassword":true,"__v":0,"locationobja":{"_id":"5ef850b450664068d21875f9","locationName":"Chennai","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"gradeinfo":{"_id":"5ef850b450664068d2187600","gradeName":"A","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"unitinfo":{"_id":"5ef850b450664068d21875fa","unitName":"Operations","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"reportinginfo":{"_id":"5ef850b850664068d2187605","fullname":"Sushma","email":"asquaretech19+3@gmail.com","empId":"103","password":"$2a$10$i6bqPtfjFMtaUWpchHiExugShCOTiqtxmY.fLTmyp/MHcHIQbTls6","phone":"9100987078","status":true,"dob":"1978-03-03T00:08:50.000","gender":"F","reportingTo":"5ef84fab50664068d21875f4","unit":"5ef850b450664068d21875f8","unithead":"Yes","subunit":"SALES","subunit2":"Yes","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d2187600","designation":"UNIT HEAD","OrgId":"5ef8500150664068d21875f5","role":"2","branch":"RO","location":"5ef850b450664068d21875fb","superadminaccess":false,"otp":"bL9rAAWU","firstpassword":true,"__v":0}},{"_id":"5ef850bc50664068d2187608","fullname":"Sandeep Vanga","email":"asquaretech19+6@gmail.com","empId":"106","phone":"9100987081","status":true,"dob":"1978-03-03T00:08:50.000","gender":"M","reportingTo":"5ef84fab50664068d21875f4","unit":"5ef850b450664068d2187601","unithead":"Yes","subunit":"PRODUCTION","subunit2":"Yes","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d2187600","designation":"UNIT HEAD","OrgId":"5ef8500150664068d21875f5","role":"3","branch":"RO","location":"5ef850b450664068d21875ff","superadminaccess":false,"otp":"Q7V1jRr2","firstpassword":true,"__v":0,"locationobja":{"_id":"5ef850b450664068d21875ff","locationName":"Delhi","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"gradeinfo":{"_id":"5ef850b450664068d2187600","gradeName":"A","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"unitinfo":{"_id":"5ef850b450664068d2187601","unitName":"PRODUCTION","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"reportinginfo":{"_id":"5ef84fab50664068d21875f4","email":"asquaretech19@gmail.com","otp":"j6kr3i","role":"1","otpverify":true,"onboard":true,"status":true,"empId":"101","__v":0,"firstpassword":false,"fullname":"AS Tech","password":"$2a$10$3d8VYlB2myHAbKQrRTjap.pcCush6RocALaFUD8Y.Tgs3cl5ykAS.","OrgId":"5ef8500150664068d21875f5","branch":"RO","dateofjoining":"2015-08-03T00:08:50.000Z","designation":"HR Manager","dob":"1978-03-03T00:08:50.000","gender":"M","grade":"5ef850b450664068d2187600","location":"5ef850b450664068d21875fb","phone":"9100987075","subunit":"Operations","subunit2":"No","superadminaccess":true,"team":null,"unit":"5ef850b450664068d21875fa","unithead":"No","reportingTo":"5ef850b550664068d2187603"}},{"_id":"5ef850bd50664068d2187609","fullname":"Rajamouli","email":"asquaretech19+7@gmail.com","empId":"107","phone":"9100987082","status":true,"dob":"1978-03-03T00:08:50.000","gender":"M","reportingTo":"5ef850b850664068d2187605","unit":"5ef850b450664068d21875f8","unithead":"No","subunit":"SALES","subunit2":"No","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d21875fe","designation":"SALES_SUB_1","OrgId":"5ef8500150664068d21875f5","role":"3","branch":"RO","location":"5ef850b450664068d21875fb","superadminaccess":false,"otp":"UJqu7FEc","firstpassword":true,"__v":0,"locationobja":{"_id":"5ef850b450664068d21875fb","locationName":"Hyderabad","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"gradeinfo":{"_id":"5ef850b450664068d21875fe","gradeName":"B","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"unitinfo":{"_id":"5ef850b450664068d21875f8","unitName":"SALES","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"reportinginfo":{"_id":"5ef850b850664068d2187605","fullname":"Sushma","email":"asquaretech19+3@gmail.com","empId":"103","password":"$2a$10$i6bqPtfjFMtaUWpchHiExugShCOTiqtxmY.fLTmyp/MHcHIQbTls6","phone":"9100987078","status":true,"dob":"1978-03-03T00:08:50.000","gender":"F","reportingTo":"5ef84fab50664068d21875f4","unit":"5ef850b450664068d21875f8","unithead":"Yes","subunit":"SALES","subunit2":"Yes","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d2187600","designation":"UNIT HEAD","OrgId":"5ef8500150664068d21875f5","role":"2","branch":"RO","location":"5ef850b450664068d21875fb","superadminaccess":false,"otp":"bL9rAAWU","firstpassword":true,"__v":0}},{"_id":"5ef850be50664068d218760a","fullname":"Jemima","email":"asquaretech19+8@gmail.com","empId":"108","phone":"9100987083","status":true,"dob":"1978-03-03T00:08:50.000","gender":"F","reportingTo":"5ef850b950664068d2187606","unit":"5ef850b450664068d21875f8","unithead":"No","subunit":"SALES","subunit2":"No","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d21875fe","designation":"SALES_SUB_2","OrgId":"5ef8500150664068d21875f5","role":"3","branch":"RO","location":"5ef850b450664068d21875fb","superadminaccess":false,"otp":"5KNPt46V","firstpassword":true,"__v":0,"locationobja":{"_id":"5ef850b450664068d21875fb","locationName":"Hyderabad","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"gradeinfo":{"_id":"5ef850b450664068d21875fe","gradeName":"B","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"unitinfo":{"_id":"5ef850b450664068d21875f8","unitName":"SALES","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"reportinginfo":{"_id":"5ef850b950664068d2187606","fullname":"Karteek M","email":"asquaretech19+4@gmail.com","empId":"104","password":"$2a$10$3ua7FksuL7/iuHYNkyBWmO8KAk3vk51vOaUMr4AAjH.xKv.U8wwtG","phone":"9100987079","status":true,"dob":"1978-03-03T00:08:50.000","gender":"M","reportingTo":"5ef84fab50664068d21875f4","unit":"5ef850b450664068d21875fc","unithead":"Yes","subunit":"TECH","subunit2":"Yes","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d2187600","designation":"UNIT HEAD","OrgId":"5ef8500150664068d21875f5","role":"2","branch":"RO","location":"5ef850b450664068d21875fd","superadminaccess":false,"otp":"3ER7Uvpy","firstpassword":true,"__v":0}},{"_id":"5ef850bf50664068d218760b","fullname":"Nandini Jain","email":"asquaretech19+9@gmail.com","empId":"109","phone":"9100987084","status":true,"dob":"1978-03-03T00:08:50.000","gender":"F","reportingTo":"5ef850bb50664068d2187607","unit":"5ef850b450664068d21875f8","unithead":"No","subunit":"SALES","subunit2":"No","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d21875fe","designation":"SALES_SUB_2","OrgId":"5ef8500150664068d21875f5","role":"3","branch":"RO","location":"5ef850b450664068d21875fb","superadminaccess":false,"otp":"roBRE11i","firstpassword":true,"__v":0,"locationobja":{"_id":"5ef850b450664068d21875fb","locationName":"Hyderabad","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"gradeinfo":{"_id":"5ef850b450664068d21875fe","gradeName":"B","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"unitinfo":{"_id":"5ef850b450664068d21875f8","unitName":"SALES","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"reportinginfo":{"_id":"5ef850bb50664068d2187607","fullname":"Naga Ashwini","email":"asquaretech19+5@gmail.com","empId":"105","password":"$2a$10$zHcyCer0QhdmrV6fsiaJQODFyogirh3BOQfSHUDESUemEld7dO3l.","phone":"9100987080","status":true,"dob":"1978-03-03T00:08:50.000","gender":"F","reportingTo":"5ef850b850664068d2187605","unit":"5ef850b450664068d21875fa","unithead":"Yes","subunit":"Operations","subunit2":"Yes","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d2187600","designation":"UNIT HEAD","OrgId":"5ef8500150664068d21875f5","role":"2","branch":"RO","location":"5ef850b450664068d21875f9","superadminaccess":false,"otp":"iua1l975","firstpassword":true,"__v":0}},{"_id":"5ef850c050664068d218760c","fullname":"Jyothi Bala","email":"asquaretech19+10@gmail.com","empId":"110","phone":"9100987085","status":true,"dob":"1978-03-03T00:08:50.000","gender":"F","reportingTo":"5ef850bb50664068d2187607","unit":"5ef850b450664068d21875f8","unithead":"No","subunit":"SALES","subunit2":"No","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d21875fe","designation":"SALES_SUB_2","OrgId":"5ef8500150664068d21875f5","role":"3","branch":"RO","location":"5ef850b450664068d21875fb","superadminaccess":false,"otp":"a2FIn4vB","firstpassword":true,"__v":0,"locationobja":{"_id":"5ef850b450664068d21875fb","locationName":"Hyderabad","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"gradeinfo":{"_id":"5ef850b450664068d21875fe","gradeName":"B","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"unitinfo":{"_id":"5ef850b450664068d21875f8","unitName":"SALES","OrgId":"5ef8500150664068d21875f5","status":true,"__v":0},"reportinginfo":{"_id":"5ef850bb50664068d2187607","fullname":"Naga Ashwini","email":"asquaretech19+5@gmail.com","empId":"105","password":"$2a$10$zHcyCer0QhdmrV6fsiaJQODFyogirh3BOQfSHUDESUemEld7dO3l.","phone":"9100987080","status":true,"dob":"1978-03-03T00:08:50.000","gender":"F","reportingTo":"5ef850b850664068d2187605","unit":"5ef850b450664068d21875fa","unithead":"Yes","subunit":"Operations","subunit2":"Yes","dateofjoining":"2015-08-03T00:08:50.000Z","grade":"5ef850b450664068d2187600","designation":"UNIT HEAD","OrgId":"5ef8500150664068d21875f5","role":"2","branch":"RO","location":"5ef850b450664068d21875f9","superadminaccess":false,"otp":"iua1l975","firstpassword":true,"__v":0}}],"Limit":10,"PaginatedCount":11,"TotalEmpCount":16,"request":{"status":"true","page":1,"limit":10,"filter":{"gender":[],"location":[],"grade":[],"unit":[],"ageonnetwork":[],"searchby":null,"filterby":null,"directby":null}}}};
    console.log(temp);
    this.rowData = temp.data.Employees;
  }

}
