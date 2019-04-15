(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sim-data-sim-data-module"],{

/***/ "./src/app/sim-data/sim-data.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sim-data/sim-data.module.ts ***!
  \*********************************************/
/*! exports provided: SimDataPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimDataPageModule", function() { return SimDataPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sim_data_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sim-data.page */ "./src/app/sim-data/sim-data.page.ts");







var routes = [
    {
        path: '',
        component: _sim_data_page__WEBPACK_IMPORTED_MODULE_6__["SimDataPage"]
    }
];
var SimDataPageModule = /** @class */ (function () {
    function SimDataPageModule() {
    }
    SimDataPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sim_data_page__WEBPACK_IMPORTED_MODULE_6__["SimDataPage"]]
        })
    ], SimDataPageModule);
    return SimDataPageModule;
}());



/***/ }),

/***/ "./src/app/sim-data/sim-data.page.html":
/*!*********************************************!*\
  !*** ./src/app/sim-data/sim-data.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>simData</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<p>\n  Click the button to get sim info\n  </p>\n  \n  <button ion-button full (click)=\"getSimData()\">get info</button>\n \n  <ion-list *ngIf=\"simInfo\">\n    <ion-item  ><b>countryCode</b> {{ simInfo.countryCode }}</ion-item>  \n  </ion-list>\n  <ion-card  *ngFor= \"let card of cards\" >\n    <ion-card-header>\n      {{card.carrierName}}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item><b>simSlotIndex</b> {{ card.simSlotIndex }}</ion-item>  \n        <ion-item><b>displayName</b> {{ card.displayName }}</ion-item>  \n        <ion-item><b>isNetworkRoaming</b> {{ card.isNetworkRoaming }}</ion-item>  \n        <ion-item><b>isDataRoaming</b> {{ card.isDataRoaming }}</ion-item>  \n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/sim-data/sim-data.page.scss":
/*!*********************************************!*\
  !*** ./src/app/sim-data/sim-data.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbS1kYXRhL3NpbS1kYXRhLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sim-data/sim-data.page.ts":
/*!*******************************************!*\
  !*** ./src/app/sim-data/sim-data.page.ts ***!
  \*******************************************/
/*! exports provided: SimDataPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimDataPage", function() { return SimDataPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//import { Sim } from '@ionic-native/sim/ngx';
var SimDataPage = /** @class */ (function () {
    function SimDataPage() {
    }
    SimDataPage.prototype.ngOnInit = function () {
        alert('inated');
    };
    SimDataPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sim-data',
            template: __webpack_require__(/*! ./sim-data.page.html */ "./src/app/sim-data/sim-data.page.html"),
            styles: [__webpack_require__(/*! ./sim-data.page.scss */ "./src/app/sim-data/sim-data.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SimDataPage);
    return SimDataPage;
}());



/***/ })

}]);
//# sourceMappingURL=sim-data-sim-data-module.js.map