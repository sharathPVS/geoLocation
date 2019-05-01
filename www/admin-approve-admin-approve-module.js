(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-approve-admin-approve-module"],{

/***/ "./src/app/admin-approve/admin-approve.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin-approve/admin-approve.module.ts ***!
  \*******************************************************/
/*! exports provided: adminApprovePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminApprovePageModule", function() { return adminApprovePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _admin_approve_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-approve.page */ "./src/app/admin-approve/admin-approve.page.ts");







var routes = [
    {
        path: '',
        component: _admin_approve_page__WEBPACK_IMPORTED_MODULE_6__["adminApprove"]
    }
];
var adminApprovePageModule = /** @class */ (function () {
    function adminApprovePageModule() {
    }
    adminApprovePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_admin_approve_page__WEBPACK_IMPORTED_MODULE_6__["adminApprove"]]
        })
    ], adminApprovePageModule);
    return adminApprovePageModule;
}());



/***/ }),

/***/ "./src/app/admin-approve/admin-approve.page.html":
/*!*******************************************************!*\
  !*** ./src/app/admin-approve/admin-approve.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>  <ion-button color=\"primary\" style=\"float: right;\"  (click)=\"goBack()\"> Logout</ion-button> </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <p style=\"color:green\" > {{userMessage}}</p>\n   \n    <table>\n        <thead>\n        <tr>\n          <th>Name</th>\n          <th>Phone</th>\n          <th>Email</th>\n          <th>Company</th>\n          <th>Status</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of adminData\">\n         <td> {{item.name}}</td>\n         <td> {{item.phone}}</td>\n         <td>{{item.email}}</td>\n         <td>{{item.company}}</td>\n         <td><ion-button color=\"success\" (click)=\"statusChange(item)\">{{item.state}}</ion-button></td>\n        </tr>\n        </tbody>\n      </table>\n    \n</ion-content>"

/***/ }),

/***/ "./src/app/admin-approve/admin-approve.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/admin-approve/admin-approve.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \n\tGeneric Styling, for Desktops/Laptops \n\t*/\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n/* Zebra striping */\ntr:nth-of-type(odd) {\n  background: #eee; }\nth {\n  background: #333;\n  color: white;\n  font-weight: bold; }\ntd, th {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left; }\n/*\n\tMax width before this PARTICULAR table gets nasty\n\tThis query will take effect for any screen smaller than 760px\n\tand also iPads specifically.\n\t*/\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  /* Force table to not be like tables anymore */\n  table, thead, tbody, th, td, tr {\n    display: block; }\n  /* Hide table headers (but not display: none;, for accessibility) */\n  thead tr {\n    position: absolute;\n    top: -9999px;\n    left: -9999px; }\n  tr {\n    border: 1px solid #ccc; }\n  td {\n    /* Behave  like a \"row\" */\n    border: none;\n    border-bottom: 1px solid #eee;\n    position: relative;\n    padding-left: 0%; }\n  td:before {\n    /* Now like a table header */\n    position: relative;\n    /* Top/left values mimic padding */\n    top: 0px;\n    left: 6px;\n    width: 45%;\n    padding-right: 10px;\n    white-space: nowrap; }\n  /*\n\t\tLabel the data\n\t\t*/\n  td:nth-of-type(1) {\n    font-weight: bold;\n    font-size: 150%;\n    margin-top: 5px; }\n  td:nth-of-type(1):before {\n    content: \"Name:\"; }\n  td:nth-of-type(2):before {\n    content: \"Phone:\"; }\n  td:nth-of-type(3):before {\n    content: \"Email:\"; }\n  td:nth-of-type(4):before {\n    content: \"Company:\"; } }\n/* Smartphones (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  body {\n    padding: 0;\n    margin: 0;\n    width: 320px; } }\n/* iPads (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  body {\n    width: 495px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZGhha3Jpc2huYS9Eb2N1bWVudHMvTXlXb3Jrcy9PZmZpY2VMb2NhbEhvc3QvbXlPZmZpY2VXb3Jrcy9zdHVmZjIvZ2VvTG9jYXRpb24vc3JjL2FwcC9hZG1pbi1hcHByb3ZlL2FkbWluLWFwcHJvdmUucGFnZS5zY3NzIiwic3JjL2FwcC9hZG1pbi1hcHByb3ZlL2FkbWluLWFwcHJvdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDOztFQ0VDO0FEQ0Q7RUFDQyxXQUFXO0VBQ1gseUJBQXlCLEVBQUE7QUFFMUIsbUJBQUE7QUFDQTtFQUNDLGdCQUFnQixFQUFBO0FBRWpCO0VBQ0MsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTtBQUVsQjtFQUNDLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7QUFJakI7Ozs7RUNFQztBREdEO0VBSUMsOENBQUE7RUFDQTtJQUNDLGNBQWMsRUFBQTtFQUdmLG1FQUFBO0VBQ0E7SUFDQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUdkO0lBQUssc0JBQXNCLEVBQUE7RUFFM0I7SUFDQyx5QkFBQTtJQUNBLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBR2pCO0lBQ0MsNEJBQUE7SUFDQSxrQkFBa0I7SUFDbEIsa0NBQUE7SUFDQSxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7RUFHcEI7O0dDWEM7RURjRDtJQUFvQixpQkFBZ0I7SUFBQyxlQUFjO0lBQUMsZUFBYyxFQUFBO0VBQ2hFO0lBQTJCLGdCQUFnQixFQUFBO0VBQzdDO0lBQTJCLGlCQUFpQixFQUFBO0VBQzVDO0lBQTJCLGlCQUFpQixFQUFBO0VBQzVDO0lBQTJCLG1CQUFtQixFQUFBLEVBQUk7QUFHbkQscURBQUE7QUFDQTtFQUdDO0lBQ0MsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZLEVBQUEsRUFBRztBQUdqQiwrQ0FBQTtBQUNBO0VBQ0M7SUFDQyxZQUFZLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWFwcHJvdmUvYWRtaW4tYXBwcm92ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcdC8qIFxuXHRHZW5lcmljIFN0eWxpbmcsIGZvciBEZXNrdG9wcy9MYXB0b3BzIFxuXHQqL1xuXHR0YWJsZSB7IFxuXHRcdHdpZHRoOiAxMDAlOyBcblx0XHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBcblx0fVxuXHQvKiBaZWJyYSBzdHJpcGluZyAqL1xuXHR0cjpudGgtb2YtdHlwZShvZGQpIHsgXG5cdFx0YmFja2dyb3VuZDogI2VlZTsgXG5cdH1cblx0dGggeyBcblx0XHRiYWNrZ3JvdW5kOiAjMzMzOyBcblx0XHRjb2xvcjogd2hpdGU7IFxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkOyBcblx0fVxuXHR0ZCwgdGggeyBcblx0XHRwYWRkaW5nOiA2cHg7IFxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxuXHRcdHRleHQtYWxpZ246IGxlZnQ7IFxuXHR9XG5cblxuXHQvKlxuXHRNYXggd2lkdGggYmVmb3JlIHRoaXMgUEFSVElDVUxBUiB0YWJsZSBnZXRzIG5hc3R5XG5cdFRoaXMgcXVlcnkgd2lsbCB0YWtlIGVmZmVjdCBmb3IgYW55IHNjcmVlbiBzbWFsbGVyIHRoYW4gNzYwcHhcblx0YW5kIGFsc28gaVBhZHMgc3BlY2lmaWNhbGx5LlxuXHQqL1xuXHRAbWVkaWFcblx0b25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSxcblx0KG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgIHtcblxuXHRcdC8qIEZvcmNlIHRhYmxlIHRvIG5vdCBiZSBsaWtlIHRhYmxlcyBhbnltb3JlICovXG5cdFx0dGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR9XG5cblx0XHQvKiBIaWRlIHRhYmxlIGhlYWRlcnMgKGJ1dCBub3QgZGlzcGxheTogbm9uZTssIGZvciBhY2Nlc3NpYmlsaXR5KSAqL1xuXHRcdHRoZWFkIHRyIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogLTk5OTlweDtcblx0XHRcdGxlZnQ6IC05OTk5cHg7XG5cdFx0fVxuXG5cdFx0dHIgeyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyB9XG5cblx0XHR0ZCB7XG5cdFx0XHQvKiBCZWhhdmUgIGxpa2UgYSBcInJvd1wiICovXG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHBhZGRpbmctbGVmdDogMCU7XG5cdFx0fVxuXG5cdFx0dGQ6YmVmb3JlIHtcblx0XHRcdC8qIE5vdyBsaWtlIGEgdGFibGUgaGVhZGVyICovXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHQvKiBUb3AvbGVmdCB2YWx1ZXMgbWltaWMgcGFkZGluZyAqL1xuXHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRsZWZ0OiA2cHg7XG5cdFx0XHR3aWR0aDogNDUlO1xuXHRcdFx0cGFkZGluZy1yaWdodDogMTBweDtcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0fVxuXG5cdFx0Lypcblx0XHRMYWJlbCB0aGUgZGF0YVxuXHRcdCovXG5cdFx0dGQ6bnRoLW9mLXR5cGUoMSkgeyBmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxNTAlO21hcmdpbi10b3A6NXB4OyB9XG4gICAgdGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHsgY29udGVudDogXCJOYW1lOlwiOyB9XG5cdFx0dGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHsgY29udGVudDogXCJQaG9uZTpcIjsgfVxuXHRcdHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiRW1haWw6XCI7IH1cblx0XHR0ZDpudGgtb2YtdHlwZSg0KTpiZWZvcmUgeyBjb250ZW50OiBcIkNvbXBhbnk6XCI7IH1cblx0fVxuXG5cdC8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuXHRAbWVkaWEgb25seSBzY3JlZW5cblx0YW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG5cdGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSB7XG5cdFx0Ym9keSB7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0d2lkdGg6IDMyMHB4OyB9XG5cdFx0fVxuXG5cdC8qIGlQYWRzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuXHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcblx0XHRib2R5IHtcblx0XHRcdHdpZHRoOiA0OTVweDtcblx0XHR9XG5cdH0iLCIvKiBcblx0R2VuZXJpYyBTdHlsaW5nLCBmb3IgRGVza3RvcHMvTGFwdG9wcyBcblx0Ki9cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IH1cblxuLyogWmVicmEgc3RyaXBpbmcgKi9cbnRyOm50aC1vZi10eXBlKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZWVlOyB9XG5cbnRoIHtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG50ZCwgdGgge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLypcblx0TWF4IHdpZHRoIGJlZm9yZSB0aGlzIFBBUlRJQ1VMQVIgdGFibGUgZ2V0cyBuYXN0eVxuXHRUaGlzIHF1ZXJ5IHdpbGwgdGFrZSBlZmZlY3QgZm9yIGFueSBzY3JlZW4gc21hbGxlciB0aGFuIDc2MHB4XG5cdGFuZCBhbHNvIGlQYWRzIHNwZWNpZmljYWxseS5cblx0Ki9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIC8qIEZvcmNlIHRhYmxlIHRvIG5vdCBiZSBsaWtlIHRhYmxlcyBhbnltb3JlICovXG4gIHRhYmxlLCB0aGVhZCwgdGJvZHksIHRoLCB0ZCwgdHIge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC8qIEhpZGUgdGFibGUgaGVhZGVycyAoYnV0IG5vdCBkaXNwbGF5OiBub25lOywgZm9yIGFjY2Vzc2liaWxpdHkpICovXG4gIHRoZWFkIHRyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOTk5OXB4O1xuICAgIGxlZnQ6IC05OTk5cHg7IH1cbiAgdHIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IH1cbiAgdGQge1xuICAgIC8qIEJlaGF2ZSAgbGlrZSBhIFwicm93XCIgKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMCU7IH1cbiAgdGQ6YmVmb3JlIHtcbiAgICAvKiBOb3cgbGlrZSBhIHRhYmxlIGhlYWRlciAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBUb3AvbGVmdCB2YWx1ZXMgbWltaWMgcGFkZGluZyAqL1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDZweDtcbiAgICB3aWR0aDogNDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAvKlxuXHRcdExhYmVsIHRoZSBkYXRhXG5cdFx0Ki9cbiAgdGQ6bnRoLW9mLXR5cGUoMSkge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7IH1cbiAgdGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIk5hbWU6XCI7IH1cbiAgdGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlBob25lOlwiOyB9XG4gIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJFbWFpbDpcIjsgfVxuICB0ZDpudGgtb2YtdHlwZSg0KTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiQ29tcGFueTpcIjsgfSB9XG5cbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDMyMHB4OyB9IH1cblxuLyogaVBhZHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgYm9keSB7XG4gICAgd2lkdGg6IDQ5NXB4OyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin-approve/admin-approve.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin-approve/admin-approve.page.ts ***!
  \*****************************************************/
/*! exports provided: adminApprove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminApprove", function() { return adminApprove; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiService */ "./src/app/apiService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factories/globalFactories */ "./src/app/factories/globalFactories.ts");






var adminApprove = /** @class */ (function () {
    function adminApprove(http, router) {
        this.http = http;
        this.router = router;
        if (!_factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["logOutfactory"].getAdminLoginFactory()) {
            this.router.navigateByUrl('/home');
        }
    }
    adminApprove.prototype.ngOnInit = function () {
        this.getAllData();
    };
    adminApprove.prototype.statusChange = function (val) {
        var _this = this;
        val.state = (val.state == "inActive") ? 'active' : 'inActive';
        //console.log(val);
        this.http.put(_apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].updateLogin + '?collection=dblogins', val).subscribe(function (data) {
            console.log(data);
            _this.getAllData();
        }, function (error) {
            console.log(error);
        });
    };
    adminApprove.prototype.getAllData = function () {
        var _this = this;
        this.userMessage = ' Kindly wait we are preparng the Client List ........ ';
        this.http.get(_apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].getllDocsForAdminApproveOrReject + '?collection=dblogins').subscribe(function (data) {
            _this.handleData = data;
            // console.log(this.handleData);
            if (_this.handleData.length == 0) {
                _this.userMessage = " oops! no records are found.";
            }
            else {
                _this.userMessage = '';
                _this.adminData = _this.handleData.message;
                // console.log('final Data', this.adminData[0].name);
            }
        });
    };
    adminApprove.prototype.goBack = function () {
        this.router.navigateByUrl('/home');
    };
    adminApprove = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-approve',
            template: __webpack_require__(/*! ./admin-approve.page.html */ "./src/app/admin-approve/admin-approve.page.html"),
            styles: [__webpack_require__(/*! ./admin-approve.page.scss */ "./src/app/admin-approve/admin-approve.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], adminApprove);
    return adminApprove;
}());



/***/ })

}]);
//# sourceMappingURL=admin-approve-admin-approve-module.js.map