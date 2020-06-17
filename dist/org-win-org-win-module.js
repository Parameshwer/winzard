(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["org-win-org-win-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/org-win/goal-management/goal-management.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr/org-win/goal-management/goal-management.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>goal-management works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/org-win/org-win/org-win.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr/org-win/org-win/org-win.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-inner-container\">\n        <div class=\"sidebar\">\n            <app-sidebar></app-sidebar>\n        </div>\n        <div class=\"page-container\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <!-- E8E8E8 -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/org-win/people-assessment/people-assessment.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr/org-win/people-assessment/people-assessment.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-page with-drawer\">\n    <mat-horizontal-stepper #stepper class=\"no-indications\">\n        <mat-step *ngIf=\"!loader && !dataSource?.data?.length\">\n            <div class=\"intial-view\">\n                <div class=\"page-heading\">\n                    <h3 class=\"heading\">People Assessment</h3>\n                </div>\n                <div class=\"view-body\">\n                    <img src=\"../../../../assets/images/tm-icon.svg\"/>\n                    <p>This is where you initiate People Assessment Reviews</p>\n                    <button class=\"custom-btn\" matStepperNext>INTIATE</button>\n                </div>\n            </div>\n        </mat-step>\n        <mat-step>\n            <mat-drawer-container class=\"drawer-container\" [hasBackdrop]=\"true\">\n                <mat-drawer-content class=\"drawer-sidenav-content\">\n                    <div class=\"page-heading\">\n                        <h3 class=\"heading\">People Assessment</h3>\n                        <!-- (click)=\"openUserSidenav(true)\" -->\n                        <button mat-button class=\"custom-btn\" (click)=\"StartNewTalent();\">\n                            Start new\n                        </button>\n                    </div>\n                    <ng-container *ngIf=\"!loader && dataSource?.data?.length\">\n                        <table mat-table [dataSource]=\"dataSource\" class=\"w-100\" matSort>\n                            <!-- Position Column -->\n                            <ng-container matColumnDef=\"sNo\">\n                                <th mat-header-cell *matHeaderCellDef >S.no</th>\n                                <td mat-cell *matCellDef=\"let element; let i = index\">{{ i + 1 }}</td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"start\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\">Start</th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                                    {{ element.start | date: \"dd/LLL/yyy\" }}\n                                </td>\n                            </ng-container>\n\n                            <!-- Weight Column -->\n                            <ng-container matColumnDef=\"end\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\">End</th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                                    {{ element.end | date: \"dd/LLL/yyy\" }}\n                                </td>\n                            </ng-container>\n\n                            <!-- Symbol Column -->\n                            <ng-container matColumnDef=\"sent\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\">Sent to</th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                                    {{ element.sent }}\n                                </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"submited\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\">\n                                    Submited by\n                                </th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                                    {{ element.submited }}\n                                </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"dueEmp\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Due</th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <span class=\"due-cell\" (click)=\"getDueList(element)\">{{\n              element.dueEmp\n            }}</span>\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"status\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <div class=\"s-{{ element?.status }}\">\n                                        <mat-form-field class=\"custom-input status-field\">\n                                            <mat-select [(ngModel)]=\"element.status\"\n                                                (selectionChange)=\"onStatusChange(element)\">\n                                                <mat-option *ngFor=\"let status of statusList\" [value]=\"status.id\">\n                                                    {{ status.name}}\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"edit\">\n                                <th mat-header-cell *matHeaderCellDef class=\"text-center\">Edit</th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"reminder-cell text-center\">\n                                    <mat-icon (click)=\"onEdit(element)\"\n                                        [ngClass]=\"{'disable-click':element.status != '1'}\">edit\n                                    </mat-icon>\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"reminder\">\n                                <th mat-header-cell *matHeaderCellDef class=\"text-center\">\n                                    Reminder\n                                </th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"reminder-cell text-center\">\n                                    <mat-icon (click)=\"onReminder(element)\"\n                                        [ngClass]=\"{'disable-click':element.status != '1'}\">\n                                        notifications_none\n                                    </mat-icon>\n                                </td>\n                            </ng-container>\n\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n                        </table>\n                        <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\n                        <div class=\"custom-pagination\">\n                            <ngb-pagination [(page)]=\"pageDetails.page\" [pageSize]=\"pageDetails.pageSize\"\n                                [collectionSize]=\"pageDetails.total\" (pageChange)=\"pageChange()\"></ngb-pagination>\n                            <mat-form-field class=\"custom-input status-field\">\n                                <mat-select [(value)]=\"pageDetails.pageSize\" (valueChange)=\"pageItemsChange()\">\n                                    <mat-option [value]=\"5\">5 / page</mat-option>\n                                    <mat-option [value]=\"10\">10 / page</mat-option>\n                                    <mat-option [value]=\"20\">20 / page</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                    </ng-container>\n                    <p class=\"no-data loader\" *ngIf=\"loader\">\n                        <mat-spinner></mat-spinner>\n                    </p>\n                    <ng-container *ngIf=\"!loader && !dataSource?.data?.length\">\n                        <p class=\"no-data\">This is where you initiate People Assessment Reviews</p>\n                    </ng-container>\n                </mat-drawer-content>\n\n                <mat-drawer #drawer mode=\"over\" position=\"end\">\n                    <div class=\"sidenav-container\" style=\"width: 689px;\" *ngIf=\"!checkActiveTm\">\n                        <div class=\"sidenav-heading\">\n                            <span class=\"title\">Start People Assessment</span>\n                            <span class=\"flex-1\"></span>\n                            <mat-icon (click)=\"closeSidenav()\">close</mat-icon>\n                        </div>\n                        <div class=\"sidenav-body animate__animated \" \n                        [ngClass]=\"{'animate__fadeOut':intiateSucess}\">\n                            <div class=\"sidenav-content\">\n                                <div class=\"d-flex flex-column\" *ngIf=\"!sideNavLoader\">\n                                    <h5 class=\"heading\">Employee List</h5>\n                                    <div class=\"d-flex\">\n                                        <div class=\"custom-field\">\n                                            <label>Select by Grade</label>\n                                            <!--  -->\n                                            <mat-form-field class=\"custom-input\" appearance=\"none\">\n                                                <mat-select multiple placeholder=\"Select Grade\" [formControl]=\"grades\" (selectionChange)=\"onGradesChages($event)\">\n                                                  <mat-select-trigger>\n                                                    {{getDisplayName()}}\n                                                  </mat-select-trigger>\n                                                  <mat-option #allSelected\n                                                        (click)=\"isSelectAllClicked=true;\" [value]=\"0\"\n                                                        [disabled]=\"disableSelectAll\">Select\n                                                        All</mat-option>\n                                                    <mat-option *ngFor=\"let grade of gradesList\" [value]=\"grade\"\n                                                        [disabled]=\"checkDisable(grade['_id'])\"\n                                                       >\n                                                        {{ grade.gradeName }}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"custom-field date-field\">\n                                            <label>Start Date</label>\n                                            <mat-form-field class=\"custom-input\" appearance=\"none\">\n                                                <input matInput [matDatepicker]=\"picker\" [max]=\"endDate.value\"\n                                                    [formControl]=\"startDate\" placeholder=\"DD/MM/YYYY\"\n                                                    (click)=\"picker.open()\" />\n                                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                                <mat-datepicker #picker></mat-datepicker>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"custom-field date-field\">\n                                            <label>End Date</label>\n                                            <mat-form-field class=\"custom-input\" appearance=\"none\">\n                                                <input matInput [matDatepicker]=\"picker1\" [min]=\"startDate.value\"\n                                                    [formControl]=\"endDate\" placeholder=\"DD/MM/YYYY\"\n                                                    (click)=\"picker1.open()\" />\n                                                <mat-datepicker-toggle matSuffix [for]=\"picker1\">\n                                                </mat-datepicker-toggle>\n                                                <mat-datepicker #picker1></mat-datepicker>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                    <div class=\"filter-check\" *ngIf=\"userInfo?.data?.user?.role == 1\">\n                                        <mat-checkbox [(ngModel)]=\"onlySupervisors\"\n                                            (change)=\"onCheckSupervisors(onlySupervisors)\">Only Supervisors\n                                        </mat-checkbox>\n                                    </div>\n                                    <div class=\"emp-list\" *ngIf=\"empList?.length\">\n                                        <table>\n                                            <thead>\n                                                <th>Employee name</th>\n                                                <th>Employee Id</th>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let emp of empList\">\n                                                    <td>\n                                                        <span>{{ emp.fullname }}</span>\n                                                    </td>\n                                                    <td>\n                                                        <span>{{ emp.empId }}</span>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                                <p class=\"no-data loader sideNav-loader\" *ngIf=\"sideNavLoader\">\n                                    <mat-spinner></mat-spinner>\n                                </p>\n                            </div>\n                            <div class=\"sidenav-footer\">\n                                <button mat-button class=\"custom-btn\" (click)=\"intiateTalentMangement()\">\n                                    {{talentIntiateBtn}}\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"sidenav-sucess-flag animate__animated\"\n                            [ngClass]=\"{'animate__fadeInRightBig':intiateSucess}\">\n                            <div class=\"notify-sec\">\n                                <img src=\"../../../../assets/images/notify.jpeg\">\n                                <p>Talent assessment is initated and sent</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"sidenav-container\" style=\"width: 689px;\" *ngIf=\"checkActiveTm\">\n                        <div class=\"sidenav-heading\">\n                            <span class=\"title\">Start People Assessment</span>\n                            <span class=\"flex-1\"></span>\n                            <mat-icon (click)=\"closeSidenav()\">close</mat-icon>\n                        </div>\n                        <div class=\"sidenav-sucess-flag\">\n                            <div class=\"notify-sec active-flag-msg\">\n                                <p>{{checkActiveTm}}</p>\n                            </div>\n                        </div>\n                        </div>\n\n\n                </mat-drawer>\n\n                <mat-drawer #dueSidenav mode=\"over\" position=\"end\">\n                    <div class=\"sidenav-container\" style=\"width: 361px;\">\n                        <div class=\"sidenav-heading\">\n                            <span class=\"title\">People Assessment Due Names ({{ dueEmpList?.length }})</span>\n                            <span class=\"flex-1\"></span>\n                            <mat-icon (click)=\"closeDueSidenav()\">close</mat-icon>\n                        </div>\n                        <div class=\"sidenav-content due-list\">\n                            <div class=\"due-row\" *ngFor=\"let emp of dueEmpList\">\n                                <div class=\"emp-icon\">\n                                    <span>\n                                        {{emp.fullname ? emp?.fullname?.substring(0,2) : ''}}\n                                    </span>\n                                </div>\n                                <div class=\"emp-desc\">\n                                    <span class=\"name\">{{ emp.fullname }}</span>\n                                    <span class=\"mail\">{{ emp.email }}</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-drawer>\n            </mat-drawer-container>\n        </mat-step>\n\n    </mat-horizontal-stepper>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/org-win/talent-management/talent-management.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr/org-win/talent-management/talent-management.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inner-page with-drawer\">\n    <mat-horizontal-stepper #stepper class=\"no-indications\">\n        <mat-step *ngIf=\"!loader && !dataSource?.data?.length\">\n            <div class=\"intial-view\">\n                <div class=\"page-heading\">\n                    <h3 class=\"heading\">Talent Manager</h3>\n                </div>\n                <div class=\"view-body\">\n                    <img src=\"../../../../assets/images/tm-icon.svg\"/>\n                    <p>This is where you initiate Talent Manager Reviews</p>\n                    <button class=\"custom-btn\" matStepperNext>INTIATE</button>\n                </div>\n            </div>\n        </mat-step>\n        <mat-step>\n            <mat-drawer-container class=\"drawer-container\" [hasBackdrop]=\"true\">\n                <mat-drawer-content class=\"drawer-sidenav-content\">\n                    <div class=\"page-heading\">\n                        <h3 class=\"heading\">Talent Manager</h3>\n                        <!-- (click)=\"openUserSidenav(true)\" -->\n                        <button mat-button class=\"custom-btn\" (click)=\"StartNewTalent();\">\n                            Start new\n                        </button>\n                    </div>\n                    <ng-container *ngIf=\"!loader && dataSource?.data?.length\">\n                        <table mat-table [dataSource]=\"dataSource\" class=\"w-100\" matSort>\n                            <!-- Position Column -->\n                            <ng-container matColumnDef=\"sNo\">\n                                <th mat-header-cell *matHeaderCellDef >S.no</th>\n                                <td mat-cell *matCellDef=\"let element; let i = index\">{{ i + 1 }}</td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"start\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\">Start</th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                                    {{ element.start | date: \"dd/LLL/yyy\" }}\n                                </td>\n                            </ng-container>\n\n                            <!-- Weight Column -->\n                            <ng-container matColumnDef=\"end\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\">End</th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                                    {{ element.end | date: \"dd/LLL/yyy\" }}\n                                </td>\n                            </ng-container>\n\n                            <!-- Symbol Column -->\n                            <ng-container matColumnDef=\"sent\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\">Sent to</th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                                    {{ element.sent }}\n                                </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"submited\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\">\n                                    Submited by\n                                </th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"text-center\">\n                                    {{ element.submited }}\n                                </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"dueEmp\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Due</th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <span class=\"due-cell\" (click)=\"getDueList(element)\">{{\n              element.dueEmp\n            }}</span>\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"status\">\n                                <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n                                <td mat-cell *matCellDef=\"let element\">\n                                    <div class=\"s-{{ element?.status }}\">\n                                        <mat-form-field class=\"custom-input status-field\">\n                                            <mat-select [(ngModel)]=\"element.status\"\n                                                (selectionChange)=\"onStatusChange(element)\">\n                                                <mat-option *ngFor=\"let status of statusList\" [value]=\"status.id\">\n                                                    {{ status.name}}\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                </td>\n                            </ng-container>\n\n                            <ng-container matColumnDef=\"edit\">\n                                <th mat-header-cell *matHeaderCellDef class=\"text-center\">Edit</th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"reminder-cell text-center\">\n                                    <mat-icon (click)=\"onEdit(element)\"\n                                        [ngClass]=\"{'disable-click':element.status != '1'}\">edit\n                                    </mat-icon>\n                                </td>\n                            </ng-container>\n                            <ng-container matColumnDef=\"reminder\">\n                                <th mat-header-cell *matHeaderCellDef class=\"text-center\">\n                                    Reminder\n                                </th>\n                                <td mat-cell *matCellDef=\"let element\" class=\"reminder-cell text-center\">\n                                    <mat-icon (click)=\"onReminder(element)\"\n                                        [ngClass]=\"{'disable-click':element.status != '1'}\">\n                                        notifications_none\n                                    </mat-icon>\n                                </td>\n                            </ng-container>\n\n                            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                            <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n                        </table>\n                        <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator> -->\n                        <div class=\"custom-pagination\">\n                            <ngb-pagination [(page)]=\"pageDetails.page\" [pageSize]=\"pageDetails.pageSize\"\n                                [collectionSize]=\"pageDetails.total\" (pageChange)=\"pageChange()\"></ngb-pagination>\n                            <mat-form-field class=\"custom-input status-field\">\n                                <mat-select [(value)]=\"pageDetails.pageSize\" (valueChange)=\"pageItemsChange()\">\n                                    <mat-option [value]=\"5\">5 / page</mat-option>\n                                    <mat-option [value]=\"10\">10 / page</mat-option>\n                                    <mat-option [value]=\"20\">20 / page</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </div>\n\n                    </ng-container>\n                    <p class=\"no-data loader\" *ngIf=\"loader\">\n                        <mat-spinner></mat-spinner>\n                    </p>\n                    <ng-container *ngIf=\"!loader && !dataSource?.data?.length\">\n                        <p class=\"no-data\">This is where you initiate Talent Manager Reviews</p>\n                    </ng-container>\n                </mat-drawer-content>\n\n                <mat-drawer #drawer mode=\"over\" position=\"end\">\n                    <div class=\"sidenav-container\" style=\"width: 689px;\" *ngIf=\"!checkActiveTm\">\n                        <div class=\"sidenav-heading\">\n                            <span class=\"title\">Start Talent Manager</span>\n                            <span class=\"flex-1\"></span>\n                            <mat-icon (click)=\"closeSidenav()\">close</mat-icon>\n                        </div>\n                        <div class=\"sidenav-body animate__animated \" \n                        [ngClass]=\"{'animate__fadeOut':intiateSucess}\">\n                            <div class=\"sidenav-content\">\n                                <div class=\"d-flex flex-column\" *ngIf=\"!sideNavLoader\">\n                                    <h5 class=\"heading\">Employee List</h5>\n                                    <div class=\"d-flex\">\n                                        <div class=\"custom-field\">\n                                            <label>Select by Grade</label>\n                                            <!--  -->\n                                            <mat-form-field class=\"custom-input\" appearance=\"none\">\n                                                <mat-select multiple placeholder=\"Select Grade\" [formControl]=\"grades\" (selectionChange)=\"onGradesChages($event)\">\n                                                  <mat-select-trigger>\n                                                    {{getDisplayName()}}\n                                                  </mat-select-trigger>\n                                                  <mat-option #allSelected\n                                                        (click)=\"isSelectAllClicked=true;\" [value]=\"0\"\n                                                        [disabled]=\"disableSelectAll\">Select\n                                                        All</mat-option>\n                                                    <mat-option *ngFor=\"let grade of gradesList\" [value]=\"grade\"\n                                                        [disabled]=\"checkDisable(grade['_id'])\"\n                                                       >\n                                                        {{ grade.gradeName }}\n                                                    </mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"custom-field date-field\">\n                                            <label>Start Date</label>\n                                            <mat-form-field class=\"custom-input\" appearance=\"none\">\n                                                <input matInput [matDatepicker]=\"picker\" [max]=\"endDate.value\"\n                                                    [formControl]=\"startDate\" placeholder=\"DD/MM/YYYY\"\n                                                    (click)=\"picker.open()\" />\n                                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                                <mat-datepicker #picker></mat-datepicker>\n                                            </mat-form-field>\n                                        </div>\n                                        <div class=\"custom-field date-field\">\n                                            <label>End Date</label>\n                                            <mat-form-field class=\"custom-input\" appearance=\"none\">\n                                                <input matInput [matDatepicker]=\"picker1\" [min]=\"startDate.value\"\n                                                    [formControl]=\"endDate\" placeholder=\"DD/MM/YYYY\"\n                                                    (click)=\"picker1.open()\" />\n                                                <mat-datepicker-toggle matSuffix [for]=\"picker1\">\n                                                </mat-datepicker-toggle>\n                                                <mat-datepicker #picker1></mat-datepicker>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                    <div class=\"filter-check\" *ngIf=\"userInfo?.data?.user?.role == 1\">\n                                        <mat-checkbox [(ngModel)]=\"onlySupervisors\"\n                                            (change)=\"onCheckSupervisors(onlySupervisors)\">Only Supervisors\n                                        </mat-checkbox>\n                                    </div>\n                                    <div class=\"emp-list\" *ngIf=\"empList?.length\">\n                                        <table>\n                                            <thead>\n                                                <th>Employee name</th>\n                                                <th>Employee Id</th>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor=\"let emp of empList\">\n                                                    <td>\n                                                        <span>{{ emp.fullname }}</span>\n                                                    </td>\n                                                    <td>\n                                                        <span>{{ emp.empId }}</span>\n                                                    </td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n                                <p class=\"no-data loader sideNav-loader\" *ngIf=\"sideNavLoader\">\n                                    <mat-spinner></mat-spinner>\n                                </p>\n                            </div>\n                            <div class=\"sidenav-footer\">\n                                <button mat-button class=\"custom-btn\" (click)=\"intiateTalentMangement()\">\n                                    {{talentIntiateBtn}}\n                                </button>\n                            </div>\n                        </div>\n                        <div class=\"sidenav-sucess-flag animate__animated\"\n                            [ngClass]=\"{'animate__fadeInRightBig':intiateSucess}\">\n                            <div class=\"notify-sec\">\n                                <img src=\"../../../../assets/images/notify.jpeg\">\n                                <p>Talent assessment is initated and sent</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"sidenav-container\" style=\"width: 689px;\" *ngIf=\"checkActiveTm\">\n                        <div class=\"sidenav-heading\">\n                            <span class=\"title\">Start Talent Manager</span>\n                            <span class=\"flex-1\"></span>\n                            <mat-icon (click)=\"closeSidenav()\">close</mat-icon>\n                        </div>\n                        <div class=\"sidenav-sucess-flag\">\n                            <div class=\"notify-sec active-flag-msg\">\n                                <p>{{checkActiveTm}}</p>\n                            </div>\n                        </div>\n                        </div>\n\n\n                </mat-drawer>\n\n                <mat-drawer #dueSidenav mode=\"over\" position=\"end\">\n                    <div class=\"sidenav-container\" style=\"width: 361px;\">\n                        <div class=\"sidenav-heading\">\n                            <span class=\"title\">Talent Manager Due Names ({{ dueEmpList?.length }})</span>\n                            <span class=\"flex-1\"></span>\n                            <mat-icon (click)=\"closeDueSidenav()\">close</mat-icon>\n                        </div>\n                        <div class=\"sidenav-content due-list\">\n                            <div class=\"due-row\" *ngFor=\"let emp of dueEmpList\">\n                                <div class=\"emp-icon\">\n                                    <span>\n                                        {{emp.fullname ? emp?.fullname?.substring(0,2) : ''}}\n                                    </span>\n                                </div>\n                                <div class=\"emp-desc\">\n                                    <span class=\"name\">{{ emp.fullname }}</span>\n                                    <span class=\"mail\">{{ emp.email }}</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-drawer>\n            </mat-drawer-container>\n        </mat-step>\n\n    </mat-horizontal-stepper>\n</div>\n");

/***/ }),

/***/ "./src/app/hr/hr.service.ts":
/*!**********************************!*\
  !*** ./src/app/hr/hr.service.ts ***!
  \**********************************/
/*! exports provided: HrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrService", function() { return HrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let HrService = class HrService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    getGradeList() {
        let path = this.baseUrl + 'getGrades';
        return this.http.post(path, '')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getEmployeeList(body) {
        let path = this.baseUrl + 'talent/getTalentGradeEmployees';
        return this.http.post(path, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getSaveTalentManagerIntiate(body) {
        let path = this.baseUrl + 'talent/getSaveTalentManager';
        return this.http.post(path, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getDueTalentSurveyEmployees(body) {
        let path = this.baseUrl + 'talent/getDueTalentSurveyEmployees';
        return this.http.post(path, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getUpdateTalentSurveyStatus(body) {
        let path = this.baseUrl + 'talent/getUpdateTalentSurveyStatus';
        return this.http.post(path, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getTalentSurveys(body) {
        let path = this.baseUrl + 'talent/getTalentSurveys';
        return this.http.post(path, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getRemindTalentDueEmployees(body) {
        let path = this.baseUrl + 'talent/getRemindTalentDueEmployees';
        return this.http.post(path, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getCheckActiveStatusReviews(body) {
        let path = this.baseUrl + 'talent/getCheckActiveStatusReviews';
        return this.http.post(path, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getEditTalentSurveyById(body) {
        let path = this.baseUrl + 'talent/getEditTalentSurveyById';
        return this.http.post(path, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
};
HrService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
HrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HrService);



/***/ }),

/***/ "./src/app/hr/org-win/goal-management/goal-management.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/hr/org-win/goal-management/goal-management.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyL29yZy13aW4vZ29hbC1tYW5hZ2VtZW50L2dvYWwtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/hr/org-win/goal-management/goal-management.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/hr/org-win/goal-management/goal-management.component.ts ***!
  \*************************************************************************/
/*! exports provided: GoalManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalManagementComponent", function() { return GoalManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GoalManagementComponent = class GoalManagementComponent {
    constructor() { }
    ngOnInit() {
    }
};
GoalManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-goal-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./goal-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/org-win/goal-management/goal-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./goal-management.component.scss */ "./src/app/hr/org-win/goal-management/goal-management.component.scss")).default]
    })
], GoalManagementComponent);



/***/ }),

/***/ "./src/app/hr/org-win/org-win-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/hr/org-win/org-win-routing.module.ts ***!
  \******************************************************/
/*! exports provided: OrgWINRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgWINRoutingModule", function() { return OrgWINRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _talent_management_talent_management_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./talent-management/talent-management.component */ "./src/app/hr/org-win/talent-management/talent-management.component.ts");
/* harmony import */ var _org_win_org_win_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./org-win/org-win.component */ "./src/app/hr/org-win/org-win/org-win.component.ts");
/* harmony import */ var _people_assessment_people_assessment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./people-assessment/people-assessment.component */ "./src/app/hr/org-win/people-assessment/people-assessment.component.ts");






const routes = [
    {
        path: '',
        component: _org_win_org_win_component__WEBPACK_IMPORTED_MODULE_4__["OrgWinComponent"],
        children: [
            {
                path: 'talentMangement',
                component: _talent_management_talent_management_component__WEBPACK_IMPORTED_MODULE_3__["TalentManagementComponent"]
            },
            {
                path: 'peopleAssessment',
                component: _people_assessment_people_assessment_component__WEBPACK_IMPORTED_MODULE_5__["PeopleAssessmentComponent"]
            },
        ]
    },
];
let OrgWINRoutingModule = class OrgWINRoutingModule {
};
OrgWINRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrgWINRoutingModule);



/***/ }),

/***/ "./src/app/hr/org-win/org-win.module.ts":
/*!**********************************************!*\
  !*** ./src/app/hr/org-win/org-win.module.ts ***!
  \**********************************************/
/*! exports provided: OrgWINModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgWINModule", function() { return OrgWINModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _org_win_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./org-win-routing.module */ "./src/app/hr/org-win/org-win-routing.module.ts");
/* harmony import */ var _talent_management_talent_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./talent-management/talent-management.component */ "./src/app/hr/org-win/talent-management/talent-management.component.ts");
/* harmony import */ var _org_win_org_win_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./org-win/org-win.component */ "./src/app/hr/org-win/org-win/org-win.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _people_assessment_people_assessment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./people-assessment/people-assessment.component */ "./src/app/hr/org-win/people-assessment/people-assessment.component.ts");
/* harmony import */ var _goal_management_goal_management_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./goal-management/goal-management.component */ "./src/app/hr/org-win/goal-management/goal-management.component.ts");









let OrgWINModule = class OrgWINModule {
};
OrgWINModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_talent_management_talent_management_component__WEBPACK_IMPORTED_MODULE_4__["TalentManagementComponent"], _org_win_org_win_component__WEBPACK_IMPORTED_MODULE_5__["OrgWinComponent"], _people_assessment_people_assessment_component__WEBPACK_IMPORTED_MODULE_7__["PeopleAssessmentComponent"], _goal_management_goal_management_component__WEBPACK_IMPORTED_MODULE_8__["GoalManagementComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _org_win_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrgWINRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]
    })
], OrgWINModule);



/***/ }),

/***/ "./src/app/hr/org-win/org-win/org-win.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/hr/org-win/org-win/org-win.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyL29yZy13aW4vb3JnLXdpbi9vcmctd2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/hr/org-win/org-win/org-win.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/hr/org-win/org-win/org-win.component.ts ***!
  \*********************************************************/
/*! exports provided: OrgWinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgWinComponent", function() { return OrgWinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrgWinComponent = class OrgWinComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrgWinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-org-win',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./org-win.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/org-win/org-win/org-win.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./org-win.component.scss */ "./src/app/hr/org-win/org-win/org-win.component.scss")).default]
    })
], OrgWinComponent);



/***/ }),

/***/ "./src/app/hr/org-win/people-assessment/people-assessment.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/hr/org-win/people-assessment/people-assessment.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyL29yZy13aW4vcGVvcGxlLWFzc2Vzc21lbnQvcGVvcGxlLWFzc2Vzc21lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/hr/org-win/people-assessment/people-assessment.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/hr/org-win/people-assessment/people-assessment.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PeopleAssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleAssessmentComponent", function() { return PeopleAssessmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _hr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hr.service */ "./src/app/hr/hr.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







let PeopleAssessmentComponent = class PeopleAssessmentComponent {
    constructor(_service, auth) {
        this._service = _service;
        this.auth = auth;
        this.sideNavLoader = false;
        this.talentIntiateBtn = "INTIATE";
        this.talentID = "";
        this.checkActiveTm = '';
        this.displayedColumns = [
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
        this.loader = true;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.gradesList = [];
        this.empList = [];
        this.dueEmpList = [];
        this.gradesInfoRef = [];
        // selectedGrades: Array<any> = [];
        this.statusList = [
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
        this.grades = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.startDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.endDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.onlySupervisors = false;
        this.pageDetails = {
            page: 1,
            pageSize: 5,
            total: 0,
            sort: { start: 1 },
        };
        this.intiateSucess = false;
        this.disableSelectAll = false;
    }
    ngOnInit() {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.getGradeList();
        this.getTalentSurveysData(true);
    }
    getTalentSurveysData(isFirst) {
        const params = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.pageDetails);
        params.page--;
        this._service.getTalentSurveys(params).subscribe((res) => {
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
        }, (err) => {
            console.log("HTTP Error", err);
        });
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
        this._service.getGradeList().subscribe((res) => {
            console.log(res);
            if (res && res.data) {
                console.log(res);
                this.gradesInfoRef = res.data;
                this.gradesInfoRef.splice(0, 1);
            }
        }, (err) => {
            console.log("HTTP Error", err);
        });
    }
    tosslePerOne(all) {
        if (this.allSelected.selected) {
            this.allSelected.deselect();
            return false;
        }
        if (this.grades.value.length == this.gradesList.length) {
            this.isSelectAllClicked = true;
            this.allSelected.select();
        }
        else {
            this.getEmployeeList(this.grades.value);
        }
    }
    toggleAllSelection() {
        const isSelected = this.gradesList.some((item) => this.checkDisable(item["_id"]));
        if (this.allSelected.selected) {
            this.grades.patchValue([...this.gradesList.map((item) => item), 0], {
                emitEvent: false,
            });
            this.getEmployeeList(this.grades.value);
        }
        else {
            if (isSelected) {
                const list = this.gradesList.filter((item) => this.checkDisable(item["_id"]));
                this.grades.patchValue(list, { emitEvent: false });
            }
            else {
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
            }
            else {
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
        this._service.getEmployeeList(selectedGrades).subscribe((res) => {
            console.log(res);
            if (res && res.data) {
                console.log(res);
                this.empList = res.data;
            }
        }, (err) => {
            console.log("HTTP Error", err);
        });
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
        if (this.talentID) {
            this.intiateTalent["talentID"] = this.talentID;
        }
        if (!this.grades.value && !this.startDate.value && !this.endDate.value) {
            msg = "Please select Grade & Date";
            this.auth.openConfirmDialog(msg, "error");
            return;
        }
        else if (!this.grades.value) {
            msg = "Please select Grade";
            this.auth.openConfirmDialog(msg, "error");
            return;
        }
        else if (!this.startDate.value) {
            msg = "Please select Start Date";
            this.auth.openConfirmDialog(msg, "error");
            return;
        }
        else if (!this.endDate.value) {
            msg = "Please select End Date";
            this.auth.openConfirmDialog(msg, "error");
            return;
        }
        this._service.getSaveTalentManagerIntiate(this.intiateTalent).subscribe((res) => {
            if (res) {
                this.sideNavLoader = false;
                let msg = res.msg ? res.msg : "Something went wrong";
                //this.auth.openConfirmDialog(msg, "error");
                this.intiateSucess = true;
                setTimeout(() => {
                    this.getTalentSurveysData();
                }, 1000);
                setTimeout(() => {
                    this.closeSidenav();
                    this.intiateSucess = false;
                }, 2000);
            }
        }, (err) => {
            console.log("HTTP Error", err);
        });
    }
    getDueList(row) {
        this._service
            .getDueTalentSurveyEmployees({
            talentID: row.id,
        })
            .subscribe((res) => {
            console.log(res);
            if (res && res.data) {
                this.dueEmpList = res.data;
                this.openDueSidenav();
            }
        }, (err) => {
            console.log("HTTP Error", err);
        });
    }
    onStatusChange(row) {
        let param = { talentID: row.id, status: row.status };
        this._service.getUpdateTalentSurveyStatus(param).subscribe((res) => {
            //console.log(res);
            if (res) {
                this.auth.openConfirmDialog(res.msg, "error", "autoClose");
            }
        }, (err) => {
            console.log("HTTP Error", err);
        });
    }
    onReminder(row) {
        if (row.status != "1")
            return;
        let msg = "Are you sure you want to send reminder";
        let cb = () => {
            this._service
                .getRemindTalentDueEmployees({
                talentID: row.id,
            })
                .subscribe((res) => {
                if (res) {
                    this.auth.openConfirmDialog(res.msg, "error", "autoClose");
                }
            }, (err) => {
                console.log("HTTP Error", err);
            });
        };
        this.auth.openConfirmDialog(msg, "reminder", "", cb);
    }
    onEdit(row) {
        if (row.status != "1")
            return;
        this.talentIntiateBtn = "UPDATE";
        this._service.getEditTalentSurveyById({ id: row.id }).subscribe((res) => {
            console.log(res);
            if (res && res.data) {
                this.empList = res.data.empinfo;
                this.gradesList = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](res.data.gradesInfo);
                const ids = res.data.gradesInfo.map((x) => x._id);
                const ref = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.gradesInfoRef);
                ref.map((each) => {
                    if (!ids.includes(each._id)) {
                        this.gradesList.push(each);
                    }
                });
                this.talentID = row.id;
                const list = [];
                res.data.gradesInfo.map((each) => {
                    const obj = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](this.gradesList, ["_id", each._id]);
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
        }, (err) => {
            console.log("HTTP Error", err);
        });
    }
    // getShortName(str){
    //   return str.split('').map(n => n[0].join(''));
    // }
    openUserSidenav(create) {
        this.sidenav.open();
        if (create == true) {
            this.talentID = "";
            this.gradesList = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.gradesInfoRef);
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
            const obj = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](this.gradesList, ["_id", value]);
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
            }
            else {
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
};
PeopleAssessmentComponent.ctorParameters = () => [
    { type: _hr_service__WEBPACK_IMPORTED_MODULE_3__["HrService"] },
    { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("drawer", { static: true })
], PeopleAssessmentComponent.prototype, "sidenav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dueSidenav", { static: true })
], PeopleAssessmentComponent.prototype, "dueSidenav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], PeopleAssessmentComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false })
], PeopleAssessmentComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("allSelected", { static: false })
], PeopleAssessmentComponent.prototype, "allSelected", void 0);
PeopleAssessmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people-assessment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./people-assessment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/org-win/people-assessment/people-assessment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./people-assessment.component.scss */ "./src/app/hr/org-win/people-assessment/people-assessment.component.scss")).default]
    })
], PeopleAssessmentComponent);



/***/ }),

/***/ "./src/app/hr/org-win/talent-management/talent-management.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/hr/org-win/talent-management/talent-management.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyL29yZy13aW4vdGFsZW50LW1hbmFnZW1lbnQvdGFsZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/hr/org-win/talent-management/talent-management.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/hr/org-win/talent-management/talent-management.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TalentManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentManagementComponent", function() { return TalentManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _hr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hr.service */ "./src/app/hr/hr.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);







let TalentManagementComponent = class TalentManagementComponent {
    constructor(_service, auth) {
        this._service = _service;
        this.auth = auth;
        this.sideNavLoader = false;
        this.talentIntiateBtn = "INTIATE";
        this.talentID = "";
        this.checkActiveTm = '';
        this.displayedColumns = [
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
        this.loader = true;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.gradesList = [];
        this.empList = [];
        this.dueEmpList = [];
        this.gradesInfoRef = [];
        // selectedGrades: Array<any> = [];
        this.statusList = [
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
        this.grades = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.startDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.endDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.onlySupervisors = false;
        this.pageDetails = {
            page: 1,
            pageSize: 5,
            total: 0,
            sort: { start: 1 },
        };
        this.intiateSucess = false;
        this.disableSelectAll = false;
    }
    ngOnInit() {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.getGradeList();
        this.getTalentSurveysData(true);
    }
    getTalentSurveysData(isFirst) {
        const params = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.pageDetails);
        params.page--;
        this._service.getTalentSurveys(params).subscribe((res) => {
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
        }, (err) => {
            console.log("HTTP Error", err);
        });
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
        this._service.getGradeList().subscribe((res) => {
            console.log(res);
            if (res && res.data) {
                console.log(res);
                this.gradesInfoRef = res.data;
                this.gradesInfoRef.splice(0, 1);
            }
        }, (err) => {
            console.log("HTTP Error", err);
        });
    }
    tosslePerOne(all) {
        if (this.allSelected.selected) {
            this.allSelected.deselect();
            return false;
        }
        if (this.grades.value.length == this.gradesList.length) {
            this.isSelectAllClicked = true;
            this.allSelected.select();
        }
        else {
            this.getEmployeeList(this.grades.value);
        }
    }
    toggleAllSelection() {
        const isSelected = this.gradesList.some((item) => this.checkDisable(item["_id"]));
        if (this.allSelected.selected) {
            this.grades.patchValue([...this.gradesList.map((item) => item), 0], {
                emitEvent: false,
            });
            this.getEmployeeList(this.grades.value);
        }
        else {
            if (isSelected) {
                const list = this.gradesList.filter((item) => this.checkDisable(item["_id"]));
                this.grades.patchValue(list, { emitEvent: false });
            }
            else {
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
            }
            else {
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
        this._service.getEmployeeList(selectedGrades).subscribe((res) => {
            console.log(res);
            if (res && res.data) {
                console.log(res);
                this.empList = res.data;
            }
        }, (err) => {
            console.log("HTTP Error", err);
        });
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
        if (this.talentID) {
            this.intiateTalent["talentID"] = this.talentID;
        }
        if (!this.grades.value && !this.startDate.value && !this.endDate.value) {
            msg = "Please select Grade & Date";
            this.auth.openConfirmDialog(msg, "error");
            return;
        }
        else if (!this.grades.value) {
            msg = "Please select Grade";
            this.auth.openConfirmDialog(msg, "error");
            return;
        }
        else if (!this.startDate.value) {
            msg = "Please select Start Date";
            this.auth.openConfirmDialog(msg, "error");
            return;
        }
        else if (!this.endDate.value) {
            msg = "Please select End Date";
            this.auth.openConfirmDialog(msg, "error");
            return;
        }
        this._service.getSaveTalentManagerIntiate(this.intiateTalent).subscribe((res) => {
            if (res) {
                this.sideNavLoader = false;
                let msg = res.msg ? res.msg : "Something went wrong";
                //this.auth.openConfirmDialog(msg, "error");
                this.intiateSucess = true;
                setTimeout(() => {
                    this.getTalentSurveysData();
                }, 1000);
                setTimeout(() => {
                    this.closeSidenav();
                    this.intiateSucess = false;
                }, 2000);
            }
        }, (err) => {
            console.log("HTTP Error", err);
        });
    }
    getDueList(row) {
        this._service
            .getDueTalentSurveyEmployees({
            talentID: row.id,
        })
            .subscribe((res) => {
            console.log(res);
            if (res && res.data) {
                this.dueEmpList = res.data;
                this.openDueSidenav();
            }
        }, (err) => {
            console.log("HTTP Error", err);
        });
    }
    onStatusChange(row) {
        let param = { talentID: row.id, status: row.status };
        this._service.getUpdateTalentSurveyStatus(param).subscribe((res) => {
            //console.log(res);
            if (res) {
                this.auth.openConfirmDialog(res.msg, "error", "autoClose");
            }
        }, (err) => {
            console.log("HTTP Error", err);
        });
    }
    onReminder(row) {
        if (row.status != "1")
            return;
        let msg = "Are you sure you want to send reminder";
        let cb = () => {
            this._service
                .getRemindTalentDueEmployees({
                talentID: row.id,
            })
                .subscribe((res) => {
                if (res) {
                    this.auth.openConfirmDialog(res.msg, "error", "autoClose");
                }
            }, (err) => {
                console.log("HTTP Error", err);
            });
        };
        this.auth.openConfirmDialog(msg, "reminder", "", cb);
    }
    onEdit(row) {
        if (row.status != "1")
            return;
        this.talentIntiateBtn = "UPDATE";
        this._service.getEditTalentSurveyById({ id: row.id }).subscribe((res) => {
            console.log(res);
            if (res && res.data) {
                this.empList = res.data.empinfo;
                this.gradesList = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](res.data.gradesInfo);
                const ids = res.data.gradesInfo.map((x) => x._id);
                const ref = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.gradesInfoRef);
                ref.map((each) => {
                    if (!ids.includes(each._id)) {
                        this.gradesList.push(each);
                    }
                });
                this.talentID = row.id;
                const list = [];
                res.data.gradesInfo.map((each) => {
                    const obj = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](this.gradesList, ["_id", each._id]);
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
        }, (err) => {
            console.log("HTTP Error", err);
        });
    }
    // getShortName(str){
    //   return str.split('').map(n => n[0].join(''));
    // }
    openUserSidenav(create) {
        this.sidenav.open();
        if (create == true) {
            this.talentID = "";
            this.gradesList = lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"](this.gradesInfoRef);
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
            const obj = lodash__WEBPACK_IMPORTED_MODULE_6__["find"](this.gradesList, ["_id", value]);
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
            }
            else {
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
};
TalentManagementComponent.ctorParameters = () => [
    { type: _hr_service__WEBPACK_IMPORTED_MODULE_3__["HrService"] },
    { type: _authentication_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("drawer", { static: true })
], TalentManagementComponent.prototype, "sidenav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("dueSidenav", { static: true })
], TalentManagementComponent.prototype, "dueSidenav", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], TalentManagementComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false })
], TalentManagementComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("allSelected", { static: false })
], TalentManagementComponent.prototype, "allSelected", void 0);
TalentManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-talent-management",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./talent-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/org-win/talent-management/talent-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./talent-management.component.scss */ "./src/app/hr/org-win/talent-management/talent-management.component.scss")).default]
    })
], TalentManagementComponent);



/***/ })

}]);
//# sourceMappingURL=org-win-org-win-module.js.map