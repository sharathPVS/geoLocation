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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title> Give Access To Your Clients     <ion-button color=\"primary\" style=\"float: right;\"  (click)=\"goBack()\"> Go back</ion-button> </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n    <p style=\"color:green\" > {{userMessage}}</p>\n   \n    <table>\n        <thead>\n        <tr>\n          <th>Name</th>\n          <th>Phone</th>\n          <th>Email</th>\n          <th>Status</th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let item of adminData\">\n         <td> {{item.name}}</td>\n         <td> {{item.phone}}</td>\n         <td>{{item.email}}</td>\n         <td><ion-button color=\"success\" (click)=\"statusChange(item)\">{{item.state}}</ion-button></td>\n        </tr>\n        </tbody>\n      </table>\n    \n</ion-content>"

/***/ }),

/***/ "./src/app/admin-approve/admin-approve.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/admin-approve/admin-approve.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \n\tGeneric Styling, for Desktops/Laptops \n\t*/\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n/* Zebra striping */\ntr:nth-of-type(odd) {\n  background: #eee; }\nth {\n  background: #333;\n  color: white;\n  font-weight: bold; }\ntd, th {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left; }\n/*\n\tMax width before this PARTICULAR table gets nasty\n\tThis query will take effect for any screen smaller than 760px\n\tand also iPads specifically.\n\t*/\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  /* Force table to not be like tables anymore */\n  table, thead, tbody, th, td, tr {\n    display: block; }\n  /* Hide table headers (but not display: none;, for accessibility) */\n  thead tr {\n    position: absolute;\n    top: -9999px;\n    left: -9999px; }\n  tr {\n    border: 1px solid #ccc; }\n  td {\n    /* Behave  like a \"row\" */\n    border: none;\n    border-bottom: 1px solid #eee;\n    position: relative;\n    padding-left: 50%; }\n  td:before {\n    /* Now like a table header */\n    position: relative;\n    /* Top/left values mimic padding */\n    top: 0px;\n    left: 6px;\n    width: 45%;\n    padding-right: 10px;\n    white-space: nowrap; }\n  /*\n\t\tLabel the data\n\t\t*/\n  td:nth-of-type(1) {\n    font-weight: bold;\n    font-size: 150%;\n    margin-top: 5px; }\n  td:nth-of-type(1):before {\n    content: \"First Name:\"; }\n  td:nth-of-type(2):before {\n    content: \"Last Name:\"; }\n  td:nth-of-type(3):before {\n    content: \"Job Title:\"; }\n  td:nth-of-type(4):before {\n    content: \"Favorite Color:\"; }\n  td:nth-of-type(5):before {\n    content: \"Wars of Trek?:\"; }\n  td:nth-of-type(6):before {\n    content: \"Nick Name:\"; }\n  td:nth-of-type(7):before {\n    content: \"Date of Birth:\"; }\n  td:nth-of-type(8):before {\n    content: \"Dream Vacation City:\"; }\n  td:nth-of-type(9):before {\n    content: \"GPA:\"; }\n  td:nth-of-type(10):before {\n    content: \"Arbitrary Data:\"; } }\n/* Smartphones (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  body {\n    padding: 0;\n    margin: 0;\n    width: 320px; } }\n/* iPads (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  body {\n    width: 495px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZGhha3Jpc2huYS9Eb2N1bWVudHMvTXlXb3Jrcy9PZmZpY2VMb2NhbEhvc3QvbXlPZmZpY2VXb3Jrcy9ob3BlRm9yU3VjY2Vzcy9nZW9Mb2NhdGlvbi9zcmMvYXBwL2FkbWluLWFwcHJvdmUvYWRtaW4tYXBwcm92ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkbWluLWFwcHJvdmUvYWRtaW4tYXBwcm92ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7O0VDRUM7QURDRDtFQUNDLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTtBQUUxQixtQkFBQTtBQUNBO0VBQ0MsZ0JBQWdCLEVBQUE7QUFFakI7RUFDQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0FBRWxCO0VBQ0MsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTtBQUlqQjs7OztFQ0VDO0FER0Q7RUFJQyw4Q0FBQTtFQUNBO0lBQ0MsY0FBYyxFQUFBO0VBR2YsbUVBQUE7RUFDQTtJQUNDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBR2Q7SUFBSyxzQkFBc0IsRUFBQTtFQUUzQjtJQUNDLHlCQUFBO0lBQ0EsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7RUFHbEI7SUFDQyw0QkFBQTtJQUNBLGtCQUFrQjtJQUNsQixrQ0FBQTtJQUNBLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTtFQUdwQjs7R0NYQztFRGNEO0lBQW9CLGlCQUFnQjtJQUFDLGVBQWM7SUFBQyxlQUFjLEVBQUE7RUFDaEU7SUFBMkIsc0JBQXNCLEVBQUE7RUFDbkQ7SUFBMkIscUJBQXFCLEVBQUE7RUFDaEQ7SUFBMkIscUJBQXFCLEVBQUE7RUFDaEQ7SUFBMkIsMEJBQTBCLEVBQUE7RUFDckQ7SUFBMkIseUJBQXlCLEVBQUE7RUFDcEQ7SUFBMkIscUJBQXFCLEVBQUE7RUFDaEQ7SUFBMkIseUJBQXlCLEVBQUE7RUFDcEQ7SUFBMkIsK0JBQStCLEVBQUE7RUFDMUQ7SUFBMkIsZUFBZSxFQUFBO0VBQzFDO0lBQTRCLDBCQUEwQixFQUFBLEVBQUk7QUFHM0QscURBQUE7QUFDQTtFQUdDO0lBQ0MsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZLEVBQUEsRUFBRztBQUdqQiwrQ0FBQTtBQUNBO0VBQ0M7SUFDQyxZQUFZLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWFwcHJvdmUvYWRtaW4tYXBwcm92ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcdC8qIFxuXHRHZW5lcmljIFN0eWxpbmcsIGZvciBEZXNrdG9wcy9MYXB0b3BzIFxuXHQqL1xuXHR0YWJsZSB7IFxuXHRcdHdpZHRoOiAxMDAlOyBcblx0XHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBcblx0fVxuXHQvKiBaZWJyYSBzdHJpcGluZyAqL1xuXHR0cjpudGgtb2YtdHlwZShvZGQpIHsgXG5cdFx0YmFja2dyb3VuZDogI2VlZTsgXG5cdH1cblx0dGggeyBcblx0XHRiYWNrZ3JvdW5kOiAjMzMzOyBcblx0XHRjb2xvcjogd2hpdGU7IFxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkOyBcblx0fVxuXHR0ZCwgdGggeyBcblx0XHRwYWRkaW5nOiA2cHg7IFxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxuXHRcdHRleHQtYWxpZ246IGxlZnQ7IFxuXHR9XG5cblxuXHQvKlxuXHRNYXggd2lkdGggYmVmb3JlIHRoaXMgUEFSVElDVUxBUiB0YWJsZSBnZXRzIG5hc3R5XG5cdFRoaXMgcXVlcnkgd2lsbCB0YWtlIGVmZmVjdCBmb3IgYW55IHNjcmVlbiBzbWFsbGVyIHRoYW4gNzYwcHhcblx0YW5kIGFsc28gaVBhZHMgc3BlY2lmaWNhbGx5LlxuXHQqL1xuXHRAbWVkaWFcblx0b25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSxcblx0KG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgIHtcblxuXHRcdC8qIEZvcmNlIHRhYmxlIHRvIG5vdCBiZSBsaWtlIHRhYmxlcyBhbnltb3JlICovXG5cdFx0dGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR9XG5cblx0XHQvKiBIaWRlIHRhYmxlIGhlYWRlcnMgKGJ1dCBub3QgZGlzcGxheTogbm9uZTssIGZvciBhY2Nlc3NpYmlsaXR5KSAqL1xuXHRcdHRoZWFkIHRyIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogLTk5OTlweDtcblx0XHRcdGxlZnQ6IC05OTk5cHg7XG5cdFx0fVxuXG5cdFx0dHIgeyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyB9XG5cblx0XHR0ZCB7XG5cdFx0XHQvKiBCZWhhdmUgIGxpa2UgYSBcInJvd1wiICovXG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdHBhZGRpbmctbGVmdDogNTAlO1xuXHRcdH1cblxuXHRcdHRkOmJlZm9yZSB7XG5cdFx0XHQvKiBOb3cgbGlrZSBhIHRhYmxlIGhlYWRlciAqL1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0LyogVG9wL2xlZnQgdmFsdWVzIG1pbWljIHBhZGRpbmcgKi9cblx0XHRcdHRvcDogMHB4O1xuXHRcdFx0bGVmdDogNnB4O1xuXHRcdFx0d2lkdGg6IDQ1JTtcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XG5cdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdH1cblxuXHRcdC8qXG5cdFx0TGFiZWwgdGhlIGRhdGFcblx0XHQqL1xuXHRcdHRkOm50aC1vZi10eXBlKDEpIHsgZm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MTUwJTttYXJnaW4tdG9wOjVweDsgfVxuICAgIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiRmlyc3QgTmFtZTpcIjsgfVxuXHRcdHRkOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiTGFzdCBOYW1lOlwiOyB9XG5cdFx0dGQ6bnRoLW9mLXR5cGUoMyk6YmVmb3JlIHsgY29udGVudDogXCJKb2IgVGl0bGU6XCI7IH1cblx0XHR0ZDpudGgtb2YtdHlwZSg0KTpiZWZvcmUgeyBjb250ZW50OiBcIkZhdm9yaXRlIENvbG9yOlwiOyB9XG5cdFx0dGQ6bnRoLW9mLXR5cGUoNSk6YmVmb3JlIHsgY29udGVudDogXCJXYXJzIG9mIFRyZWs/OlwiOyB9XG5cdFx0dGQ6bnRoLW9mLXR5cGUoNik6YmVmb3JlIHsgY29udGVudDogXCJOaWNrIE5hbWU6XCI7IH1cblx0XHR0ZDpudGgtb2YtdHlwZSg3KTpiZWZvcmUgeyBjb250ZW50OiBcIkRhdGUgb2YgQmlydGg6XCI7IH1cblx0XHR0ZDpudGgtb2YtdHlwZSg4KTpiZWZvcmUgeyBjb250ZW50OiBcIkRyZWFtIFZhY2F0aW9uIENpdHk6XCI7IH1cblx0XHR0ZDpudGgtb2YtdHlwZSg5KTpiZWZvcmUgeyBjb250ZW50OiBcIkdQQTpcIjsgfVxuXHRcdHRkOm50aC1vZi10eXBlKDEwKTpiZWZvcmUgeyBjb250ZW50OiBcIkFyYml0cmFyeSBEYXRhOlwiOyB9XG5cdH1cblxuXHQvKiBTbWFydHBob25lcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cblx0QG1lZGlhIG9ubHkgc2NyZWVuXG5cdGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuXHRhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xuXHRcdGJvZHkge1xuXHRcdFx0cGFkZGluZzogMDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdHdpZHRoOiAzMjBweDsgfVxuXHRcdH1cblxuXHQvKiBpUGFkcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG5cdFx0Ym9keSB7XG5cdFx0XHR3aWR0aDogNDk1cHg7XG5cdFx0fVxuXHR9IiwiLyogXG5cdEdlbmVyaWMgU3R5bGluZywgZm9yIERlc2t0b3BzL0xhcHRvcHMgXG5cdCovXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi8qIFplYnJhIHN0cmlwaW5nICovXG50cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxuXG50aCB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxudGQsIHRoIHtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi8qXG5cdE1heCB3aWR0aCBiZWZvcmUgdGhpcyBQQVJUSUNVTEFSIHRhYmxlIGdldHMgbmFzdHlcblx0VGhpcyBxdWVyeSB3aWxsIHRha2UgZWZmZWN0IGZvciBhbnkgc2NyZWVuIHNtYWxsZXIgdGhhbiA3NjBweFxuXHRhbmQgYWxzbyBpUGFkcyBzcGVjaWZpY2FsbHkuXG5cdCovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSwgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xuICAvKiBGb3JjZSB0YWJsZSB0byBub3QgYmUgbGlrZSB0YWJsZXMgYW55bW9yZSAqL1xuICB0YWJsZSwgdGhlYWQsIHRib2R5LCB0aCwgdGQsIHRyIHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAvKiBIaWRlIHRhYmxlIGhlYWRlcnMgKGJ1dCBub3QgZGlzcGxheTogbm9uZTssIGZvciBhY2Nlc3NpYmlsaXR5KSAqL1xuICB0aGVhZCB0ciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTk5OTlweDtcbiAgICBsZWZ0OiAtOTk5OXB4OyB9XG4gIHRyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyB9XG4gIHRkIHtcbiAgICAvKiBCZWhhdmUgIGxpa2UgYSBcInJvd1wiICovXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwJTsgfVxuICB0ZDpiZWZvcmUge1xuICAgIC8qIE5vdyBsaWtlIGEgdGFibGUgaGVhZGVyICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIFRvcC9sZWZ0IHZhbHVlcyBtaW1pYyBwYWRkaW5nICovXG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogNnB4O1xuICAgIHdpZHRoOiA0NSU7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gIC8qXG5cdFx0TGFiZWwgdGhlIGRhdGFcblx0XHQqL1xuICB0ZDpudGgtb2YtdHlwZSgxKSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNTAlO1xuICAgIG1hcmdpbi10b3A6IDVweDsgfVxuICB0ZDpudGgtb2YtdHlwZSgxKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiRmlyc3QgTmFtZTpcIjsgfVxuICB0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiTGFzdCBOYW1lOlwiOyB9XG4gIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJKb2IgVGl0bGU6XCI7IH1cbiAgdGQ6bnRoLW9mLXR5cGUoNCk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkZhdm9yaXRlIENvbG9yOlwiOyB9XG4gIHRkOm50aC1vZi10eXBlKDUpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJXYXJzIG9mIFRyZWs/OlwiOyB9XG4gIHRkOm50aC1vZi10eXBlKDYpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJOaWNrIE5hbWU6XCI7IH1cbiAgdGQ6bnRoLW9mLXR5cGUoNyk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkRhdGUgb2YgQmlydGg6XCI7IH1cbiAgdGQ6bnRoLW9mLXR5cGUoOCk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkRyZWFtIFZhY2F0aW9uIENpdHk6XCI7IH1cbiAgdGQ6bnRoLW9mLXR5cGUoOSk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkdQQTpcIjsgfVxuICB0ZDpudGgtb2YtdHlwZSgxMCk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkFyYml0cmFyeSBEYXRhOlwiOyB9IH1cblxuLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMzIwcHg7IH0gfVxuXG4vKiBpUGFkcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xuICBib2R5IHtcbiAgICB3aWR0aDogNDk1cHg7IH0gfVxuIl19 */"

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





var adminApprove = /** @class */ (function () {
    function adminApprove(http, router) {
        this.http = http;
        this.router = router;
    }
    adminApprove.prototype.ngOnInit = function () {
        this.getAllData();
    };
    adminApprove.prototype.statusChange = function (val) {
        var _this = this;
        val.state = (val.state == "inActive") ? 'active' : 'inActive';
        //console.log(val);
        this.http.put(_apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].updateLogin, val).subscribe(function (data) {
            console.log(data);
            _this.getAllData();
        }, function (error) {
            console.log(error);
        });
    };
    adminApprove.prototype.getAllData = function () {
        var _this = this;
        this.userMessage = ' Kindly wait we are preparng the Client List ........ ';
        this.http.get(_apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].getllDocsForAdminApproveOrReject).subscribe(function (data) {
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