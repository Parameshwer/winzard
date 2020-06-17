(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["talent-review-questionnaire-talent-review-questionnaire-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/talent-review-questionnaire/talent-review/talent-review.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/talent-review-questionnaire/talent-review/talent-review.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-inner-container review-page\">\n  <div class=\"page-heading\">\n    <h3 class=\"heading\">Talent Manager</h3>\n  </div>\n  <mat-horizontal-stepper #stepper class=\"no-indications\">\n    <mat-step>\n        <div class=\"intial-view with-out-heading\">\n            <div class=\"view-body\" *ngIf=\"userListLoaded && usersList?.length\">\n                <img src=\"../../../../assets/images/tm-icon.svg\"/>\n                <p>It’s time to review your team’s performace</p>\n                <button class=\"custom-btn captalize\" matStepperNext>Start now</button>\n            </div>\n            <div class=\"view-body no-data-found\" *ngIf=\"userListLoaded && !usersList?.length\">\n              <p class=\"no-data-txt\">This is where you review your team and<br/>you’ll be able to do it when initaite the process</p>\n            </div>\n        </div>\n    </mat-step>\n    <mat-step>\n  <div class=\"inner-page with-drawer review\">\n    <div class=\"talent-review\" *ngIf=\"!loader\">\n      <div class=\"talent-leftsec\">\n        <ng-container *ngFor=\"let each of usersList; let index = index\">\n          <div class=\"review-list\" [class.selected]=\"selectedRow && selectedRow?._id == each._id\"\n            (click)=\"onSelect(each, index)\">\n            <div class=\"icon\">\n              <span class=\"name-circle\">\n                {{\n                  each?.employee?.fullname\n                    ? each?.employee?.fullname?.substring(0, 2)\n                    : \"\"\n                }}\n              </span>\n            </div>\n            <div class=\"r-sec\">\n              <div class=\"name\">{{ each?.employee?.fullname }}</div>\n              <div class=\"sec\">\n                {{ each?.employee?.gender == \"M\" ? \"Male\" : \"Female\" }} | Age\n                {{ each?.employee?.dob }}\n              </div>\n              <div class=\"sec\">\n                <mat-icon class=\"location-icon\">\n                  location_on\n                </mat-icon>\n                {{ each?.employee?.location }}\n              </div>\n            </div>\n            <i class=\"fa fa-angle-right arrow-right\"></i>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"talent-contentsec\">\n        <form [formGroup]=\"formGroup\">\n          <ng-container *ngIf=\"selectedRow\">\n            <fieldset [disabled]=\"diableEditable\">\n            <div class=\"questions-sec\">\n              <span class=\"number-circle\">01</span>\n              <div class=\"question-content-sec\">\n                <h2>Performance Vs Potential</h2>\n                <ng-container *ngFor=\"let each of questionSections.performance\">\n                  <div class=\"questions\">\n                    <label>{{ each.question }}</label>\n                    <mat-radio-group aria-label=\"Select an option\" formControlName=\"{{ each['_id'] }}\">\n                      <mat-radio-button value=\"1\">Low</mat-radio-button>\n                      <mat-radio-button value=\"2\">Medium</mat-radio-button>\n                      <mat-radio-button value=\"3\">High</mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                  <mat-error class=\"q-error\" *ngIf=\"\n                      formSubmmitted &&\n                      formGroup.get(each['_id']).hasError('required')\n                    \">This field is mandatory\n                  </mat-error>\n                </ng-container>\n              </div>\n            </div>\n            <div class=\"questions-sec\">\n              <span class=\"number-circle\">02</span>\n              <div class=\"question-content-sec\">\n                <h2>Attrition Vs Impact</h2>\n                <ng-container *ngFor=\"let each of questionSections.attrition\">\n                  <div class=\"questions\">\n                    <label>{{ each.question }}</label>\n                    <mat-radio-group aria-label=\"Select an option\" formControlName=\"{{ each['_id'] }}\">\n                      <mat-radio-button value=\"1\">Low</mat-radio-button>\n                      <mat-radio-button value=\"2\">Medium</mat-radio-button>\n                      <mat-radio-button value=\"3\">High</mat-radio-button>\n                    </mat-radio-group>\n                  </div>\n                  <mat-error class=\"q-error\" *ngIf=\"\n                      formSubmmitted &&\n                      formGroup.get(each['_id']).hasError('required')\n                    \">This field is mandatory\n                  </mat-error>\n                </ng-container>\n              </div>\n            </div>\n            <div class=\"questions-sec\">\n              <span class=\"number-circle\">03</span>\n              <div class=\"question-content-sec\">\n                <h2>Developments Needs</h2>\n                <div class=\"dev-ques-sec\">\n                  <ng-container *ngFor=\"let each of questionSections.developmentNeeds\">\n                    <div class=\"questions-left\">\n                      <label>{{ each.question }}</label>\n                      <div class=\"text-input\">\n                        <textarea placeholder=\"Illustrate the Development need in 50 words\"\n                          formControlName=\"developNeedsDesc\" class=\"form-control\"\n                          [readonly]=\"formGroup.get(questionSections.developmentNeeds[0]['_id'])\n                          .value != 1\"></textarea>\n                        <mat-error class=\"q-error\" *ngIf=\"\n                          formSubmmitted &&\n                          formGroup.get('developNeedsDesc').hasError('required')\n                        \">This field is mandatory\n                        </mat-error>\n                      </div>\n                    </div>\n                    <div class=\"questions-right\">\n                      <mat-radio-group aria-label=\"Select an option\" formControlName=\"{{ each['_id'] }}\"\n                        (change)=\"onDevelopValueChange($event)\">\n                        <mat-radio-button value=\"1\">Yes</mat-radio-button>\n                        <mat-radio-button value=\"2\">No</mat-radio-button>\n                      </mat-radio-group>\n                      <p class=\"hit-txt\">(if no or other then comment box)</p>\n                      <div class=\"dropdown-input\">\n                        <mat-select class=\"form-control\" formControlName=\"developFitmentDropdown\"\n                          placeholder=\"Select development area\" [disabled]=\"formGroup.get(questionSections.developmentNeeds[0]['_id'])\n                          .value != 1\">\n                          <mat-option *ngFor=\"let item of developmentAreaList\" [value]=\"item\">{{ item }}</mat-option>\n                        </mat-select>\n                        <mat-error class=\"q-error\" *ngIf=\"\n                          formSubmmitted &&\n                          formGroup.get('developFitmentDropdown').hasError('required')\n                        \">This field is mandatory\n                        </mat-error>\n                      </div>\n                    </div>\n                    <mat-error class=\"q-error\" *ngIf=\"\n                      formSubmmitted &&\n                      formGroup.get(each['_id']).hasError('required')\n                    \">This field is mandatory\n                    </mat-error>\n                  </ng-container>\n                  <!-- <div class=\"inner-question\" *ngIf=\"\n                    formGroup.get(questionSections.developmentNeeds[0]['_id'])\n                      .value == 1\n                  \">\n\n\n                  </div> -->\n                </div>\n              </div>\n            </div>\n\n            <div class=\"questions-sec\">\n              <span class=\"number-circle\">04</span>\n              <div class=\"question-content-sec\">\n                <div class=\"job-sec questions\">\n                  <h2>Job Fitment</h2>\n                  \n                    <mat-radio-group aria-label=\"Select an option\" formControlName=\"{{\n                        questionSections.jobFitment[0]['_id']\n                      }}\" (change)=\"onJobValueChange($event)\">\n                      <mat-radio-button value=\"1\">Right</mat-radio-button>\n                      <mat-radio-button value=\"2\">Wrong</mat-radio-button>\n                    </mat-radio-group>\n                    <mat-error class=\"q-error\" *ngIf=\"\n                        formSubmmitted &&\n                        formGroup\n                          .get(questionSections.jobFitment[0]['_id'])\n                          .hasError('required')\n                      \">This field is mandatory\n                    </mat-error>\n                  \n                </div>\n                <div class=\"questions ques-input\">\n                  <div>\n                    <textarea class=\"form-control\" [readonly]=\"formGroup.get(questionSections.jobFitment[0]['_id'])\n                    .value != 2\" formControlName=\"jobFitmentDesc\"></textarea>\n                    <mat-error class=\"q-error\" *ngIf=\"\n                        formSubmmitted &&\n                        formGroup.get('jobFitmentDesc').hasError('required')\n                      \">This field is mandatory\n                    </mat-error>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"questions-sec\">\n              <span class=\"number-circle\">05</span>\n              <div class=\"question-content-sec\">\n                <h2>Strengths</h2>\n                <div class=\"mult-fields\" *ngFor=\"let each of questionSections.strengths\">\n                  <ng-container formArrayName=\"{{ each['_id'] }}\">\n                    <div class=\"field-sec\">\n                      <textarea [formControlName]=\"0\" class=\"form-control\"\n                        placeholder=\"Illustrate Strength 1\"></textarea>\n                      <mat-error class=\"q-error\" *ngIf=\"\n                          formSubmmitted &&\n                          formGroup\n                            .get(each['_id'])\n                            .get('0')\n                            .hasError('required')\n                        \">This field is mandatory\n                      </mat-error>\n                    </div>\n                    <div class=\"field-sec\">\n                      <textarea [formControlName]=\"1\" class=\"form-control\"\n                        placeholder=\"Illustrate Strength 2\"></textarea>\n                      <mat-error class=\"q-error\" *ngIf=\"\n                          formSubmmitted &&\n                          formGroup\n                            .get(each['_id'])\n                            .get('1')\n                            .hasError('required')\n                        \">This field is mandatory\n                      </mat-error>\n                    </div>\n                    <div class=\"field-sec\">\n                      <textarea [formControlName]=\"2\" class=\"form-control\"\n                        placeholder=\"Illustrate Strength 3\"></textarea>\n                      <mat-error class=\"q-error\" *ngIf=\"\n                          formSubmmitted &&\n                          formGroup\n                            .get(each['_id'])\n                            .get('2')\n                            .hasError('required')\n                        \">This field is mandatory\n                      </mat-error>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"questions-sec\">\n              <span class=\"number-circle\">06</span>\n              <div class=\"question-content-sec\">\n                <h2>Weaknesses</h2>\n                <div class=\"mult-fields\" *ngFor=\"let each of questionSections.weaknesses\">\n                  <ng-container formArrayName=\"{{ each['_id'] }}\">\n                    <div class=\"field-sec\">\n                      <textarea [formControlName]=\"0\" class=\"form-control\"\n                        placeholder=\"Illustrate Weekness 1\"></textarea>\n                      <mat-error class=\"q-error\" *ngIf=\"\n                          formSubmmitted &&\n                          formGroup\n                            .get(each['_id'])\n                            .get('0')\n                            .hasError('required')\n                        \">This field is mandatory\n                      </mat-error>\n                    </div>\n                    <div class=\"field-sec\">\n                      <textarea [formControlName]=\"1\" class=\"form-control\"\n                        placeholder=\"Illustrate Weekness 2\"></textarea>\n                      <mat-error class=\"q-error\" *ngIf=\"\n                          formSubmmitted &&\n                          formGroup\n                            .get(each['_id'])\n                            .get('1')\n                            .hasError('required')\n                        \">This field is mandatory\n                      </mat-error>\n                    </div>\n                    <div class=\"field-sec\">\n                      <textarea [formControlName]=\"2\" class=\"form-control\"\n                        placeholder=\"Illustrate Weekness 3\"></textarea>\n                      <mat-error class=\"q-error\" *ngIf=\"\n                          formSubmmitted &&\n                          formGroup\n                            .get(each['_id'])\n                            .get('2')\n                            .hasError('required')\n                        \">This field is mandatory\n                      </mat-error>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n            </div>\n          </fieldset>\n          </ng-container>\n        </form>\n        <div class=\"right-side-footer\">\n          <!-- bg-white -->\n          <button class=\"custom-btn\" *ngIf=\"diableEditable\" (click)=\"makeEditable()\">Edit</button>\n          <button class=\"custom-btn white-btn\" *ngIf=\"!diableEditable\" (click)=\"diableEditable = !diableEditable\">Cancel</button>\n          <button class=\"custom-btn\" *ngIf=\"!diableEditable\" (click)=\"onFormSubmit()\">Submit</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"loader no-data\" *ngIf=\"loader\">\n      <mat-spinner></mat-spinner>\n    </div>\n  </div>\n  </mat-step>\n  </mat-horizontal-stepper>\n</div>\n");

/***/ }),

/***/ "./src/app/talent-review-questionnaire/talent-review-questionnaire-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/talent-review-questionnaire/talent-review-questionnaire-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: TalentReviewQuestionnaireRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentReviewQuestionnaireRoutingModule", function() { return TalentReviewQuestionnaireRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _talent_review_talent_review_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./talent-review/talent-review.component */ "./src/app/talent-review-questionnaire/talent-review/talent-review.component.ts");




const routes = [
    {
        path: '',
        component: _talent_review_talent_review_component__WEBPACK_IMPORTED_MODULE_3__["TalentReviewComponent"]
    }
];
let TalentReviewQuestionnaireRoutingModule = class TalentReviewQuestionnaireRoutingModule {
};
TalentReviewQuestionnaireRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TalentReviewQuestionnaireRoutingModule);



/***/ }),

/***/ "./src/app/talent-review-questionnaire/talent-review-questionnaire.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/talent-review-questionnaire/talent-review-questionnaire.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TalentReviewQuestionnaireModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentReviewQuestionnaireModule", function() { return TalentReviewQuestionnaireModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _talent_review_questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./talent-review-questionnaire-routing.module */ "./src/app/talent-review-questionnaire/talent-review-questionnaire-routing.module.ts");
/* harmony import */ var _talent_review_talent_review_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./talent-review/talent-review.component */ "./src/app/talent-review-questionnaire/talent-review/talent-review.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






let TalentReviewQuestionnaireModule = class TalentReviewQuestionnaireModule {
};
TalentReviewQuestionnaireModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_talent_review_talent_review_component__WEBPACK_IMPORTED_MODULE_4__["TalentReviewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _talent_review_questionnaire_routing_module__WEBPACK_IMPORTED_MODULE_3__["TalentReviewQuestionnaireRoutingModule"]
        ]
    })
], TalentReviewQuestionnaireModule);



/***/ }),

/***/ "./src/app/talent-review-questionnaire/talent-review.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/talent-review-questionnaire/talent-review.service.ts ***!
  \**********************************************************************/
/*! exports provided: TalentReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentReviewService", function() { return TalentReviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let TalentReviewService = class TalentReviewService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    getQuestionsBasedonUser() {
        let path = this.baseUrl + 'talent/getQuestionsBasedonUser';
        return this.http.post(path, '')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    saveQuestionsBasedonUser(body) {
        let path = this.baseUrl + 'talent/getInsertTalentReviewAnswers';
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
TalentReviewService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TalentReviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TalentReviewService);



/***/ }),

/***/ "./src/app/talent-review-questionnaire/talent-review/talent-review.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/talent-review-questionnaire/talent-review/talent-review.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".talent-review {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  overflow: hidden;\n}\n.talent-review .talent-leftsec {\n  width: 228px;\n  min-width: 228px;\n  border-right: 1px solid #ececec;\n  height: calc(100vh - 106px);\n  overflow: auto;\n  box-shadow: 4px 4px 16px #9ea9bf26;\n}\n.talent-review .talent-leftsec .review-list {\n  padding: 20px;\n  font-size: 12px;\n  display: flex;\n  flex-direction: row;\n  border-bottom: 1px solid #ececec;\n  border-left: 4px solid transparent;\n  position: relative;\n  cursor: pointer;\n}\n.talent-review .talent-leftsec .review-list .name-circle {\n  margin: 0;\n}\n.talent-review .talent-leftsec .review-list .arrow-right {\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  margin-top: -10px;\n  right: 10px;\n  font-size: 20px;\n}\n.talent-review .talent-leftsec .review-list.selected {\n  background: #dcecff;\n  border-left: 4px solid #0e71eb;\n  color: #0e71eb;\n}\n.talent-review .talent-leftsec .review-list.selected .arrow-right {\n  opacity: 1;\n}\n.talent-review .talent-leftsec .review-list:hover {\n  background: #dcecff;\n}\n.talent-review .talent-leftsec .review-list .r-sec {\n  padding-left: 15px;\n}\n.talent-review .talent-leftsec .review-list .r-sec .sec {\n  display: flex;\n  padding: 0;\n  font-size: 13px;\n  color: rgba(45, 45, 68, 0.45);\n  font-weight: 300;\n  align-items: center;\n  line-height: 19px;\n}\n.talent-review .talent-leftsec .review-list .r-sec .sec .mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  margin-left: -3px;\n  color: #d7d7d8;\n}\n.talent-review .talent-leftsec .review-list .r-sec .name {\n  font-size: 14px;\n  color: #26264d;\n  font-weight: 400;\n  margin-bottom: 2px;\n}\n.talent-review .talent-leftsec .review-list .icon {\n  width: 20%;\n}\n.talent-review .talent-contentsec {\n  overflow: auto;\n  width: 100%;\n  height: calc(100vh - 106px);\n}\n.talent-review .talent-contentsec .questions-sec {\n  display: flex;\n  flex-direction: row;\n  margin: 30px 24px;\n}\n.talent-review .talent-contentsec .questions-sec .mat-error {\n  display: none !important;\n}\n.talent-review .talent-contentsec .questions-sec textarea {\n  width: 100%;\n  padding: 5px;\n  margin-left: 20px;\n  height: 83px;\n  font-size: 13px;\n  font-weight: 300;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid rgba(38, 38, 77, 0.12);\n  border-radius: 5px;\n}\n.talent-review .talent-contentsec .questions-sec textarea:first-of-type {\n  margin: 0;\n}\n.talent-review .talent-contentsec .questions-sec .number-circle {\n  width: 38px;\n  height: 38px;\n  background: #e1e1e1 0% 0% no-repeat padding-box;\n  display: inline-block;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n  font-weight: 600;\n  margin-right: 24px;\n}\n.talent-review .talent-contentsec .questions-sec h2 {\n  letter-spacing: 0px;\n  color: #26264d;\n  opacity: 1;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n.talent-review .talent-contentsec .questions-sec .question-content-sec {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.talent-review .talent-contentsec .questions-sec .questions {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid rgba(38, 38, 77, 0.12);\n  padding: 13px 16px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.talent-review .talent-contentsec .questions-sec .questions.job-sec {\n  border: 0;\n  padding: 0px 16px;\n}\n.talent-review .talent-contentsec .questions-sec .questions.job-sec .mat-radio-group {\n  padding-bottom: 5px;\n}\n.talent-review .talent-contentsec .questions-sec .questions label {\n  text-align: left;\n  font-size: 13px;\n  margin: 0;\n  letter-spacing: 0px;\n  color: #26264d;\n}\n.talent-review .talent-contentsec .questions-sec .questions .mat-radio-group {\n  width: 315px;\n  text-align: left;\n}\n.talent-review .talent-contentsec .questions-sec .questions.ques-input {\n  border: 0;\n  padding: 0;\n}\n.talent-review .talent-contentsec .questions-sec .questions.ques-input div {\n  width: 100%;\n}\n.right-side-footer {\n  display: flex;\n  padding: 0px 24px;\n  justify-content: flex-end;\n  height: 60px;\n  align-items: center;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px -10px 25px #898d9533;\n}\n.right-side-footer .custom-btn:first-of-type {\n  margin-right: 10px;\n}\n.q-error {\n  display: flex;\n  justify-content: flex-end;\n}\n.dev-ques-sec {\n  border: 1px solid rgba(38, 38, 77, 0.12);\n  padding: 4px 0px;\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 16px;\n}\n.dev-ques-sec .questions-left {\n  display: flex;\n  flex-direction: column;\n  width: 65%;\n}\n.dev-ques-sec .questions-left label {\n  text-align: left;\n  font-size: 13px;\n  margin: 0;\n  letter-spacing: 0px;\n  color: #26264d;\n}\n.dev-ques-sec .questions-left .text-input {\n  margin: 24px 0px 10px;\n}\n.dev-ques-sec .questions-right {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 312px;\n}\n.dev-ques-sec .questions-right .hit-txt {\n  font-size: 12px;\n  font-weight: 300;\n  color: #26264D;\n  text-align: center;\n  margin: 5px 0px 5px 50px;\n}\n.dev-ques-sec .questions-right .mat-radio-group {\n  text-align: left;\n}\n.dev-ques-sec .questions-right .dropdown-input {\n  margin: 24px 0px;\n  height: 42px;\n}\n.dev-ques-sec .questions-right .dropdown-input mat-select {\n  height: 100%;\n  line-height: 28px;\n}\n.dev-ques-sec .inner-question {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 16px;\n}\n.mult-fields {\n  display: flex;\n  width: 100%;\n}\n.mult-fields .field-sec {\n  margin-left: 30px;\n  width: 100%;\n}\n.mult-fields .field-sec:first-of-type {\n  margin-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFsZW50LXJldmlldy1xdWVzdGlvbm5haXJlL3RhbGVudC1yZXZpZXcvRDpcXHdpbi1mcm9udGVuZC9zcmNcXGFwcFxcdGFsZW50LXJldmlldy1xdWVzdGlvbm5haXJlXFx0YWxlbnQtcmV2aWV3XFx0YWxlbnQtcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90YWxlbnQtcmV2aWV3LXF1ZXN0aW9ubmFpcmUvdGFsZW50LXJldmlldy90YWxlbnQtcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBRUEsMkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNBSjtBRENJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ047QURBTTtFQUNFLFNBQUE7QUNFUjtBREFNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNFUjtBREFNO0VBQ0UsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNFUjtBRERRO0VBQ0UsVUFBQTtBQ0dWO0FEQU07RUFDRSxtQkFBQTtBQ0VSO0FEQU07RUFDRSxrQkFBQTtBQ0VSO0FERFE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0dWO0FERlU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNJWjtBRERRO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDR1Y7QURBTTtFQUNFLFVBQUE7QUNFUjtBREVFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NOO0FEQU07RUFDRSx3QkFBQTtBQ0VSO0FEQU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQ0VSO0FERFE7RUFDRSxTQUFBO0FDR1Y7QURBTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQU07RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFUjtBREFNO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDRVI7QURDTTtFQUNFLCtDQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ1I7QURBUTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0VSO0FERFE7RUFDQyxtQkFBQTtBQ0dUO0FEQVE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDRVY7QURBUTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0VWO0FEQVE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ0VWO0FERFU7RUFDRSxXQUFBO0FDR1o7QURNQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQ0FBQTtBQ0hGO0FES0k7RUFDRSxrQkFBQTtBQ0hOO0FET0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUNKRjtBRE9BO0VBQ0Usd0NBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDSkY7QURLRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNISjtBRElJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZOO0FESUk7RUFDQyxxQkFBQTtBQ0ZMO0FES0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUVBLFlBQUE7QUNKSjtBREtJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QUNITjtBREtJO0VBQ0UsZ0JBQUE7QUNITjtBREtJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDSE47QURJTTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0ZSO0FETUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDSko7QURTQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDTkY7QURPRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0xKO0FETUk7RUFDRSxnQkFBQTtBQ0pOIiwiZmlsZSI6InNyYy9hcHAvdGFsZW50LXJldmlldy1xdWVzdGlvbm5haXJlL3RhbGVudC1yZXZpZXcvdGFsZW50LXJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWxlbnQtcmV2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC50YWxlbnQtbGVmdHNlYyB7XG4gICAgd2lkdGg6IDIyOHB4O1xuICAgIG1pbi13aWR0aDogMjI4cHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VjZWNlYztcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA2cHgpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDRweCA0cHggMTZweCAjOWVhOWJmMjY7XG4gICAgLnJldmlldy1saXN0IHtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWNlY2VjO1xuICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC5uYW1lLWNpcmNsZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5hcnJvdy1yaWdodCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkY2VjZmY7XG4gICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzBlNzFlYjtcbiAgICAgICAgY29sb3I6ICMwZTcxZWI7XG4gICAgICAgIC5hcnJvdy1yaWdodCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNkY2VjZmY7XG4gICAgICB9XG4gICAgICAuci1zZWMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIC5zZWMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoNDUsIDQ1LCA2OCwgMC40NSk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgICAgICAgICAgY29sb3I6ICNkN2Q3ZDg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6ICMyNjI2NGQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pY29uIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnRhbGVudC1jb250ZW50c2VjIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDZweCk7XG4gICAgLnF1ZXN0aW9ucy1zZWMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBtYXJnaW46IDMwcHggMjRweDtcbiAgICAgIC5tYXQtZXJyb3J7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIGhlaWdodDogODNweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzOCwgMzgsIDc3LCAwLjEyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLm51bWJlci1jaXJjbGUge1xuICAgICAgICB3aWR0aDogMzhweDtcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTFlMWUxIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICAgIH1cbiAgICAgIGgyIHtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgY29sb3I6ICMyNjI2NGQ7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgIH1cbiAgICAgIC5xdWVzdGlvbi1jb250ZW50LXNlYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAucXVlc3Rpb25zIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzgsIDM4LCA3NywgMC4xMik7XG4gICAgICAgIHBhZGRpbmc6IDEzcHggMTZweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAmLmpvYi1zZWMge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNnB4O1xuICAgICAgICAubWF0LXJhZGlvLWdyb3Vwe1xuICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgICAgICBjb2xvcjogIzI2MjY0ZDtcbiAgICAgICAgfVxuICAgICAgICAubWF0LXJhZGlvLWdyb3Vwe1xuICAgICAgICAgIHdpZHRoOiAzMTVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgICYucXVlcy1pbnB1dCB7XG4gICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgZGl2e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5yaWdodC1zaWRlLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDBweCAyNHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggLTEwcHggMjVweCAjODk4ZDk1MzM7XG4gIC5jdXN0b20tYnRue1xuICAgICY6Zmlyc3Qtb2YtdHlwZXtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cbn1cbi5xLWVycm9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmRldi1xdWVzLXNlY3tcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzOCwgMzgsIDc3LCAwLjEyKTtcbiAgcGFkZGluZzogNHB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIC5xdWVzdGlvbnMtbGVmdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDY1JTtcbiAgICBsYWJlbCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgICAgIGNvbG9yOiAjMjYyNjRkO1xuICAgIH1cbiAgICAudGV4dC1pbnB1dHtcbiAgICAgbWFyZ2luOjI0cHggMHB4IDEwcHg7XG4gICAgfVxuICB9XG4gIC5xdWVzdGlvbnMtcmlnaHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDM2cHg7XG4gICAgd2lkdGg6IDMxMnB4O1xuICAgIC5oaXQtdHh0e1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGNvbG9yOiAjMjYyNjREO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiA1cHggMHB4IDVweCA1MHB4O1xuICAgIH1cbiAgICAubWF0LXJhZGlvLWdyb3Vwe1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgLmRyb3Bkb3duLWlucHV0e1xuICAgICAgbWFyZ2luOiAyNHB4IDBweDtcbiAgICAgIGhlaWdodDogNDJweDtcbiAgICAgIG1hdC1zZWxlY3R7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5pbm5lci1xdWVzdGlvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweCAxNnB4O1xuICAgIFxuICAgXG4gIH1cbn1cbi5tdWx0LWZpZWxkc3tcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIC5maWVsZC1zZWN7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJjpmaXJzdC1vZi10eXBle1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICB9XG4gIH1cbn1cbiIsIi50YWxlbnQtcmV2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnRhbGVudC1yZXZpZXcgLnRhbGVudC1sZWZ0c2VjIHtcbiAgd2lkdGg6IDIyOHB4O1xuICBtaW4td2lkdGg6IDIyOHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWNlY2VjO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDZweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3gtc2hhZG93OiA0cHggNHB4IDE2cHggIzllYTliZjI2O1xufVxuLnRhbGVudC1yZXZpZXcgLnRhbGVudC1sZWZ0c2VjIC5yZXZpZXctbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWM7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhbGVudC1yZXZpZXcgLnRhbGVudC1sZWZ0c2VjIC5yZXZpZXctbGlzdCAubmFtZS1jaXJjbGUge1xuICBtYXJnaW46IDA7XG59XG4udGFsZW50LXJldmlldyAudGFsZW50LWxlZnRzZWMgLnJldmlldy1saXN0IC5hcnJvdy1yaWdodCB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICByaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnRhbGVudC1yZXZpZXcgLnRhbGVudC1sZWZ0c2VjIC5yZXZpZXctbGlzdC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNkY2VjZmY7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzBlNzFlYjtcbiAgY29sb3I6ICMwZTcxZWI7XG59XG4udGFsZW50LXJldmlldyAudGFsZW50LWxlZnRzZWMgLnJldmlldy1saXN0LnNlbGVjdGVkIC5hcnJvdy1yaWdodCB7XG4gIG9wYWNpdHk6IDE7XG59XG4udGFsZW50LXJldmlldyAudGFsZW50LWxlZnRzZWMgLnJldmlldy1saXN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2RjZWNmZjtcbn1cbi50YWxlbnQtcmV2aWV3IC50YWxlbnQtbGVmdHNlYyAucmV2aWV3LWxpc3QgLnItc2VjIHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLnRhbGVudC1yZXZpZXcgLnRhbGVudC1sZWZ0c2VjIC5yZXZpZXctbGlzdCAuci1zZWMgLnNlYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHJnYmEoNDUsIDQ1LCA2OCwgMC40NSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xufVxuLnRhbGVudC1yZXZpZXcgLnRhbGVudC1sZWZ0c2VjIC5yZXZpZXctbGlzdCAuci1zZWMgLnNlYyAubWF0LWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICBjb2xvcjogI2Q3ZDdkODtcbn1cbi50YWxlbnQtcmV2aWV3IC50YWxlbnQtbGVmdHNlYyAucmV2aWV3LWxpc3QgLnItc2VjIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzI2MjY0ZDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuLnRhbGVudC1yZXZpZXcgLnRhbGVudC1sZWZ0c2VjIC5yZXZpZXctbGlzdCAuaWNvbiB7XG4gIHdpZHRoOiAyMCU7XG59XG4udGFsZW50LXJldmlldyAudGFsZW50LWNvbnRlbnRzZWMge1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwNnB4KTtcbn1cbi50YWxlbnQtcmV2aWV3IC50YWxlbnQtY29udGVudHNlYyAucXVlc3Rpb25zLXNlYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMzBweCAyNHB4O1xufVxuLnRhbGVudC1yZXZpZXcgLnRhbGVudC1jb250ZW50c2VjIC5xdWVzdGlvbnMtc2VjIC5tYXQtZXJyb3Ige1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4udGFsZW50LXJldmlldyAudGFsZW50LWNvbnRlbnRzZWMgLnF1ZXN0aW9ucy1zZWMgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgaGVpZ2h0OiA4M3B4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDM4LCAzOCwgNzcsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4udGFsZW50LXJldmlldyAudGFsZW50LWNvbnRlbnRzZWMgLnF1ZXN0aW9ucy1zZWMgdGV4dGFyZWE6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbjogMDtcbn1cbi50YWxlbnQtcmV2aWV3IC50YWxlbnQtY29udGVudHNlYyAucXVlc3Rpb25zLXNlYyAubnVtYmVyLWNpcmNsZSB7XG4gIHdpZHRoOiAzOHB4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIGJhY2tncm91bmQ6ICNlMWUxZTEgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuLnRhbGVudC1yZXZpZXcgLnRhbGVudC1jb250ZW50c2VjIC5xdWVzdGlvbnMtc2VjIGgyIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgY29sb3I6ICMyNjI2NGQ7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi50YWxlbnQtcmV2aWV3IC50YWxlbnQtY29udGVudHNlYyAucXVlc3Rpb25zLXNlYyAucXVlc3Rpb24tY29udGVudC1zZWMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cbi50YWxlbnQtcmV2aWV3IC50YWxlbnQtY29udGVudHNlYyAucXVlc3Rpb25zLXNlYyAucXVlc3Rpb25zIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzgsIDM4LCA3NywgMC4xMik7XG4gIHBhZGRpbmc6IDEzcHggMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRhbGVudC1yZXZpZXcgLnRhbGVudC1jb250ZW50c2VjIC5xdWVzdGlvbnMtc2VjIC5xdWVzdGlvbnMuam9iLXNlYyB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG59XG4udGFsZW50LXJldmlldyAudGFsZW50LWNvbnRlbnRzZWMgLnF1ZXN0aW9ucy1zZWMgLnF1ZXN0aW9ucy5qb2Itc2VjIC5tYXQtcmFkaW8tZ3JvdXAge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLnRhbGVudC1yZXZpZXcgLnRhbGVudC1jb250ZW50c2VjIC5xdWVzdGlvbnMtc2VjIC5xdWVzdGlvbnMgbGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgY29sb3I6ICMyNjI2NGQ7XG59XG4udGFsZW50LXJldmlldyAudGFsZW50LWNvbnRlbnRzZWMgLnF1ZXN0aW9ucy1zZWMgLnF1ZXN0aW9ucyAubWF0LXJhZGlvLWdyb3VwIHtcbiAgd2lkdGg6IDMxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRhbGVudC1yZXZpZXcgLnRhbGVudC1jb250ZW50c2VjIC5xdWVzdGlvbnMtc2VjIC5xdWVzdGlvbnMucXVlcy1pbnB1dCB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi50YWxlbnQtcmV2aWV3IC50YWxlbnQtY29udGVudHNlYyAucXVlc3Rpb25zLXNlYyAucXVlc3Rpb25zLnF1ZXMtaW5wdXQgZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yaWdodC1zaWRlLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDBweCAyNHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggLTEwcHggMjVweCAjODk4ZDk1MzM7XG59XG4ucmlnaHQtc2lkZS1mb290ZXIgLmN1c3RvbS1idG46Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnEtZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uZGV2LXF1ZXMtc2VjIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzOCwgMzgsIDc3LCAwLjEyKTtcbiAgcGFkZGluZzogNHB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG59XG4uZGV2LXF1ZXMtc2VjIC5xdWVzdGlvbnMtbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA2NSU7XG59XG4uZGV2LXF1ZXMtc2VjIC5xdWVzdGlvbnMtbGVmdCBsYWJlbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAwO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBjb2xvcjogIzI2MjY0ZDtcbn1cbi5kZXYtcXVlcy1zZWMgLnF1ZXN0aW9ucy1sZWZ0IC50ZXh0LWlucHV0IHtcbiAgbWFyZ2luOiAyNHB4IDBweCAxMHB4O1xufVxuLmRldi1xdWVzLXNlYyAucXVlc3Rpb25zLXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMzEycHg7XG59XG4uZGV2LXF1ZXMtc2VjIC5xdWVzdGlvbnMtcmlnaHQgLmhpdC10eHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMjYyNjREO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4IDBweCA1cHggNTBweDtcbn1cbi5kZXYtcXVlcy1zZWMgLnF1ZXN0aW9ucy1yaWdodCAubWF0LXJhZGlvLWdyb3VwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kZXYtcXVlcy1zZWMgLnF1ZXN0aW9ucy1yaWdodCAuZHJvcGRvd24taW5wdXQge1xuICBtYXJnaW46IDI0cHggMHB4O1xuICBoZWlnaHQ6IDQycHg7XG59XG4uZGV2LXF1ZXMtc2VjIC5xdWVzdGlvbnMtcmlnaHQgLmRyb3Bkb3duLWlucHV0IG1hdC1zZWxlY3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuLmRldi1xdWVzLXNlYyAuaW5uZXItcXVlc3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxNnB4O1xufVxuXG4ubXVsdC1maWVsZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5tdWx0LWZpZWxkcyAuZmllbGQtc2VjIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm11bHQtZmllbGRzIC5maWVsZC1zZWM6Zmlyc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/talent-review-questionnaire/talent-review/talent-review.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/talent-review-questionnaire/talent-review/talent-review.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TalentReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalentReviewComponent", function() { return TalentReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _talent_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../talent-review.service */ "./src/app/talent-review-questionnaire/talent-review.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authentication/auth.service */ "./src/app/authentication/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let TalentReviewComponent = class TalentReviewComponent {
    constructor(auth, service, router) {
        this.auth = auth;
        this.service = service;
        this.router = router;
        this.userListLoaded = false;
        this.loader = true;
        this.usersList = [];
        this.questionSections = {
            performance: [],
            attrition: [],
            developmentNeeds: [],
            jobFitment: [],
            strengths: [],
            weaknesses: [],
        };
        this.formSubmmitted = false;
        this.diableEditable = false;
        this.developmentAreaList = [
            "Adaptability",
            "Analytical Skills",
            "Collaboration",
            "Communication skills",
            "Creativity",
            "Decision Making",
            "Delegation",
            "Empower Others",
            "Industry Knowledge",
            "Interpersonal skills",
            "Planning and Organizing",
            "Process Knowledge",
            "Product knowledge",
            "Technical skills",
            "Others",
        ];
        this.allowRedirection = false;
    }
    ngOnInit() {
        this.getQuestionsBasedonUser();
    }
    getQuestionsBasedonUser() {
        this.service.getQuestionsBasedonUser().subscribe((res) => {
            console.log(res);
            this.userListLoaded = true;
            if (res && res.success && res.data) {
                this.usersList = res.data;
                this.createForm(this.usersList[0]);
                this.onSelect(this.usersList[0], 0);
                this.loader = false;
            }
        }, (err) => {
            console.log("HTTP Error", err);
        });
    }
    createForm(row) {
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            developNeedsDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
            jobFitmentDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
            developFitmentDropdown: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
        });
        row.questions.map((each) => {
            if (["Strengths", "Weaknesses"].includes(each.category)) {
                this.formGroup.addControl(each["_id"], new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]().array([
                    new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
                    new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
                    new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, []),
                ]));
            }
            else {
                this.formGroup.addControl(each["_id"], new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]));
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
                if (each.category == "Probability of attrition" ||
                    each.category == "Impact of Attrition") {
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
                        }
                        else if (li.length == 2) {
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
                        }
                        else if (li.length == 2) {
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
                        desc: this.formGroup.value[each["_id"]] == "1"
                            ? [
                                this.formGroup.value.developNeedsDesc,
                                this.formGroup.value.developFitmentDropdown,
                            ]
                            : [],
                    });
                }
                else if (each.category == "Job Fitment") {
                    params.answers.push({
                        answerId: each["answerId"],
                        qid: each["_id"],
                        answer: this.formGroup.value[each["_id"]],
                        desc: this.formGroup.value[each["_id"]] == "1"
                            ? [this.formGroup.value.jobFitmentDesc]
                            : [],
                    });
                }
                else if (["Strengths", "Weaknesses"].includes(each.category)) {
                    params.answers.push({
                        answerId: each["answerId"],
                        qid: each["_id"],
                        answer: "1",
                        desc: this.formGroup.value[each["_id"]],
                    });
                }
                else {
                    params.answers.push({
                        answerId: each["answerId"],
                        qid: each["_id"],
                        answer: this.formGroup.value[each["_id"]],
                        desc: [],
                    });
                }
            });
            this.service.saveQuestionsBasedonUser(params).subscribe((res) => {
                console.log(res);
                if (res && res.data) {
                    let msg = "Sucessfully submitted";
                    this.auth.openConfirmDialog(msg, "error", "autoClose");
                    this.usersList = res.data;
                    if (this.allowRedirection || this.selectedIndex + 1 == this.usersList.length) {
                        this.checkRedirection();
                    }
                    else {
                        this.onSelect(this.usersList[this.selectedIndex + 1], this.selectedIndex + 1);
                    }
                    this.loader = false;
                }
            }, (err) => {
                console.log("HTTP Error", err);
            });
        }
        else {
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
        }
        else {
            this.formGroup.get("jobFitmentDesc").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
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
        }
        else {
            this.formGroup
                .get("developNeedsDesc")
                .setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            this.formGroup.get("developNeedsDesc").updateValueAndValidity();
            this.formGroup
                .get("developFitmentDropdown")
                .setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            this.formGroup.get("developFitmentDropdown").updateValueAndValidity();
        }
    }
    makeEditable() {
        this.diableEditable = false;
    }
    checkRedirection() {
        // this.allowRedirection
        let allUsersFillted = this.usersList.every((each) => each.questions[0]["value"] != undefined);
        if (allUsersFillted) {
            console.log('all empolyee reviews are done');
        }
    }
};
TalentReviewComponent.ctorParameters = () => [
    { type: src_app_authentication_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _talent_review_service__WEBPACK_IMPORTED_MODULE_2__["TalentReviewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
TalentReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-talent-review",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./talent-review.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/talent-review-questionnaire/talent-review/talent-review.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./talent-review.component.scss */ "./src/app/talent-review-questionnaire/talent-review/talent-review.component.scss")).default]
    })
], TalentReviewComponent);



/***/ })

}]);
//# sourceMappingURL=talent-review-questionnaire-talent-review-questionnaire-module.js.map