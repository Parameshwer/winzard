(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hr-hr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/dashboard/dashboard.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr/dashboard/dashboard.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-main-container\">\n    <app-header></app-header>\n    <div class=\"app-container\">\n            <router-outlet></router-outlet>\n    </div>\n\n</div>");

/***/ }),

/***/ "./src/app/hr/dashboard/dashboard.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/hr/dashboard/dashboard.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/hr/dashboard/dashboard.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/hr/dashboard/dashboard.component.ts ***!
  \*****************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/hr/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/hr/hr-routing.module.ts":
/*!*****************************************!*\
  !*** ./src/app/hr/hr-routing.module.ts ***!
  \*****************************************/
/*! exports provided: HrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrRoutingModule", function() { return HrRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/hr/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/tasks/tasks.component */ "./src/app/shared/components/tasks/tasks.component.ts");





const routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        children: [
            {
                path: '',
                component: _shared_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"],
            },
            {
                path: 'orgWIN',
                loadChildren: () => Promise.all(/*! import() | org-win-org-win-module */[__webpack_require__.e("default~insights-insights-module~org-win-org-win-module"), __webpack_require__.e("org-win-org-win-module")]).then(__webpack_require__.bind(null, /*! ./org-win/org-win.module */ "./src/app/hr/org-win/org-win.module.ts")).then(m => m.OrgWINModule)
            },
            {
                path: 'teamWIN',
                loadChildren: () => __webpack_require__.e(/*! import() | team-win-team-win-module */ "team-win-team-win-module").then(__webpack_require__.bind(null, /*! ./team-win/team-win.module */ "./src/app/hr/team-win/team-win.module.ts")).then(m => m.TeamWinModule)
            },
            {
                path: 'insights',
                loadChildren: () => Promise.all(/*! import() | insights-insights-module */[__webpack_require__.e("default~insights-insights-module~org-win-org-win-module"), __webpack_require__.e("insights-insights-module")]).then(__webpack_require__.bind(null, /*! ../insights/insights.module */ "./src/app/insights/insights.module.ts")).then(m => m.InsightsModule)
            },
            {
                path: 'talentReview',
                loadChildren: () => __webpack_require__.e(/*! import() | talent-review-questionnaire-talent-review-questionnaire-module */ "talent-review-questionnaire-talent-review-questionnaire-module").then(__webpack_require__.bind(null, /*! ../talent-review-questionnaire/talent-review-questionnaire.module */ "./src/app/talent-review-questionnaire/talent-review-questionnaire.module.ts")).then(m => m.TalentReviewQuestionnaireModule)
            }
        ]
    },
];
let HrRoutingModule = class HrRoutingModule {
};
HrRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HrRoutingModule);



/***/ }),

/***/ "./src/app/hr/hr.module.ts":
/*!*********************************!*\
  !*** ./src/app/hr/hr.module.ts ***!
  \*********************************/
/*! exports provided: HrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrModule", function() { return HrModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _hr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hr-routing.module */ "./src/app/hr/hr-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/hr/dashboard/dashboard.component.ts");






let HrModule = class HrModule {
};
HrModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _hr_routing_module__WEBPACK_IMPORTED_MODULE_3__["HrRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]
    })
], HrModule);



/***/ })

}]);
//# sourceMappingURL=hr-hr-module.js.map