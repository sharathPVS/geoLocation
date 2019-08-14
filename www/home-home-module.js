(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      GEO Location\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-list>\r\n    <span style=\"color: red\">{{message}}</span>\r\n    <div style=\"float:right\">\r\n        <a (click)=\"upload()\">Upload</a> | <a (click)=\"login()\">Login</a> | <a (click)=\"signUp()\">Sign Up </a>\r\n  </div>\r\n    <br>\r\n    <div *ngIf=\"loginButton\">\r\n      <ion-item>\r\n        <ion-label floating>Username</ion-label>\r\n        <ion-input [(ngModel)]=\"username\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label floating>Password</ion-label>\r\n        <ion-input [(ngModel)]=\"password\" type=\"password\" value=\"\"></ion-input>\r\n      </ion-item>\r\n\r\n      <div padding>\r\n        <!-- <ion-button href=\"/location\" routerDirection=\"root\"> -->\r\n        <ion-button color=\"success\" (click)=\"submit()\">Submit </ion-button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"signUpButton\">\r\n\r\n      <span style=\"color: red\">{{userEmailMessage}}</span>\r\n      <ion-item>\r\n        <ion-label floating>Name<span style=\"color: red\">*</span> </ion-label>\r\n        <ion-input [(ngModel)]=\"name\" type=\"text\" value=\"\" (change)=\"onChange()\" aria-required></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label floating>Email<span style=\"color: red\">*</span></ion-label>\r\n        <ion-input autocomplete=\"off\" [(ngModel)]=\"email\" type=\"email\" id=\"emailId\" value=\"\" (change)=\"onChange()\" (paste)=\"false\" (focusout)=\"onChange()\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label floating>Phone<span style=\"color: red\">*</span></ion-label>\r\n        <ion-input [(ngModel)]=\"phone\" type=\"number\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label floating> Company Name <span style=\"color: red\">*</span></ion-label>\r\n        <ion-input [(ngModel)]=\"companyName\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label floating>Password<span style=\"color: red\">*</span></ion-label>\r\n        <ion-input [(ngModel)]=\"password\" type=\"password\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n      </ion-item>\r\n      <div padding>\r\n        <!-- <ion-button href=\"/location\" routerDirection=\"root\"> -->\r\n        <ion-button color=\"success\" (click)=\"RegisterSubmit()\">Submit </ion-button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </ion-list>\r\n  <div *ngIf=\"uploadImage\">\r\n  <h3 *ngIf=\"images.length == 0\" text-center>Please Select Image!</h3>\r\n \r\n  <ion-list>\r\n    <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-img [src]=\"img.path\"></ion-img>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        {{ img.name }}\r\n      </ion-label>\r\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"startUpload(img,pos)\">\r\n        <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\r\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</div>\r\n\r\n<div #map class=\"map\" *ngIf=\"mapsData\"></div>\r\n</ion-content>\r\n\r\n<ion-footer *ngIf=\"uploadImage\">\r\n  <ion-toolbar color=\"success\">\r\n    <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\">\r\n      <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n      Select Image</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  background: grey;\n  height: 100vh;\n  width: 100vw; }\n\n/* \r\n\tGeneric Styling, for Desktops/Laptops \r\n\t*/\n\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n\n/* Zebra striping */\n\ntr:nth-of-type(odd) {\n  background: #eee; }\n\nth {\n  background: #333;\n  color: white;\n  font-weight: bold; }\n\ntd, th {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left; }\n\n.map {\n  background: grey;\n  height: 100vh;\n  width: 100vw; }\n\n/*\r\n\tMax width before this PARTICULAR table gets nasty\r\n\tThis query will take effect for any screen smaller than 760px\r\n\tand also iPads specifically.\r\n\t*/\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  /* Force table to not be like tables anymore */\n  table, thead, tbody, th, td, tr {\n    display: block; }\n  /* Hide table headers (but not display: none;, for accessibility) */\n  thead tr {\n    position: absolute;\n    top: -9999px;\n    left: -9999px; }\n  tr {\n    border: 1px solid #ccc; }\n  td {\n    /* Behave  like a \"row\" */\n    border: none;\n    border-bottom: 1px solid #eee;\n    position: relative;\n    padding-left: 0%; }\n  td:before {\n    /* Now like a table header */\n    position: relative;\n    /* Top/left values mimic padding */\n    top: 0px;\n    left: 6px;\n    width: 45%;\n    padding-right: 10px;\n    white-space: nowrap; }\n  /*\r\n\t\tLabel the data\r\n\t\t*/\n  td:nth-of-type(1) {\n    font-weight: bold;\n    font-size: 150%;\n    margin-top: 0px; }\n  td:nth-of-type(1):before {\n    content: \"Name:\"; }\n  td:nth-of-type(2):before {\n    content: \"Phone:\"; }\n  td:nth-of-type(3):before {\n    content: \"Aadhar Card Number:\"; } }\n\n/* Smartphones (portrait and landscape) ----------- */\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  body {\n    padding: 0;\n    margin: 0;\n    width: 320px; } }\n\n/* iPads (portrait and landscape) ----------- */\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  body {\n    width: 495px; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9FOlxcZ2VvTG9jYXRpb24vc3JjXFxhcHBcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZLEVBQUE7O0FBR2I7O0VDQUQ7O0FER0Q7RUFDQyxXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRTFCLG1CQUFBOztBQUNBO0VBQ0MsZ0JBQWdCLEVBQUE7O0FBRWpCO0VBQ0MsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFFbEI7RUFDQyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUVqQjtFQUNDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUliOzs7O0VDQUM7O0FES0Q7RUFJQyw4Q0FBQTtFQUNBO0lBQ0MsY0FBYyxFQUFBO0VBR2YsbUVBQUE7RUFDQTtJQUNDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBR2Q7SUFBSyxzQkFBc0IsRUFBQTtFQUUzQjtJQUNDLHlCQUFBO0lBQ0EsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUFHakI7SUFDQyw0QkFBQTtJQUNBLGtCQUFrQjtJQUNsQixrQ0FBQTtJQUNBLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTtFQUdwQjs7R0NiQztFRGdCRDtJQUFvQixpQkFBZ0I7SUFBQyxlQUFjO0lBQUMsZUFBYyxFQUFBO0VBQzVEO0lBQTJCLGdCQUFnQixFQUFBO0VBQ2pEO0lBQTJCLGlCQUFpQixFQUFBO0VBQzVDO0lBQTJCLDhCQUE4QixFQUFBLEVBQUk7O0FBSTlELHFEQUFBOztBQUNBO0VBR0M7SUFDQyxVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVksRUFBQSxFQUFHOztBQUdqQiwrQ0FBQTs7QUFDQTtFQUNDO0lBQ0MsWUFBWSxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXAge1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgfVxyXG5cclxuICBcdC8qIFxyXG5cdEdlbmVyaWMgU3R5bGluZywgZm9yIERlc2t0b3BzL0xhcHRvcHMgXHJcblx0Ki9cclxuXHR0YWJsZSB7IFxyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcblx0fVxyXG5cdC8qIFplYnJhIHN0cmlwaW5nICovXHJcblx0dHI6bnRoLW9mLXR5cGUob2RkKSB7IFxyXG5cdFx0YmFja2dyb3VuZDogI2VlZTsgXHJcblx0fVxyXG5cdHRoIHsgXHJcblx0XHRiYWNrZ3JvdW5kOiAjMzMzOyBcclxuXHRcdGNvbG9yOiB3aGl0ZTsgXHJcblx0XHRmb250LXdlaWdodDogYm9sZDsgXHJcblx0fVxyXG5cdHRkLCB0aCB7IFxyXG5cdFx0cGFkZGluZzogNnB4OyBcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDsgXHJcblx0fVxyXG5cdC5tYXAge1xyXG5cdFx0YmFja2dyb3VuZDogZ3JleTtcclxuXHRcdGhlaWdodDogMTAwdmg7XHJcblx0XHR3aWR0aDogMTAwdnc7XHJcblx0ICB9XHJcblxyXG5cclxuXHQvKlxyXG5cdE1heCB3aWR0aCBiZWZvcmUgdGhpcyBQQVJUSUNVTEFSIHRhYmxlIGdldHMgbmFzdHlcclxuXHRUaGlzIHF1ZXJ5IHdpbGwgdGFrZSBlZmZlY3QgZm9yIGFueSBzY3JlZW4gc21hbGxlciB0aGFuIDc2MHB4XHJcblx0YW5kIGFsc28gaVBhZHMgc3BlY2lmaWNhbGx5LlxyXG5cdCovXHJcblx0QG1lZGlhXHJcblx0b25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSxcclxuXHQobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSAge1xyXG5cclxuXHRcdC8qIEZvcmNlIHRhYmxlIHRvIG5vdCBiZSBsaWtlIHRhYmxlcyBhbnltb3JlICovXHJcblx0XHR0YWJsZSwgdGhlYWQsIHRib2R5LCB0aCwgdGQsIHRyIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogSGlkZSB0YWJsZSBoZWFkZXJzIChidXQgbm90IGRpc3BsYXk6IG5vbmU7LCBmb3IgYWNjZXNzaWJpbGl0eSkgKi9cclxuXHRcdHRoZWFkIHRyIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IC05OTk5cHg7XHJcblx0XHRcdGxlZnQ6IC05OTk5cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0dHIgeyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyB9XHJcblxyXG5cdFx0dGQge1xyXG5cdFx0XHQvKiBCZWhhdmUgIGxpa2UgYSBcInJvd1wiICovXHJcblx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiAwJTtcclxuXHRcdH1cclxuXHJcblx0XHR0ZDpiZWZvcmUge1xyXG5cdFx0XHQvKiBOb3cgbGlrZSBhIHRhYmxlIGhlYWRlciAqL1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdC8qIFRvcC9sZWZ0IHZhbHVlcyBtaW1pYyBwYWRkaW5nICovXHJcblx0XHRcdHRvcDogMHB4O1xyXG5cdFx0XHRsZWZ0OiA2cHg7XHJcblx0XHRcdHdpZHRoOiA0NSU7XHJcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHR9XHJcblxyXG5cdFx0LypcclxuXHRcdExhYmVsIHRoZSBkYXRhXHJcblx0XHQqL1xyXG5cdFx0dGQ6bnRoLW9mLXR5cGUoMSkgeyBmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxNTAlO21hcmdpbi10b3A6MHB4OyB9XHJcbiAgICAgICAgdGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHsgY29udGVudDogXCJOYW1lOlwiOyB9XHJcblx0XHR0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUgeyBjb250ZW50OiBcIlBob25lOlwiOyB9XHJcblx0XHR0ZDpudGgtb2YtdHlwZSgzKTpiZWZvcmUgeyBjb250ZW50OiBcIkFhZGhhciBDYXJkIE51bWJlcjpcIjsgfVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHQvKiBTbWFydHBob25lcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW5cclxuXHRhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcclxuXHRhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xyXG5cdFx0Ym9keSB7XHJcblx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0d2lkdGg6IDMyMHB4OyB9XHJcblx0XHR9XHJcblxyXG5cdC8qIGlQYWRzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xyXG5cdFx0Ym9keSB7XHJcblx0XHRcdHdpZHRoOiA0OTVweDtcclxuXHRcdH1cclxuXHR9IiwiLm1hcCB7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dzsgfVxuXG4vKiBcclxuXHRHZW5lcmljIFN0eWxpbmcsIGZvciBEZXNrdG9wcy9MYXB0b3BzIFxyXG5cdCovXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi8qIFplYnJhIHN0cmlwaW5nICovXG50cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxuXG50aCB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxudGQsIHRoIHtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi5tYXAge1xuICBiYWNrZ3JvdW5kOiBncmV5O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7IH1cblxuLypcclxuXHRNYXggd2lkdGggYmVmb3JlIHRoaXMgUEFSVElDVUxBUiB0YWJsZSBnZXRzIG5hc3R5XHJcblx0VGhpcyBxdWVyeSB3aWxsIHRha2UgZWZmZWN0IGZvciBhbnkgc2NyZWVuIHNtYWxsZXIgdGhhbiA3NjBweFxyXG5cdGFuZCBhbHNvIGlQYWRzIHNwZWNpZmljYWxseS5cclxuXHQqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjBweCksIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgLyogRm9yY2UgdGFibGUgdG8gbm90IGJlIGxpa2UgdGFibGVzIGFueW1vcmUgKi9cbiAgdGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgLyogSGlkZSB0YWJsZSBoZWFkZXJzIChidXQgbm90IGRpc3BsYXk6IG5vbmU7LCBmb3IgYWNjZXNzaWJpbGl0eSkgKi9cbiAgdGhlYWQgdHIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC05OTk5cHg7XG4gICAgbGVmdDogLTk5OTlweDsgfVxuICB0ciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgfVxuICB0ZCB7XG4gICAgLyogQmVoYXZlICBsaWtlIGEgXCJyb3dcIiAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwJTsgfVxuICB0ZDpiZWZvcmUge1xuICAgIC8qIE5vdyBsaWtlIGEgdGFibGUgaGVhZGVyICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIFRvcC9sZWZ0IHZhbHVlcyBtaW1pYyBwYWRkaW5nICovXG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogNnB4O1xuICAgIHdpZHRoOiA0NSU7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gIC8qXHJcblx0XHRMYWJlbCB0aGUgZGF0YVxyXG5cdFx0Ki9cbiAgdGQ6bnRoLW9mLXR5cGUoMSkge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7IH1cbiAgdGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIk5hbWU6XCI7IH1cbiAgdGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlBob25lOlwiOyB9XG4gIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJBYWRoYXIgQ2FyZCBOdW1iZXI6XCI7IH0gfVxuXG4vKiBTbWFydHBob25lcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAzMjBweDsgfSB9XG5cbi8qIGlQYWRzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIGJvZHkge1xuICAgIHdpZHRoOiA0OTVweDsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apiService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apiService */ "./src/app/apiService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../factories/globalFactories */ "./src/app/factories/globalFactories.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










//import { HttpClient } from '@angular/common/http';



var STORAGE_KEY = 'my_images';
var H = window['H'];
var HomePage = /** @class */ (function () {
    function HomePage(router, geolocation, http, camera, file, webview, ref, actionSheetController, toastController, storage, plt, loadingController) {
        this.router = router;
        this.geolocation = geolocation;
        this.http = http;
        this.camera = camera;
        this.file = file;
        this.webview = webview;
        this.ref = ref;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.storage = storage;
        this.plt = plt;
        this.loadingController = loadingController;
        this.fileUrl = null;
        this.images = [];
        // these are the  on click button show and hide the  fetures 
        this.loginButton = false;
        this.signUpButton = false;
        this.uploadImage = false;
        this.mapsData = true;
        this.existingUser = false;
        _factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["logOutfactory"].setAdminLoginFactory(true);
        _factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["loginUserData"].initialiseLoginUsereDataFactory();
        this.location();
    }
    HomePage.prototype.location = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // console.log(resp.coords)
            _this.mapData({ lat: resp.coords.latitude, lon: resp.coords.longitude });
        }).catch(function (error) {
            //console.log('Error getting location', error);
        });
    };
    // display in map 
    HomePage.prototype.mapData = function (val) {
        var coordsData = { lat: val.lat, lng: val.lon };
        var platform = new H.service.Platform({
            app_id: 'Xs9OgBdukNyvJbPrJjS7',
            app_code: 'rveTk4vWm3IgrJo4qdb_0g',
            useCIT: true,
            useHTTPS: true
        });
        var defaultLayers = platform.createDefaultLayers({
            tileSize: 256 * Math.min(2, devicePixelRatio),
            ppi: devicePixelRatio > 1 ? 320 : 72
        });
        var map = new H.Map(this.mapContainer.nativeElement, defaultLayers.normal.map, {
            center: coordsData,
            pixelRatio: Math.min(2, devicePixelRatio),
            zoom: 10
        });
        var marker = new H.map.Marker(coordsData);
        map.addObject(marker);
        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        var ui = H.ui.UI.createDefault(map, defaultLayers);
        return map;
    };
    HomePage.prototype.submit = function () {
        var _this = this;
        this.message = " Fetching Login Details ..........";
        // for login 
        // get the data from db  with validation 
        //console.log(apiService.login + this.username);
        this.http.get(_apiService__WEBPACK_IMPORTED_MODULE_2__["apiService"].login + this.username).subscribe(function (data) {
            _this.loginData = data;
            console.log(data);
            if (_this.loginData == null) {
                _this.message = " Your not a Existing Usere.. ";
            }
            else {
                // console.log(this.loginData.message.rows[0].value);
                if (_this.loginData._id == _this.username && _this.loginData.password == _this.password) {
                    if (_this.loginData.state == "active") {
                        if (_this.loginData._id == "admin") {
                            _this.message = "Admin Login success!!!!!";
                            // admin page redirect 
                            //this.router.navigateByUrl('/location');
                            _this.router.navigateByUrl('/adminApprove');
                        }
                        else {
                            _this.message = _this.loginData._id + "Login success!!!!!";
                            //console.log("login user data", this.loginData);
                            _factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["loginUserData"].setLoginUserData(_this.loginData);
                            _this.router.navigateByUrl('/vendorDashboard');
                        }
                        //this.router.navigateByUrl('/location');
                        //this.router.navigateByUrl('/simData');
                    }
                    else {
                        _this.message = "Your Account is Inactive.Kindly Contact Admin.";
                    }
                }
                else {
                    _this.message = "Oops!! Username or password is Wrong";
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.login = function () {
        // only  for sisplay the login feilds 
        this.loginButton = !this.loginButton;
        this.signUpButton = false;
        this.message = '';
        this.uploadImage = false;
        this.mapsData = false;
    };
    HomePage.prototype.signUp = function () {
        this.signUpButton = !this.signUpButton;
        this.loginButton = false;
        this.uploadImage = false;
        this.message = '';
        this.mapsData = false;
    };
    HomePage.prototype.RegisterSubmit = function () {
        var _this = this;
        if (this.name == undefined || this.name == "" || this.name == null) {
            this.userEmailMessage = 'Please Enter Name';
        }
        else if (this.email == undefined || this.email == "" || this.email == null) {
            this.userEmailMessage = 'Please Enter email';
        }
        else if (this.phone == undefined || this.phone == 0 || this.phone == null) {
            this.userEmailMessage = 'Please Enter phone';
        }
        else if (this.password == undefined || this.password == "" || this.password == null) {
            this.userEmailMessage = 'Please Enter password';
        }
        else if (this.companyName == undefined || this.companyName == "" || this.companyName == null) {
            this.userEmailMessage = 'Please Enter Company name';
        }
        else {
            this.userEmailMessage = 'Storing Data....';
            this.http.post(_apiService__WEBPACK_IMPORTED_MODULE_2__["apiService"].signUp, {
                _id: this.email,
                name: this.name,
                email: this.email,
                phone: this.phone,
                password: this.password,
                company: this.companyName,
                state: "inActive"
            }).subscribe(function (data) {
                console.log("POST Request is successful ", data);
                _this.userEmailMessage = 'Registered successfully,An Verification Email has been sent to Your Email';
                _this.reset();
            }, function (error) {
                console.log("Error", error);
            });
        }
    };
    HomePage.prototype.reset = function () {
        this.name = '',
            this.email = '';
        this.phone = 0;
        this.password = '';
        this.companyName = '';
    };
    HomePage.prototype.onChange = function () {
        this.message = "";
        this.userEmailMessage = "";
        if (this.email) // if a is Not negative,undefined,null,empty value then...
         {
            this.checkUserNameExists(this.email);
        }
    };
    HomePage.prototype.upload = function () {
        this.uploadImage = !this.uploadImage;
        this.signUpButton = false;
        this.loginButton = false;
        this.message = '';
        this.mapsData = false;
        //alert("upload data")
    };
    HomePage.prototype.checkUserNameExists = function (email) {
        var _this = this;
        console.log("Entered Email id-->" + email);
        this.http.get(_apiService__WEBPACK_IMPORTED_MODULE_2__["apiService"].checkUserExists + email).subscribe(function (data) {
            _this.loginData = data;
            if (_this.loginData !== null) {
                console.log('Api Response-->' + _this.loginData._id);
                _this.userEmailMessage = 'Email Id Already Exists';
            }
        });
    };
    //Image upload code
    HomePage.prototype.loadStoredImages = function () {
        var _this = this;
        (this.images.length != 0) ? this.images = [] : this.images;
        this.storage.get(STORAGE_KEY).then(function (images) {
            //alert('images :' + images);
            if (images) {
                var arr = JSON.parse(images);
                _this.images = [];
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var img = arr_1[_i];
                    var filePath = _this.file.dataDirectory + img;
                    var resPath = _this.pathForImage(filePath);
                    _this.images.push({ name: img, path: resPath, filePath: filePath });
                    // alert("pushed Data: " + this.images);
                }
            }
        });
    };
    HomePage.prototype.pathForImage = function (img) {
        //alert("pathForImage:-->" + img)
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    HomePage.prototype.presentToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // call done from user side 
    HomePage.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.plt.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                //alert("If android hited" + imagePath ) 
                // From gelary
                var correctPath_1 = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                var currentName_1 = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                _this.copyFileToLocalDir(correctPath_1, currentName_1, _this.createFileName());
            }
            else {
                // from camera 
                // alert("else hited" + imagePath)
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        });
    };
    HomePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = _factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["SimFactory"].getSimFactory().simSerialNumber + ".jpg";
        //alert("upload Image with SImNumber " + SimFactory.getSimFactory().simSerialNumber);
        //alert("Total Sim Info  " + JSON.stringify(SimFactory.getSimFactory()));
        return newFileName;
    };
    HomePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            // alert("newFileName --> " + newFileName); 
            _this.updateStoredImages(newFileName);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    HomePage.prototype.updateStoredImages = function (name) {
        var _this = this;
        //alert( 'updateStoredImages -->' + name )
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            if (!arr) {
                var newImages = [name];
                _this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                arr.push(name);
                _this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
            var filePath = _this.file.dataDirectory + name;
            var resPath = _this.pathForImage(filePath);
            var newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
            _this.images = [newEntry].concat(_this.images);
            //alert("images: --> " + this.images);
            _this.ref.detectChanges(); // trigger change detection cycle
        });
    };
    HomePage.prototype.deleteImage = function (imgEntry, position) {
        var _this = this;
        this.images.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) { return name != imgEntry.name; });
            _this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
            _this.file.removeFile(correctPath, imgEntry.name).then(function (res) {
                _this.presentToast('File removed.');
            });
        });
    };
    HomePage.prototype.startUpload = function (imgEntry, position) {
        var _this = this;
        this.positionData = position;
        //alert('upload Button Hited ==>' + imgEntry)
        this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(function (entry) {
            entry.file(function (file) { return _this.readFile(file); });
        })
            .catch(function (err) {
            _this.presentToast('Error while reading file.');
        });
    };
    HomePage.prototype.readFile = function (file) {
        var _this = this;
        //alert("reading the file from input "+ file);
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], {
                type: file.type,
            });
            //alert("blobImage --> " + imgBlob);
            //alert("file " + file);
            formData.append('myImage', imgBlob, file.name);
            alert("SIMInfo" + _factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["SimFactory"].getSimFactory().simSerialNumber);
            _this.uploadImageData(formData);
        };
        reader.readAsArrayBuffer(file);
    };
    HomePage.prototype.uploadImageData = function (formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({})];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        //simNumberData: SimFactory.getSimFactory().simSerialNumber,
                        this.http.post(_apiService__WEBPACK_IMPORTED_MODULE_2__["apiService"].uploadImage + '?collection=' + _apiService__WEBPACK_IMPORTED_MODULE_2__["values"].uploadImageCollection, formData)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["finalize"])(function () {
                            loading.dismiss();
                        }))
                            .subscribe(function (res) {
                            //alert("upload REs" + JSON.stringify(res))
                            if (res['message'] == 'Data submitted successfully.') {
                                // alert("uploaded")
                                _this.presentToast('File upload complete.');
                                _this.images.splice(_this.positionData, 1);
                            }
                            else {
                                //alert("faild");
                                _this.presentToast('File upload failed.');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomePage.prototype, "mapContainer", void 0);
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_10__["WebView"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map