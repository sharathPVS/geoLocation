(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor-dashbord-vendor-dashbord-module"],{

/***/ "./src/app/vendor-dashbord/vendor-dashbord.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/vendor-dashbord/vendor-dashbord.module.ts ***!
  \***********************************************************/
/*! exports provided: vendorDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vendorDashboard", function() { return vendorDashboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vendor_dashbord_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vendor-dashbord.page */ "./src/app/vendor-dashbord/vendor-dashbord.page.ts");







var routes = [
    {
        path: '',
        component: _vendor_dashbord_page__WEBPACK_IMPORTED_MODULE_6__["vendorDashboardPage"]
    }
];
var vendorDashboard = /** @class */ (function () {
    function vendorDashboard() {
    }
    vendorDashboard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_vendor_dashbord_page__WEBPACK_IMPORTED_MODULE_6__["vendorDashboardPage"]]
        })
    ], vendorDashboard);
    return vendorDashboard;
}());



/***/ }),

/***/ "./src/app/vendor-dashbord/vendor-dashbord.page.html":
/*!***********************************************************!*\
  !*** ./src/app/vendor-dashbord/vendor-dashbord.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title> Welcome to {{vendorName}} DashBoard <ion-button color=\"primary\" style=\"float: right;\"\n        (click)=\"goBack()\">Logout\n      </ion-button>\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p style=\"color:red\"> {{userMessage}}</p>\n  <ion-button color=\"success\" style=\"float: left;\" (click)=\"createEmployee()\">Add Employee</ion-button>\n  <ion-button color=\"warning\" style=\"float: left;\" (click)=\"getAllEmployees()\">Get All Employee List</ion-button>\n\n\n  <div *ngIf=\"addEmployee\">\n    <br>\n    <br>\n    <p>Add Your Employee</p>\n    <ion-item>\n      <td>\n      </td>\n      <ion-label floating>Name <span style=\"color:red\">*</span></ion-label>\n      <ion-input [(ngModel)]=\"name\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Phone<span style=\"color:red\">*</span></ion-label>\n      <ion-input [(ngModel)]=\"Phone\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Aadhar Card Numbe<span style=\"color:red\">*</span></ion-label>\n      <ion-input [(ngModel)]=\"aadharCardNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n    </ion-item>\n    <br>\n    <p> Add mobile Detils</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Sim Number</ion-label>\n            <ion-input [(ngModel)]=\"simNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>MCC</ion-label>\n            <ion-input [(ngModel)]=\"mcc\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>MNC</ion-label>\n            <ion-input [(ngModel)]=\"mnc\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>LAC</ion-label>\n            <ion-input [(ngModel)]=\"lac\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>CELL ID</ion-label>\n            <ion-input [(ngModel)]=\"cellId\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-button color=\"success\" style=\"float: left;\" (click)=\"submitEmployee()\">Submit</ion-button>\n    </ion-grid>\n  </div>\n  <div *ngIf=\"getEmployeeList\">\n    <br>\n    <br>\n    <p> All Your Employee List </p>\n    <table>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Phone</th>\n          <th>Aadhar Card Number</th>\n          <th>Status</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of adminData\">\n          <td> {{item.name}}</td>\n          <td> {{item.Phone}}</td>\n          <td> {{item.aadharCardNumber}}</td>\n          <!-- Give update abd delete rights to the dmin -->\n          <td>\n            <ion-button color=\"warning\" style=\"float: left;\" (click)=\"edit(item)\">{{updateButtonValue}}</ion-button>\n            <ion-button color=\"danger\" style=\"float: left;\" (click)=\"delete(item)\">Delete</ion-button>\n          </td>\n\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div *ngIf=\"UpdateDataFeilds\">\n    <br>\n    <br>\n    <p>update Your Employee</p>\n    <ion-item>\n      <td>\n      </td>\n      <ion-label floating>Name <span style=\"color:red\">*</span></ion-label>\n      <ion-input [(ngModel)]=\"name\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Phone<span style=\"color:red\">*</span></ion-label>\n      <ion-input [(ngModel)]=\"Phone\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Aadhar Card Numbe<span style=\"color:red\">*</span></ion-label>\n      <ion-input [(ngModel)]=\"aadharCardNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n    </ion-item>\n    <br>\n    <p> Update mobile Detils</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Sim Number</ion-label>\n            <ion-input [(ngModel)]=\"simNumber\" type=\"text\" value=\"\" (change)=\"onChange()\" disabled></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>MCC</ion-label>\n            <ion-input [(ngModel)]=\"mcc\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>MNC</ion-label>\n            <ion-input [(ngModel)]=\"mnc\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>LAC</ion-label>\n            <ion-input [(ngModel)]=\"lac\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>CELL ID</ion-label>\n            <ion-input [(ngModel)]=\"cellId\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-button color=\"success\" style=\"float: left;\" (click)=\"update()\">Update</ion-button>\n    </ion-grid>\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/vendor-dashbord/vendor-dashbord.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/vendor-dashbord/vendor-dashbord.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \n\tGeneric Styling, for Desktops/Laptops \n\t*/\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n/* Zebra striping */\ntr:nth-of-type(odd) {\n  background: #eee; }\nth {\n  background: #333;\n  color: white;\n  font-weight: bold; }\ntd, th {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left; }\n/*\n\tMax width before this PARTICULAR table gets nasty\n\tThis query will take effect for any screen smaller than 760px\n\tand also iPads specifically.\n\t*/\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  /* Force table to not be like tables anymore */\n  table, thead, tbody, th, td, tr {\n    display: block; }\n  /* Hide table headers (but not display: none;, for accessibility) */\n  thead tr {\n    position: absolute;\n    top: -9999px;\n    left: -9999px; }\n  tr {\n    border: 1px solid #ccc; }\n  td {\n    /* Behave  like a \"row\" */\n    border: none;\n    border-bottom: 1px solid #eee;\n    position: relative;\n    padding-left: 0%; }\n  td:before {\n    /* Now like a table header */\n    position: relative;\n    /* Top/left values mimic padding */\n    top: 0px;\n    left: 6px;\n    width: 45%;\n    padding-right: 10px;\n    white-space: nowrap; }\n  /*\n\t\tLabel the data\n\t\t*/\n  td:nth-of-type(1) {\n    font-weight: bold;\n    font-size: 150%;\n    margin-top: 0px; }\n  td:nth-of-type(1):before {\n    content: \"Name:\"; }\n  td:nth-of-type(2):before {\n    content: \"Phone:\"; }\n  td:nth-of-type(3):before {\n    content: \"Aadhar Card Number:\"; } }\n/* Smartphones (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  body {\n    padding: 0;\n    margin: 0;\n    width: 320px; } }\n/* iPads (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  body {\n    width: 495px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZGhha3Jpc2huYS9Eb2N1bWVudHMvTXlXb3Jrcy9PZmZpY2VMb2NhbEhvc3QvbXlPZmZpY2VXb3Jrcy9zdHVmZjIvZ2VvTG9jYXRpb24vc3JjL2FwcC92ZW5kb3ItZGFzaGJvcmQvdmVuZG9yLWRhc2hib3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmVuZG9yLWRhc2hib3JkL3ZlbmRvci1kYXNoYm9yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7O0VDRUM7QURDRDtFQUNDLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTtBQUUxQixtQkFBQTtBQUNBO0VBQ0MsZ0JBQWdCLEVBQUE7QUFFakI7RUFDQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0FBRWxCO0VBQ0MsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTtBQUlqQjs7OztFQ0VDO0FER0Q7RUFJQyw4Q0FBQTtFQUNBO0lBQ0MsY0FBYyxFQUFBO0VBR2YsbUVBQUE7RUFDQTtJQUNDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBR2Q7SUFBSyxzQkFBc0IsRUFBQTtFQUUzQjtJQUNDLHlCQUFBO0lBQ0EsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUFHakI7SUFDQyw0QkFBQTtJQUNBLGtCQUFrQjtJQUNsQixrQ0FBQTtJQUNBLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTtFQUdwQjs7R0NYQztFRGNEO0lBQW9CLGlCQUFnQjtJQUFDLGVBQWM7SUFBQyxlQUFjLEVBQUE7RUFDNUQ7SUFBMkIsZ0JBQWdCLEVBQUE7RUFDakQ7SUFBMkIsaUJBQWlCLEVBQUE7RUFDNUM7SUFBMkIsOEJBQThCLEVBQUEsRUFBSTtBQUk5RCxxREFBQTtBQUNBO0VBR0M7SUFDQyxVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVksRUFBQSxFQUFHO0FBR2pCLCtDQUFBO0FBQ0E7RUFDQztJQUNDLFlBQVksRUFBQSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yLWRhc2hib3JkL3ZlbmRvci1kYXNoYm9yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcdC8qIFxuXHRHZW5lcmljIFN0eWxpbmcsIGZvciBEZXNrdG9wcy9MYXB0b3BzIFxuXHQqL1xuXHR0YWJsZSB7IFxuXHRcdHdpZHRoOiAxMDAlOyBcblx0XHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBcblx0fVxuXHQvKiBaZWJyYSBzdHJpcGluZyAqL1xuXHR0cjpudGgtb2YtdHlwZShvZGQpIHsgXG5cdFx0YmFja2dyb3VuZDogI2VlZTsgXG5cdH1cblx0dGggeyBcblx0XHRiYWNrZ3JvdW5kOiAjMzMzOyBcblx0XHRjb2xvcjogd2hpdGU7IFxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkOyBcblx0fVxuXHR0ZCwgdGggeyBcblx0XHRwYWRkaW5nOiA2cHg7IFxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxuXHRcdHRleHQtYWxpZ246IGxlZnQ7IFxuXHR9XG5cblxuXHQvKlxuXHRNYXggd2lkdGggYmVmb3JlIHRoaXMgUEFSVElDVUxBUiB0YWJsZSBnZXRzIG5hc3R5XG5cdFRoaXMgcXVlcnkgd2lsbCB0YWtlIGVmZmVjdCBmb3IgYW55IHNjcmVlbiBzbWFsbGVyIHRoYW4gNzYwcHhcblx0YW5kIGFsc28gaVBhZHMgc3BlY2lmaWNhbGx5LlxuXHQqL1xuXHRAbWVkaWFcblx0b25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSxcblx0KG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgIHtcblxuXHRcdC8qIEZvcmNlIHRhYmxlIHRvIG5vdCBiZSBsaWtlIHRhYmxlcyBhbnltb3JlICovXG5cdFx0dGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR9XG5cblx0XHQvKiBIaWRlIHRhYmxlIGhlYWRlcnMgKGJ1dCBub3QgZGlzcGxheTogbm9uZTssIGZvciBhY2Nlc3NpYmlsaXR5KSAqL1xuXHRcdHRoZWFkIHRyIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogLTk5OTlweDtcblx0XHRcdGxlZnQ6IC05OTk5cHg7XG5cdFx0fVxuXG5cdFx0dHIgeyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyB9XG5cblx0XHR0ZCB7XG5cdFx0XHQvKiBCZWhhdmUgIGxpa2UgYSBcInJvd1wiICovXG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHBhZGRpbmctbGVmdDogMCU7XG5cdFx0fVxuXG5cdFx0dGQ6YmVmb3JlIHtcblx0XHRcdC8qIE5vdyBsaWtlIGEgdGFibGUgaGVhZGVyICovXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHQvKiBUb3AvbGVmdCB2YWx1ZXMgbWltaWMgcGFkZGluZyAqL1xuXHRcdFx0dG9wOiAwcHg7XG5cdFx0XHRsZWZ0OiA2cHg7XG5cdFx0XHR3aWR0aDogNDUlO1xuXHRcdFx0cGFkZGluZy1yaWdodDogMTBweDtcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0fVxuXG5cdFx0Lypcblx0XHRMYWJlbCB0aGUgZGF0YVxuXHRcdCovXG5cdFx0dGQ6bnRoLW9mLXR5cGUoMSkgeyBmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxNTAlO21hcmdpbi10b3A6MHB4OyB9XG4gICAgICAgIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiTmFtZTpcIjsgfVxuXHRcdHRkOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiUGhvbmU6XCI7IH1cblx0XHR0ZDpudGgtb2YtdHlwZSgzKTpiZWZvcmUgeyBjb250ZW50OiBcIkFhZGhhciBDYXJkIE51bWJlcjpcIjsgfVxuXHRcdFxuXHR9XG5cblx0LyogU21hcnRwaG9uZXMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXG5cdEBtZWRpYSBvbmx5IHNjcmVlblxuXHRhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcblx0YW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNDgwcHgpIHtcblx0XHRib2R5IHtcblx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHR3aWR0aDogMzIwcHg7IH1cblx0XHR9XG5cblx0LyogaVBhZHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xuXHRcdGJvZHkge1xuXHRcdFx0d2lkdGg6IDQ5NXB4O1xuXHRcdH1cblx0fSIsIi8qIFxuXHRHZW5lcmljIFN0eWxpbmcsIGZvciBEZXNrdG9wcy9MYXB0b3BzIFxuXHQqL1xudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4vKiBaZWJyYSBzdHJpcGluZyAqL1xudHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7IH1cblxudGgge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbnRkLCB0aCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4vKlxuXHRNYXggd2lkdGggYmVmb3JlIHRoaXMgUEFSVElDVUxBUiB0YWJsZSBnZXRzIG5hc3R5XG5cdFRoaXMgcXVlcnkgd2lsbCB0YWtlIGVmZmVjdCBmb3IgYW55IHNjcmVlbiBzbWFsbGVyIHRoYW4gNzYwcHhcblx0YW5kIGFsc28gaVBhZHMgc3BlY2lmaWNhbGx5LlxuXHQqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgLyogRm9yY2UgdGFibGUgdG8gbm90IGJlIGxpa2UgdGFibGVzIGFueW1vcmUgKi9cbiAgdGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLyogSGlkZSB0YWJsZSBoZWFkZXJzIChidXQgbm90IGRpc3BsYXk6IG5vbmU7LCBmb3IgYWNjZXNzaWJpbGl0eSkgKi9cbiAgdGhlYWQgdHIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC05OTk5cHg7XG4gICAgbGVmdDogLTk5OTlweDsgfVxuICB0ciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgfVxuICB0ZCB7XG4gICAgLyogQmVoYXZlICBsaWtlIGEgXCJyb3dcIiAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwJTsgfVxuICB0ZDpiZWZvcmUge1xuICAgIC8qIE5vdyBsaWtlIGEgdGFibGUgaGVhZGVyICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIFRvcC9sZWZ0IHZhbHVlcyBtaW1pYyBwYWRkaW5nICovXG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogNnB4O1xuICAgIHdpZHRoOiA0NSU7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gIC8qXG5cdFx0TGFiZWwgdGhlIGRhdGFcblx0XHQqL1xuICB0ZDpudGgtb2YtdHlwZSgxKSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNTAlO1xuICAgIG1hcmdpbi10b3A6IDBweDsgfVxuICB0ZDpudGgtb2YtdHlwZSgxKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiTmFtZTpcIjsgfVxuICB0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiUGhvbmU6XCI7IH1cbiAgdGQ6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkFhZGhhciBDYXJkIE51bWJlcjpcIjsgfSB9XG5cbi8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcbiAgYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDMyMHB4OyB9IH1cblxuLyogaVBhZHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgYm9keSB7XG4gICAgd2lkdGg6IDQ5NXB4OyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/vendor-dashbord/vendor-dashbord.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/vendor-dashbord/vendor-dashbord.page.ts ***!
  \*********************************************************/
/*! exports provided: vendorDashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vendorDashboardPage", function() { return vendorDashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiService */ "./src/app/apiService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factories/globalFactories */ "./src/app/factories/globalFactories.ts");






var vendorDashboardPage = /** @class */ (function () {
    function vendorDashboardPage(http, router) {
        this.http = http;
        this.router = router;
        this.addEmployee = false;
        this.getEmployeeList = false;
        this.UpdateDataFeilds = false;
        // update button value 
        this.updateButtonValue = "Update";
        if (!_factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["logOutfactory"].getAdminLoginFactory()) {
            this.router.navigateByUrl('/home');
        }
    }
    vendorDashboardPage.prototype.ngOnInit = function () {
        this.userMessage = '';
        this.vendorName = (_factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["loginUserData"].getLoginUserData() == undefined) ? '' : _factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["loginUserData"].getLoginUserData().company;
    };
    vendorDashboardPage.prototype.createEmployee = function () {
        this.addEmployee = true;
        this.getEmployeeList = false;
        this.userMessage = '';
        this.UpdateDataFeilds = false;
    };
    ;
    vendorDashboardPage.prototype.getAllEmployees = function () {
        this.LoginCollection = (_factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["loginUserData"].getLoginUserData() == undefined) ? "" : _factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["loginUserData"].getLoginUserData().collection;
        this.getAllData();
        //console.log('get login data', this.LoginCollection);
        this.getEmployeeList = true;
        this.addEmployee = false;
        this.userMessage = '';
        this.UpdateDataFeilds = false;
    };
    // store empoyee data 
    vendorDashboardPage.prototype.submitEmployee = function () {
        var _this = this;
        if (this.name == undefined || null || 0 || '') {
            this.userMessage = "Required Name";
        }
        else if (this.Phone == undefined || null || '' || 0) {
            this.userMessage = "Required Phone";
        }
        else if (this.aadharCardNumber == undefined || null || 0 || '') {
            this.userMessage = "Required AAdhar Number";
        }
        else {
            var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].createUserColletionDB + '?collection=' + this.LoginCollection;
            //console.log('store',url)
            this.http.post(url, {
                _id: this.simNumber,
                name: this.name,
                Phone: this.Phone,
                aadharCardNumber: this.aadharCardNumber,
                simNumber: this.simNumber,
                mcc: this.mcc,
                mnc: this.mnc,
                lac: this.lac,
                cellId: this.cellId
            }).subscribe(function (res) {
                console.log('storedData', res);
                _this.resetEmployeeData();
            }, function (error) {
                console.log('error', error);
            });
        }
    };
    vendorDashboardPage.prototype.resetEmployeeData = function () {
        this.name = " ";
        this.Phone = 0;
        this.aadharCardNumber = 0;
        this.mcc = 0;
        this.mnc;
        this.cellId = "";
        this.lac = '';
        this.simNumber = 0;
    };
    vendorDashboardPage.prototype.onChange = function () {
        this.userMessage = '';
    };
    // geeting all the vendor entred data 
    vendorDashboardPage.prototype.getAllData = function () {
        var _this = this;
        if (this.LoginCollection !== "") {
            this.userMessage = ' Kindly wait we are preparng the Client List ........ ';
            var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].orgLevelEmplpyeeList + '?collection=' + this.LoginCollection;
            //console.log(url);
            this.http.get(url).subscribe(function (data) {
                _this.handleData = data;
                // console.log(this.handleData.message);
                if (_this.handleData.message.length == 0) {
                    _this.userMessage = " oops! no records are found.";
                    _this.getEmployeeList = false;
                }
                else {
                    _this.userMessage = '';
                    _this.adminData = _this.handleData.message;
                    // console.log('final Data', this.adminData[0].name);
                }
            });
        }
    };
    // update  employee data 
    vendorDashboardPage.prototype.edit = function (val) {
        console.log(val);
        this.getEmployeeList = false;
        this.UpdateDataFeilds = true;
        this.name = (val == undefined || null || "") ? "" : val.name;
        this.Phone = (val == undefined || null || "" || 0) ? "" : val.Phone;
        this.aadharCardNumber = (val == undefined || null || "" || 0) ? "" : val.aadharCardNumber;
        this.mcc = (val == undefined || null || "" || 0) ? "" : val.mcc;
        this.mnc = (val == undefined || null || "" || 0) ? "" : val.mnc;
        this.cellId = (val == undefined || null || "" || 0) ? "" : this.handleData.message.cellId;
        this.lac = (this.handleData.message == undefined || null || "") ? "" : val.lac;
        this.simNumber = (val == undefined || null || "" || 0) ? "" : val.simNumber;
    };
    vendorDashboardPage.prototype.update = function () {
        var _this = this;
        var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].updateOrgData + '?collection=' + this.LoginCollection;
        //console.log(url);
        this.http.put(url, {
            _id: this.simNumber,
            name: this.name,
            Phone: this.Phone,
            aadharCardNumber: this.aadharCardNumber,
            simNumber: this.simNumber,
            mcc: this.mcc,
            mnc: this.mnc,
            lac: this.lac,
            cellId: this.cellId
        }).subscribe(function (data) {
            _this.handleData = data;
            _this.userMessage = _this.handleData.message;
        });
    };
    // delete employee data 
    vendorDashboardPage.prototype.delete = function (val) {
        var _this = this;
        var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].delete + '?collection=' + this.LoginCollection + '&id=' + val.simNumber;
        console.log('delete url', url);
        this.http.delete(url).subscribe(function (data) {
            _this.handleData = data;
            _this.userMessage = _this.handleData.message;
            _this.getAllData();
        });
    };
    vendorDashboardPage.prototype.goBack = function () {
        this.router.navigateByUrl('/home');
        this.userMessage = '';
    };
    vendorDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-approve',
            template: __webpack_require__(/*! ./vendor-dashbord.page.html */ "./src/app/vendor-dashbord/vendor-dashbord.page.html"),
            styles: [__webpack_require__(/*! ./vendor-dashbord.page.scss */ "./src/app/vendor-dashbord/vendor-dashbord.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], vendorDashboardPage);
    return vendorDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=vendor-dashbord-vendor-dashbord-module.js.map