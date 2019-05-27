(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor-dashbord-vendor-dashbord-module"],{

/***/ "./src/app/service/geo-location.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/geo-location.service.ts ***!
  \*************************************************/
/*! exports provided: GeoLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoLocationService", function() { return GeoLocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var H = window['H'];
var GeoLocationService = /** @class */ (function () {
    function GeoLocationService(http, geolocation) {
        var _this = this;
        this.http = http;
        // get current location 
        geolocation.getCurrentPosition().then(function (location) {
            //console.log(location.coords);
            // based on the current location forming the data  to the  json  
            _this.mapData({ latitude: location.coords.latitude, longitude: location.coords.longitude });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    GeoLocationService.prototype.loadMap = function () {
        /*  This function will get the data from APi call
            Based on the mcc,mnc,cid,lac
 
 
        */
        var _this = this;
        this.http.post('http://localhost:3000/mobileCodes', { mcc: this.mcc,
            mnc: this.mnc,
            lac: this.lac,
            cid: this.cellId
        }).subscribe(function (data) {
            console.log("POST Request is successful ", data);
            /*accuracy: 603
              latitude: 17.454144
              longitude: 78.541275*/
            _this.mapData(data);
        }, function (error) {
            console.log("Error", error);
        });
    };
    GeoLocationService.prototype.mapData = function (val) {
        var coordsData = { lat: val.latitude, lng: val.longitude };
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GeoLocationService.prototype, "mapContainer", void 0);
    GeoLocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]])
    ], GeoLocationService);
    return GeoLocationService;
}());



/***/ }),

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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title> Welcome to {{vendorName}} DashBoard <ion-button color=\"primary\" style=\"float: right;\"\n        (click)=\"goBack()\">Logout\n      </ion-button>\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <p style=\"color:red\"> {{userMessage}}</p>\n  <ion-row>\n    <ion-col>\n      <ion-button color=\"success\" style=\"float: left;\" (click)=\"createEmployee()\">Add Employee</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button color=\"warning\" style=\"float: left;\" (click)=\"getAllEmployees()\">Get All Employee List</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button color=\"primary\" style=\"float: left;\" (click)=\"reports()\">Reports</ion-button>\n    </ion-col>\n\n\n  </ion-row>\n\n  <div *ngIf=\"reportsTable\">\n    <br>\n    <br>\n\n    Reports On the Way\n  </div>\n\n  <div *ngIf=\"addEmployee\">\n    <br>\n    <br>\n    <p>Add Your Employee</p>\n    <ion-item>\n      <td>\n      </td>\n      <ion-label floating>Name <span style=\"color:red\">*</span></ion-label>\n      <ion-input [(ngModel)]=\"name\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Phone<span style=\"color:red\">*</span></ion-label>\n      <ion-input [(ngModel)]=\"Phone\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Aadhar Card Numbe<span style=\"color:red\">*</span></ion-label>\n      <ion-input [(ngModel)]=\"aadharCardNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n    </ion-item>\n    <br>\n    <p> Add mobile Detils</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Sim Number</ion-label>\n            <ion-input [(ngModel)]=\"simNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>MCC</ion-label>\n            <ion-input [(ngModel)]=\"mcc\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>MNC</ion-label>\n            <ion-input [(ngModel)]=\"mnc\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>LAC</ion-label>\n            <ion-input [(ngModel)]=\"lac\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>CELL ID</ion-label>\n            <ion-input [(ngModel)]=\"cellId\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-button color=\"success\" style=\"float: left;\" (click)=\"submitEmployee()\">Submit</ion-button>\n    </ion-grid>\n  </div>\n  <div *ngIf=\"getEmployeeList\">\n    <br>\n    <br>\n    <p> All Your Employee List </p>\n    <table>\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Phone</th>\n          <th>Aadhar Card Number</th>\n          <th>Status</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of adminData\">\n          <td> {{item.name}}</td>\n          <td> {{item.Phone}}</td>\n          <td> {{item.aadharCardNumber}}</td>\n          <!-- Give update abd delete rights to the dmin -->\n          <td>\n            <ion-button color=\"primary\" style=\"float: left;\" (click)=\"trackByGeoLocation(item)\">Geo Location\n            </ion-button>\n            <ion-button color=\"dark\" style=\"float: left;\" (click)=\"trackByNumber(item)\">Mobile Number</ion-button>\n            <ion-button color=\"warning\" style=\"float: left;\" (click)=\"edit(item)\">{{updateButtonValue}}</ion-button>\n            <ion-button color=\"danger\" style=\"float: left;\" (click)=\"delete(item)\">Delete</ion-button>\n          </td>\n\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <div *ngIf=\"UpdateDataFeilds\">\n    <br>\n    <br>\n    <p>update Your Employee</p>\n    <ion-item>\n      <td>\n      </td>\n      <ion-label floating>Name <span style=\"color:red\">*</span></ion-label>\n      <ion-input [(ngModel)]=\"name\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Phone<span style=\"color:red\">*</span></ion-label>\n      <ion-input [(ngModel)]=\"Phone\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Aadhar Card Numbe<span style=\"color:red\">*</span></ion-label>\n      <ion-input [(ngModel)]=\"aadharCardNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n    </ion-item>\n    <br>\n    <p> Update mobile Detils</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Sim Number</ion-label>\n            <ion-input [(ngModel)]=\"simNumber\" type=\"text\" value=\"\" (change)=\"onChange()\" disabled></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>MCC</ion-label>\n            <ion-input [(ngModel)]=\"mcc\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>MNC</ion-label>\n            <ion-input [(ngModel)]=\"mnc\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>LAC</ion-label>\n            <ion-input [(ngModel)]=\"lac\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>CELL ID</ion-label>\n            <ion-input [(ngModel)]=\"cellId\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-button color=\"success\" style=\"float: left;\" (click)=\"update()\">Update</ion-button>\n    </ion-grid>\n\n  </div>\n  <div #map class=\"map\" *ngIf=\"mapOnDisplay\"></div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/vendor-dashbord/vendor-dashbord.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/vendor-dashbord/vendor-dashbord.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \n\tGeneric Styling, for Desktops/Laptops \n\t*/\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n/* Zebra striping */\ntr:nth-of-type(odd) {\n  background: #eee; }\nth {\n  background: #333;\n  color: white;\n  font-weight: bold; }\ntd, th {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left; }\n.map {\n  background: grey;\n  height: 100vh;\n  width: 100vw; }\n/*\n\tMax width before this PARTICULAR table gets nasty\n\tThis query will take effect for any screen smaller than 760px\n\tand also iPads specifically.\n\t*/\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  /* Force table to not be like tables anymore */\n  table, thead, tbody, th, td, tr {\n    display: block; }\n  /* Hide table headers (but not display: none;, for accessibility) */\n  thead tr {\n    position: absolute;\n    top: -9999px;\n    left: -9999px; }\n  tr {\n    border: 1px solid #ccc; }\n  td {\n    /* Behave  like a \"row\" */\n    border: none;\n    border-bottom: 1px solid #eee;\n    position: relative;\n    padding-left: 0%; }\n  td:before {\n    /* Now like a table header */\n    position: relative;\n    /* Top/left values mimic padding */\n    top: 0px;\n    left: 6px;\n    width: 45%;\n    padding-right: 10px;\n    white-space: nowrap; }\n  /*\n\t\tLabel the data\n\t\t*/\n  td:nth-of-type(1) {\n    font-weight: bold;\n    font-size: 150%;\n    margin-top: 0px; }\n  td:nth-of-type(1):before {\n    content: \"Name:\"; }\n  td:nth-of-type(2):before {\n    content: \"Phone:\"; }\n  td:nth-of-type(3):before {\n    content: \"Aadhar Card Number:\"; } }\n/* Smartphones (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  body {\n    padding: 0;\n    margin: 0;\n    width: 320px; } }\n/* iPads (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  body {\n    width: 495px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZGhha3Jpc2huYS9Eb2N1bWVudHMvTXlXb3Jrcy9PZmZpY2VMb2NhbEhvc3QvbXlPZmZpY2VXb3Jrcy9zdHVmZjIvZ2VvTG9jYXRpb24vc3JjL2FwcC92ZW5kb3ItZGFzaGJvcmQvdmVuZG9yLWRhc2hib3JkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdmVuZG9yLWRhc2hib3JkL3ZlbmRvci1kYXNoYm9yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7O0VDRUM7QURDRDtFQUNDLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTtBQUUxQixtQkFBQTtBQUNBO0VBQ0MsZ0JBQWdCLEVBQUE7QUFFakI7RUFDQyxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQixFQUFBO0FBRWxCO0VBQ0MsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTtBQUVqQjtFQUNDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWSxFQUFBO0FBSWI7Ozs7RUNFQztBREdEO0VBSUMsOENBQUE7RUFDQTtJQUNDLGNBQWMsRUFBQTtFQUdmLG1FQUFBO0VBQ0E7SUFDQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWEsRUFBQTtFQUdkO0lBQUssc0JBQXNCLEVBQUE7RUFFM0I7SUFDQyx5QkFBQTtJQUNBLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBR2pCO0lBQ0MsNEJBQUE7SUFDQSxrQkFBa0I7SUFDbEIsa0NBQUE7SUFDQSxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CLEVBQUE7RUFHcEI7O0dDWEM7RURjRDtJQUFvQixpQkFBZ0I7SUFBQyxlQUFjO0lBQUMsZUFBYyxFQUFBO0VBQzVEO0lBQTJCLGdCQUFnQixFQUFBO0VBQ2pEO0lBQTJCLGlCQUFpQixFQUFBO0VBQzVDO0lBQTJCLDhCQUE4QixFQUFBLEVBQUk7QUFJOUQscURBQUE7QUFDQTtFQUdDO0lBQ0MsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZLEVBQUEsRUFBRztBQUdqQiwrQ0FBQTtBQUNBO0VBQ0M7SUFDQyxZQUFZLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZlbmRvci1kYXNoYm9yZC92ZW5kb3ItZGFzaGJvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHQvKiBcblx0R2VuZXJpYyBTdHlsaW5nLCBmb3IgRGVza3RvcHMvTGFwdG9wcyBcblx0Ki9cblx0dGFibGUgeyBcblx0XHR3aWR0aDogMTAwJTsgXG5cdFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXG5cdH1cblx0LyogWmVicmEgc3RyaXBpbmcgKi9cblx0dHI6bnRoLW9mLXR5cGUob2RkKSB7IFxuXHRcdGJhY2tncm91bmQ6ICNlZWU7IFxuXHR9XG5cdHRoIHsgXG5cdFx0YmFja2dyb3VuZDogIzMzMzsgXG5cdFx0Y29sb3I6IHdoaXRlOyBcblx0XHRmb250LXdlaWdodDogYm9sZDsgXG5cdH1cblx0dGQsIHRoIHsgXG5cdFx0cGFkZGluZzogNnB4OyBcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjY2NjOyBcblx0XHR0ZXh0LWFsaWduOiBsZWZ0OyBcblx0fVxuXHQubWFwIHtcblx0XHRiYWNrZ3JvdW5kOiBncmV5O1xuXHRcdGhlaWdodDogMTAwdmg7XG5cdFx0d2lkdGg6IDEwMHZ3O1xuXHQgIH1cblxuXG5cdC8qXG5cdE1heCB3aWR0aCBiZWZvcmUgdGhpcyBQQVJUSUNVTEFSIHRhYmxlIGdldHMgbmFzdHlcblx0VGhpcyBxdWVyeSB3aWxsIHRha2UgZWZmZWN0IGZvciBhbnkgc2NyZWVuIHNtYWxsZXIgdGhhbiA3NjBweFxuXHRhbmQgYWxzbyBpUGFkcyBzcGVjaWZpY2FsbHkuXG5cdCovXG5cdEBtZWRpYVxuXHRvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLFxuXHQobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSAge1xuXG5cdFx0LyogRm9yY2UgdGFibGUgdG8gbm90IGJlIGxpa2UgdGFibGVzIGFueW1vcmUgKi9cblx0XHR0YWJsZSwgdGhlYWQsIHRib2R5LCB0aCwgdGQsIHRyIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdH1cblxuXHRcdC8qIEhpZGUgdGFibGUgaGVhZGVycyAoYnV0IG5vdCBkaXNwbGF5OiBub25lOywgZm9yIGFjY2Vzc2liaWxpdHkpICovXG5cdFx0dGhlYWQgdHIge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAtOTk5OXB4O1xuXHRcdFx0bGVmdDogLTk5OTlweDtcblx0XHR9XG5cblx0XHR0ciB7IGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IH1cblxuXHRcdHRkIHtcblx0XHRcdC8qIEJlaGF2ZSAgbGlrZSBhIFwicm93XCIgKi9cblx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0cGFkZGluZy1sZWZ0OiAwJTtcblx0XHR9XG5cblx0XHR0ZDpiZWZvcmUge1xuXHRcdFx0LyogTm93IGxpa2UgYSB0YWJsZSBoZWFkZXIgKi9cblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdC8qIFRvcC9sZWZ0IHZhbHVlcyBtaW1pYyBwYWRkaW5nICovXG5cdFx0XHR0b3A6IDBweDtcblx0XHRcdGxlZnQ6IDZweDtcblx0XHRcdHdpZHRoOiA0NSU7XG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuXHRcdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHR9XG5cblx0XHQvKlxuXHRcdExhYmVsIHRoZSBkYXRhXG5cdFx0Ki9cblx0XHR0ZDpudGgtb2YtdHlwZSgxKSB7IGZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE1MCU7bWFyZ2luLXRvcDowcHg7IH1cbiAgICAgICAgdGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHsgY29udGVudDogXCJOYW1lOlwiOyB9XG5cdFx0dGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHsgY29udGVudDogXCJQaG9uZTpcIjsgfVxuXHRcdHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7IGNvbnRlbnQ6IFwiQWFkaGFyIENhcmQgTnVtYmVyOlwiOyB9XG5cdFx0XG5cdH1cblxuXHQvKiBTbWFydHBob25lcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cblx0QG1lZGlhIG9ubHkgc2NyZWVuXG5cdGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuXHRhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xuXHRcdGJvZHkge1xuXHRcdFx0cGFkZGluZzogMDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdHdpZHRoOiAzMjBweDsgfVxuXHRcdH1cblxuXHQvKiBpUGFkcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cblx0QG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG5cdFx0Ym9keSB7XG5cdFx0XHR3aWR0aDogNDk1cHg7XG5cdFx0fVxuXHR9IiwiLyogXG5cdEdlbmVyaWMgU3R5bGluZywgZm9yIERlc2t0b3BzL0xhcHRvcHMgXG5cdCovXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyB9XG5cbi8qIFplYnJhIHN0cmlwaW5nICovXG50cjpudGgtb2YtdHlwZShvZGQpIHtcbiAgYmFja2dyb3VuZDogI2VlZTsgfVxuXG50aCB7XG4gIGJhY2tncm91bmQ6ICMzMzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxudGQsIHRoIHtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbi5tYXAge1xuICBiYWNrZ3JvdW5kOiBncmV5O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7IH1cblxuLypcblx0TWF4IHdpZHRoIGJlZm9yZSB0aGlzIFBBUlRJQ1VMQVIgdGFibGUgZ2V0cyBuYXN0eVxuXHRUaGlzIHF1ZXJ5IHdpbGwgdGFrZSBlZmZlY3QgZm9yIGFueSBzY3JlZW4gc21hbGxlciB0aGFuIDc2MHB4XG5cdGFuZCBhbHNvIGlQYWRzIHNwZWNpZmljYWxseS5cblx0Ki9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIC8qIEZvcmNlIHRhYmxlIHRvIG5vdCBiZSBsaWtlIHRhYmxlcyBhbnltb3JlICovXG4gIHRhYmxlLCB0aGVhZCwgdGJvZHksIHRoLCB0ZCwgdHIge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC8qIEhpZGUgdGFibGUgaGVhZGVycyAoYnV0IG5vdCBkaXNwbGF5OiBub25lOywgZm9yIGFjY2Vzc2liaWxpdHkpICovXG4gIHRoZWFkIHRyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOTk5OXB4O1xuICAgIGxlZnQ6IC05OTk5cHg7IH1cbiAgdHIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IH1cbiAgdGQge1xuICAgIC8qIEJlaGF2ZSAgbGlrZSBhIFwicm93XCIgKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMCU7IH1cbiAgdGQ6YmVmb3JlIHtcbiAgICAvKiBOb3cgbGlrZSBhIHRhYmxlIGhlYWRlciAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBUb3AvbGVmdCB2YWx1ZXMgbWltaWMgcGFkZGluZyAqL1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDZweDtcbiAgICB3aWR0aDogNDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAvKlxuXHRcdExhYmVsIHRoZSBkYXRhXG5cdFx0Ki9cbiAgdGQ6bnRoLW9mLXR5cGUoMSkge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7IH1cbiAgdGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIk5hbWU6XCI7IH1cbiAgdGQ6bnRoLW9mLXR5cGUoMik6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlBob25lOlwiOyB9XG4gIHRkOm50aC1vZi10eXBlKDMpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJBYWRoYXIgQ2FyZCBOdW1iZXI6XCI7IH0gfVxuXG4vKiBTbWFydHBob25lcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIGJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAzMjBweDsgfSB9XG5cbi8qIGlQYWRzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIGJvZHkge1xuICAgIHdpZHRoOiA0OTVweDsgfSB9XG4iXX0= */"

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
/* harmony import */ var _service_geo_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/geo-location.service */ "./src/app/service/geo-location.service.ts");








var H = window['H'];
var vendorDashboardPage = /** @class */ (function () {
    function vendorDashboardPage(http, router, geoService) {
        this.http = http;
        this.router = router;
        this.geoService = geoService;
        this.addEmployee = false;
        this.getEmployeeList = false;
        this.UpdateDataFeilds = false;
        this.reportsTable = false;
        this.mapOnDisplay = false;
        // update button value 
        this.updateButtonValue = "Update";
        if (!_factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["logOutfactory"].getAdminLoginFactory()) {
            this.router.navigateByUrl('/home');
        }
    }
    //  @ViewChild('map') mapContainer: ElementRef;
    vendorDashboardPage.prototype.ngOnInit = function () {
        this.userMessage = '';
        this.vendorName = (_factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["loginUserData"].getLoginUserData() == undefined) ? '' : _factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["loginUserData"].getLoginUserData().company;
        //console.log("CompanyName -->" ,this.vendorName)
    };
    vendorDashboardPage.prototype.reports = function () {
        this.reportsTable = true;
        this.addEmployee = false;
        this.getEmployeeList = false;
        this.userMessage = '';
        this.UpdateDataFeilds = false;
    };
    vendorDashboardPage.prototype.createEmployee = function () {
        this.addEmployee = true;
        this.getEmployeeList = false;
        this.userMessage = '';
        this.UpdateDataFeilds = false;
        this.reportsTable = false;
    };
    ;
    vendorDashboardPage.prototype.getAllEmployees = function () {
        this.LoginCollection = _apiService__WEBPACK_IMPORTED_MODULE_3__["values"].collection;
        this.getAllData();
        //console.log('get login data', this.LoginCollection);
        this.getEmployeeList = true;
        this.addEmployee = false;
        this.userMessage = '';
        this.UpdateDataFeilds = false;
        this.reportsTable = false;
    };
    // store empoyee data 
    vendorDashboardPage.prototype.submitEmployee = function () {
        var _this = this;
        console.log("ORG Name -->", this.vendorName);
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
            var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].createUserColletionDB + '?collection=' + _apiService__WEBPACK_IMPORTED_MODULE_3__["values"].collection;
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
                cellId: this.cellId,
                contactBelongsTo: this.vendorName
            }).subscribe(function (res) {
                console.log('storedData', res);
                _this.userMessage = "Data submitted ";
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
            var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].orgLevelEmplpyeeList + '?collection=' + _apiService__WEBPACK_IMPORTED_MODULE_3__["values"].collection + '&recordBelongsTo=' + this.vendorName;
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
        var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].updateOrgData + '?collection=' + _apiService__WEBPACK_IMPORTED_MODULE_3__["values"].collection;
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
        var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].delete + '?collection=' + _apiService__WEBPACK_IMPORTED_MODULE_3__["values"].collection + '&id=' + val.simNumber;
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
    //TO Get the Location Co-ordinates
    vendorDashboardPage.prototype.trackByNumber = function (val) {
        var _this = this;
        this.mapOnDisplay = true;
        console.log("DB Obj-->" + val.mnc);
        var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].geoFetchMobileLocation;
        this.http.post(url, {
            mcc: val.mcc,
            mnc: val.mnc,
            lac: val.lac,
            cid: val.cellId
        }).subscribe(function (data) {
            _this.handleData = data;
            // console.log("Db Data --> " ,data)
            _this.userMessage = _this.handleData.message + "LAT" + _this.handleData.lat + "Long-->" + _this.handleData.lon;
            _this.mapData({ latitude: _this.handleData.lat, longitude: _this.handleData.lon });
        });
    };
    // display in map 
    vendorDashboardPage.prototype.mapData = function (val) {
        var coordsData = { lat: val.latitude, lng: val.longitude };
        console.log('Preparing Map-->' + coordsData);
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
        console.log('Returning Map-->' + map);
        return map;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], vendorDashboardPage.prototype, "mapContainer", void 0);
    vendorDashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-approve',
            template: __webpack_require__(/*! ./vendor-dashbord.page.html */ "./src/app/vendor-dashbord/vendor-dashbord.page.html"),
            styles: [__webpack_require__(/*! ./vendor-dashbord.page.scss */ "./src/app/vendor-dashbord/vendor-dashbord.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_geo_location_service__WEBPACK_IMPORTED_MODULE_6__["GeoLocationService"]])
    ], vendorDashboardPage);
    return vendorDashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=vendor-dashbord-vendor-dashbord-module.js.map