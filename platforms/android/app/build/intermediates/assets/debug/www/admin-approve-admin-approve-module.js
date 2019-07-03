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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>  <ion-button color=\"primary\" style=\"float: right;\"  (click)=\"goBack()\"> Logout</ion-button> </ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n    <p style=\"color:green\" > {{userMessage}}</p>\r\n   \r\n    <table>\r\n        <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Phone</th>\r\n          <th>Email</th>\r\n          <th>Company</th>\r\n          <th>Status</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let item of adminData\">\r\n         <td> {{item.name}}</td>\r\n         <td> {{item.phone}}</td>\r\n         <td>{{item.email}}</td>\r\n         <td>{{item.company}}</td>\r\n         <td><ion-button color=\"success\" (click)=\"statusChange(item)\">{{item.state}}</ion-button></td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    \r\n</ion-content>"

/***/ }),

/***/ "./src/app/admin-approve/admin-approve.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/admin-approve/admin-approve.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n\tGeneric Styling, for Desktops/Laptops \r\n\t*/\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n/* Zebra striping */\ntr:nth-of-type(odd) {\n  background: #eee; }\nth {\n  background: #333;\n  color: white;\n  font-weight: bold; }\ntd, th {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left; }\n/*\r\n\tMax width before this PARTICULAR table gets nasty\r\n\tThis query will take effect for any screen smaller than 760px\r\n\tand also iPads specifically.\r\n\t*/\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  /* Force table to not be like tables anymore */\n  table, thead, tbody, th, td, tr {\n    display: block; }\n  /* Hide table headers (but not display: none;, for accessibility) */\n  thead tr {\n    position: absolute;\n    top: -9999px;\n    left: -9999px; }\n  tr {\n    border: 1px solid #ccc; }\n  td {\n    /* Behave  like a \"row\" */\n    border: none;\n    border-bottom: 1px solid #eee;\n    position: relative;\n    padding-left: 0%; }\n  td:before {\n    /* Now like a table header */\n    position: relative;\n    /* Top/left values mimic padding */\n    top: 0px;\n    left: 6px;\n    width: 45%;\n    padding-right: 10px;\n    white-space: nowrap; }\n  /*\r\n\t\tLabel the data\r\n\t\t*/\n  td:nth-of-type(1) {\n    font-weight: bold;\n    font-size: 150%;\n    margin-top: 5px; }\n  td:nth-of-type(1):before {\n    content: \"Name:\"; }\n  td:nth-of-type(2):before {\n    content: \"Phone:\"; }\n  td:nth-of-type(3):before {\n    content: \"Email:\"; }\n  td:nth-of-type(4):before {\n    content: \"Company:\"; } }\n/* Smartphones (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  body {\n    padding: 0;\n    margin: 0;\n    width: 320px; } }\n/* iPads (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  body {\n    width: 495px; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tYXBwcm92ZS9FOlxcZ2VvTG9jYXRpb24vc3JjXFxhcHBcXGFkbWluLWFwcHJvdmVcXGFkbWluLWFwcHJvdmUucGFnZS5zY3NzIiwic3JjL2FwcC9hZG1pbi1hcHByb3ZlL2FkbWluLWFwcHJvdmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFDOztFQ0VDO0FEQ0Q7RUFDQyxXQUFXO0VBQ1gseUJBQXlCLEVBQUE7QUFFMUIsbUJBQUE7QUFDQTtFQUNDLGdCQUFnQixFQUFBO0FBRWpCO0VBQ0MsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTtBQUVsQjtFQUNDLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7QUFJakI7Ozs7RUNFQztBREdEO0VBSUMsOENBQUE7RUFDQTtJQUNDLGNBQWMsRUFBQTtFQUdmLG1FQUFBO0VBQ0E7SUFDQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUdkO0lBQUssc0JBQXNCLEVBQUE7RUFFM0I7SUFDQyx5QkFBQTtJQUNBLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBR2pCO0lBQ0MsNEJBQUE7SUFDQSxrQkFBa0I7SUFDbEIsa0NBQUE7SUFDQSxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7RUFHcEI7O0dDWEM7RURjRDtJQUFvQixpQkFBZ0I7SUFBQyxlQUFjO0lBQUMsZUFBYyxFQUFBO0VBQ2hFO0lBQTJCLGdCQUFnQixFQUFBO0VBQzdDO0lBQTJCLGlCQUFpQixFQUFBO0VBQzVDO0lBQTJCLGlCQUFpQixFQUFBO0VBQzVDO0lBQTJCLG1CQUFtQixFQUFBLEVBQUk7QUFHbkQscURBQUE7QUFDQTtFQUdDO0lBQ0MsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZLEVBQUEsRUFBRztBQUdqQiwrQ0FBQTtBQUNBO0VBQ0M7SUFDQyxZQUFZLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWFwcHJvdmUvYWRtaW4tYXBwcm92ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcdC8qIFxyXG5cdEdlbmVyaWMgU3R5bGluZywgZm9yIERlc2t0b3BzL0xhcHRvcHMgXHJcblx0Ki9cclxuXHR0YWJsZSB7IFxyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcblx0fVxyXG5cdC8qIFplYnJhIHN0cmlwaW5nICovXHJcblx0dHI6bnRoLW9mLXR5cGUob2RkKSB7IFxyXG5cdFx0YmFja2dyb3VuZDogI2VlZTsgXHJcblx0fVxyXG5cdHRoIHsgXHJcblx0XHRiYWNrZ3JvdW5kOiAjMzMzOyBcclxuXHRcdGNvbG9yOiB3aGl0ZTsgXHJcblx0XHRmb250LXdlaWdodDogYm9sZDsgXHJcblx0fVxyXG5cdHRkLCB0aCB7IFxyXG5cdFx0cGFkZGluZzogNnB4OyBcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDsgXHJcblx0fVxyXG5cclxuXHJcblx0LypcclxuXHRNYXggd2lkdGggYmVmb3JlIHRoaXMgUEFSVElDVUxBUiB0YWJsZSBnZXRzIG5hc3R5XHJcblx0VGhpcyBxdWVyeSB3aWxsIHRha2UgZWZmZWN0IGZvciBhbnkgc2NyZWVuIHNtYWxsZXIgdGhhbiA3NjBweFxyXG5cdGFuZCBhbHNvIGlQYWRzIHNwZWNpZmljYWxseS5cclxuXHQqL1xyXG5cdEBtZWRpYVxyXG5cdG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksXHJcblx0KG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgIHtcclxuXHJcblx0XHQvKiBGb3JjZSB0YWJsZSB0byBub3QgYmUgbGlrZSB0YWJsZXMgYW55bW9yZSAqL1xyXG5cdFx0dGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIEhpZGUgdGFibGUgaGVhZGVycyAoYnV0IG5vdCBkaXNwbGF5OiBub25lOywgZm9yIGFjY2Vzc2liaWxpdHkpICovXHJcblx0XHR0aGVhZCB0ciB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiAtOTk5OXB4O1xyXG5cdFx0XHRsZWZ0OiAtOTk5OXB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdHRyIHsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgfVxyXG5cclxuXHRcdHRkIHtcclxuXHRcdFx0LyogQmVoYXZlICBsaWtlIGEgXCJyb3dcIiAqL1xyXG5cdFx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHBhZGRpbmctbGVmdDogMCU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGQ6YmVmb3JlIHtcclxuXHRcdFx0LyogTm93IGxpa2UgYSB0YWJsZSBoZWFkZXIgKi9cclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHQvKiBUb3AvbGVmdCB2YWx1ZXMgbWltaWMgcGFkZGluZyAqL1xyXG5cdFx0XHR0b3A6IDBweDtcclxuXHRcdFx0bGVmdDogNnB4O1xyXG5cdFx0XHR3aWR0aDogNDUlO1xyXG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qXHJcblx0XHRMYWJlbCB0aGUgZGF0YVxyXG5cdFx0Ki9cclxuXHRcdHRkOm50aC1vZi10eXBlKDEpIHsgZm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MTUwJTttYXJnaW4tdG9wOjVweDsgfVxyXG4gICAgdGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHsgY29udGVudDogXCJOYW1lOlwiOyB9XHJcblx0XHR0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUgeyBjb250ZW50OiBcIlBob25lOlwiOyB9XHJcblx0XHR0ZDpudGgtb2YtdHlwZSgzKTpiZWZvcmUgeyBjb250ZW50OiBcIkVtYWlsOlwiOyB9XHJcblx0XHR0ZDpudGgtb2YtdHlwZSg0KTpiZWZvcmUgeyBjb250ZW50OiBcIkNvbXBhbnk6XCI7IH1cclxuXHR9XHJcblxyXG5cdC8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlblxyXG5cdGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxyXG5cdGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KSB7XHJcblx0XHRib2R5IHtcclxuXHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHR3aWR0aDogMzIwcHg7IH1cclxuXHRcdH1cclxuXHJcblx0LyogaVBhZHMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXHJcblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XHJcblx0XHRib2R5IHtcclxuXHRcdFx0d2lkdGg6IDQ5NXB4O1xyXG5cdFx0fVxyXG5cdH0iLCIvKiBcclxuXHRHZW5lcmljIFN0eWxpbmcsIGZvciBEZXNrdG9wcy9MYXB0b3BzIFxyXG5cdCovXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi8qIFplYnJhIHN0cmlwaW5nICovXG50cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxuXG50aCB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxudGQsIHRoIHtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi8qXHJcblx0TWF4IHdpZHRoIGJlZm9yZSB0aGlzIFBBUlRJQ1VMQVIgdGFibGUgZ2V0cyBuYXN0eVxyXG5cdFRoaXMgcXVlcnkgd2lsbCB0YWtlIGVmZmVjdCBmb3IgYW55IHNjcmVlbiBzbWFsbGVyIHRoYW4gNzYwcHhcclxuXHRhbmQgYWxzbyBpUGFkcyBzcGVjaWZpY2FsbHkuXHJcblx0Ki9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIC8qIEZvcmNlIHRhYmxlIHRvIG5vdCBiZSBsaWtlIHRhYmxlcyBhbnltb3JlICovXG4gIHRhYmxlLCB0aGVhZCwgdGJvZHksIHRoLCB0ZCwgdHIge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC8qIEhpZGUgdGFibGUgaGVhZGVycyAoYnV0IG5vdCBkaXNwbGF5OiBub25lOywgZm9yIGFjY2Vzc2liaWxpdHkpICovXG4gIHRoZWFkIHRyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOTk5OXB4O1xuICAgIGxlZnQ6IC05OTk5cHg7IH1cbiAgdHIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IH1cbiAgdGQge1xuICAgIC8qIEJlaGF2ZSAgbGlrZSBhIFwicm93XCIgKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMCU7IH1cbiAgdGQ6YmVmb3JlIHtcbiAgICAvKiBOb3cgbGlrZSBhIHRhYmxlIGhlYWRlciAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBUb3AvbGVmdCB2YWx1ZXMgbWltaWMgcGFkZGluZyAqL1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDZweDtcbiAgICB3aWR0aDogNDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAvKlxyXG5cdFx0TGFiZWwgdGhlIGRhdGFcclxuXHRcdCovXG4gIHRkOm50aC1vZi10eXBlKDEpIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgbWFyZ2luLXRvcDogNXB4OyB9XG4gIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJOYW1lOlwiOyB9XG4gIHRkOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJQaG9uZTpcIjsgfVxuICB0ZDpudGgtb2YtdHlwZSgzKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiRW1haWw6XCI7IH1cbiAgdGQ6bnRoLW9mLXR5cGUoNCk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkNvbXBhbnk6XCI7IH0gfVxuXG4vKiBTbWFydHBob25lcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAzMjBweDsgfSB9XG5cbi8qIGlQYWRzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIGJvZHkge1xuICAgIHdpZHRoOiA0OTVweDsgfSB9XG4iXX0= */"

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