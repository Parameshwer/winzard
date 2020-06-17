(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-win-team-win-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/team-win/team-win/team-win.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hr/team-win/team-win/team-win.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-inner-container\">\n  <div class=\"page-container\">\n      <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/hr/team-win/team-win-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/hr/team-win/team-win-routing.module.ts ***!
  \********************************************************/
/*! exports provided: TeamWinRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamWinRoutingModule", function() { return TeamWinRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _team_win_team_win_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-win/team-win.component */ "./src/app/hr/team-win/team-win/team-win.component.ts");




const routes = [
    {
        path: '',
        component: _team_win_team_win_component__WEBPACK_IMPORTED_MODULE_3__["TeamWinComponent"],
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | talent-review-questionnaire-talent-review-questionnaire-module */ "talent-review-questionnaire-talent-review-questionnaire-module").then(__webpack_require__.bind(null, /*! ../../talent-review-questionnaire/talent-review-questionnaire.module */ "./src/app/talent-review-questionnaire/talent-review-questionnaire.module.ts"))
                    .then(x => x.TalentReviewQuestionnaireModule)
            }
        ]
    },
];
let TeamWinRoutingModule = class TeamWinRoutingModule {
};
TeamWinRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TeamWinRoutingModule);



/***/ }),

/***/ "./src/app/hr/team-win/team-win.module.ts":
/*!************************************************!*\
  !*** ./src/app/hr/team-win/team-win.module.ts ***!
  \************************************************/
/*! exports provided: TeamWinModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamWinModule", function() { return TeamWinModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _team_win_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-win-routing.module */ "./src/app/hr/team-win/team-win-routing.module.ts");
/* harmony import */ var _team_win_team_win_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./team-win/team-win.component */ "./src/app/hr/team-win/team-win/team-win.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






let TeamWinModule = class TeamWinModule {
};
TeamWinModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_team_win_team_win_component__WEBPACK_IMPORTED_MODULE_4__["TeamWinComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _team_win_routing_module__WEBPACK_IMPORTED_MODULE_3__["TeamWinRoutingModule"]
        ]
    })
], TeamWinModule);



/***/ }),

/***/ "./src/app/hr/team-win/team-win/team-win.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/hr/team-win/team-win/team-win.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hyL3RlYW0td2luL3RlYW0td2luL3RlYW0td2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/hr/team-win/team-win/team-win.component.ts":
/*!************************************************************!*\
  !*** ./src/app/hr/team-win/team-win/team-win.component.ts ***!
  \************************************************************/
/*! exports provided: TeamWinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamWinComponent", function() { return TeamWinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeamWinComponent = class TeamWinComponent {
    constructor() { }
    ngOnInit() {
    }
};
TeamWinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-win',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team-win.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hr/team-win/team-win/team-win.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team-win.component.scss */ "./src/app/hr/team-win/team-win/team-win.component.scss")).default]
    })
], TeamWinComponent);



/***/ })

}]);
//# sourceMappingURL=team-win-team-win-module.js.map