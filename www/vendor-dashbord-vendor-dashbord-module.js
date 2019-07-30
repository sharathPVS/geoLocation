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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title> Welcome to {{vendorName}} DashBoard <ion-button color=\"primary\" style=\"float: right;\"\r\n        (click)=\"goBack()\">Logout\r\n      </ion-button>\r\n    </ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content padding>\r\n  <p style=\"color:red\"> {{userMessage}}</p>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button color=\"success\" style=\"float: left;\" (click)=\"createEmployee()\">Add Employee</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button color=\"warning\" style=\"float: left;\" (click)=\"getAllEmployees()\">Get All Employee List</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button color=\"primary\" style=\"float: left;\" (click)=\"reports()\">Reports</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button color=\"secondary\" style=\"float: left;\" (click)=\"schedule()\">Plan Schedule</ion-button>\r\n    </ion-col>\r\n\r\n\r\n  </ion-row>\r\n  <div *ngIf=\"reportsTable\">\r\n  <ion-item>\r\n    <ion-label>From</ion-label>\r\n    <ion-select [(ngModel)]=\"from\">\r\n      <ion-select-option *ngFor=\"let user of geoFromData\" [value]=\"user\">{{user}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>To</ion-label>\r\n    <ion-select [(ngModel)]=\"to\">\r\n      <ion-select-option *ngFor=\"let user of geoToData\" [value]=\"user\">{{user}}</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n   <ion-row>\r\n    <ion-col>\r\n      <ion-button color=\"success\" style=\"float: left;\" (click)=\"onSelectingChords()\">Submit</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</div>\r\n\r\n  <div *ngIf=\"reportsTable\">\r\n    <br>\r\n    <br>\r\n    <p>Your Reports</p>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Start</th>\r\n          <th>End</th>\r\n          <th>Distance</th>\r\n          <th>Duration</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of geoChordsData\">\r\n          <td>{{item.from}}</td>\r\n          <td>{{item.to}}</td>\r\n          <td> {{item.distance}}</td>\r\n          <td> {{item.duration}}</td>\r\n          \r\n          \r\n\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div *ngIf=\"filteredTable\">\r\n    <br>\r\n    <br>\r\n    <p>Your Report filtered Data</p>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Start</th>\r\n          <th>End</th>\r\n          <th>Distance</th>\r\n          <th>Duration</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of reportingData\">\r\n          <td>{{item.start_address}}</td>\r\n          <td>{{item.end_address}}</td>\r\n          <td> {{item.distance.text}}</td>\r\n          <td> {{item.duration.text}}</td>\r\n          \r\n          \r\n\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div *ngIf=\"scheduleTable\">\r\n    <br>\r\n    <br>\r\n     <ion-item>\r\n    <ion-label>From</ion-label>\r\n     <ion-input type=\"text\" [(ngModel)]=\"from\" name=\"from\">\r\n       \r\n     </ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>To</ion-label>\r\n   <ion-input type=\"text\" [(ngModel)]=\"to\" name=\"to\">\r\n       \r\n     </ion-input>\r\n  </ion-item>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button color=\"success\" style=\"float: left;\" (click)=\"submit()\">Submit</ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  </div>\r\n\r\n  <div *ngIf=\"scheduleTable\">\r\n    <br>\r\n    <br>\r\n    <p>Your Plan Schedule Data</p>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Start</th>\r\n          <th>End</th>\r\n          <th>Distance</th>\r\n          <th>Duration</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of reportingData\">\r\n          <td>{{item.start_address}}</td>\r\n          <td>{{item.end_address}}</td>\r\n          <td> {{item.distance.text}}</td>\r\n          <td> {{item.duration.text}}</td>\r\n          \r\n          \r\n\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div *ngIf=\"addEmployee\">\r\n    <br>\r\n    <br>\r\n    <p>Add Your Employee</p>\r\n    <ion-item>\r\n      <ion-label floating>Name <span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"name\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Phone<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"Phone\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Aadhar Card Number<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"aadharCardNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Vehicle Number<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"vehicleNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n     <ion-item>\r\n    <ion-label>Vehicle Type</ion-label>\r\n    <ion-select [(ngModel)]=\"vehicleType\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n      <ion-select-option value=\"crane\">Crane</ion-select-option>\r\n      <ion-select-option value=\"lorry\">Lorry</ion-select-option>\r\n      <ion-select-option value=\"tractor\">Tractor</ion-select-option>\r\n      <ion-select-option value=\"forkLifter\">Fork Lifter</ion-select-option>\r\n      <ion-select-option value=\"jcb\">JCB</ion-select-option>\r\n      <ion-select-option value=\"tipper\">Tipper</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n      <ion-label floating>F/c exp Date<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"fcExpDate\" type=\"date\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n     <ion-item>\r\n      <ion-label floating>Permit Exp Date<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"permitExpDate\" type=\"date\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Tax Exp Date<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"taxExpDate\" type=\"date\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Insurance Exp Date<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"insuranceExpDate\" type=\"date\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Driver Name<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"driverName\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>License Number<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"licenseNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>License Exp Date<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"licenseExpDate\" type=\"date\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Vehicle Engine Number<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"vehicleEngineNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Vehicle Stock Number<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"vehicleSachtNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <br>\r\n    <p> Add mobile Detils</p>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label floating>Sim Number</ion-label>\r\n            <ion-input [(ngModel)]=\"simNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label floating>MCC</ion-label>\r\n            <ion-input [(ngModel)]=\"mcc\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label floating>MNC</ion-label>\r\n            <ion-input [(ngModel)]=\"mnc\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label floating>LAC</ion-label>\r\n            <ion-input [(ngModel)]=\"lac\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label floating>CELL ID</ion-label>\r\n            <ion-input [(ngModel)]=\"cellId\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-button color=\"success\" style=\"float: left;\" (click)=\"submitEmployee()\">Submit</ion-button>\r\n    </ion-grid>\r\n  </div>\r\n  <div *ngIf=\"getEmployeeList\">\r\n    <br>\r\n    <br>\r\n    <p> All Your Employee List </p>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Name</th>\r\n          <th>Phone</th>\r\n          <th>Aadhar Card Number</th>\r\n          <th>Status</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of adminData\">\r\n          <td> {{item.name}}</td>\r\n          <td> {{item.Phone}}</td>\r\n          <td> {{item.aadharCardNumber}}</td>\r\n          <!-- Give update abd delete rights to the dmin -->\r\n          <td>\r\n            <ion-button color=\"primary\" style=\"float: left;\" (click)=\"trackByGeoLocation(item)\">Geo Location\r\n            </ion-button>\r\n            <ion-button color=\"dark\" style=\"float: left;\" (click)=\"trackByNumber(item)\">Mobile Number</ion-button>\r\n            <ion-button color=\"warning\" style=\"float: left;\" (click)=\"edit(item)\">{{updateButtonValue}}</ion-button>\r\n            <ion-button color=\"danger\" style=\"float: left;\" (click)=\"delete(item)\">Delete</ion-button>\r\n            <ion-button color=\"success\" style=\"float: left;\" (click)=\"selectedUserImages(item)\">Get Images</ion-button>\r\n\r\n          </td>\r\n\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  \r\n  <div *ngIf=\"getEmployeeList\">\r\n  \r\n   <ion-item *ngFor=\"let item of Customers\">\r\n    <ion-thumbnail>\r\n      <ion-img [src]=\"item.imagePath\" style=\"float: left;\"></ion-img>\r\n    </ion-thumbnail>\r\n   </ion-item>\r\n\r\n</div>\r\n\r\n  <div *ngIf=\"UpdateDataFeilds\">\r\n    <br>\r\n    <br>\r\n    <p>update Your Employee</p>\r\n    <ion-item>\r\n      <ion-label floating>Name<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"name\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Phone<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"Phone\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Aadhar Card Numbe<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"aadharCardNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n     <ion-item>\r\n      <ion-label floating>Vehicle Number<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"vehicleNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n     <ion-item>\r\n    <ion-label>Vehicle Type</ion-label>\r\n    <ion-select [(ngModel)]=\"vehicleType\" okText=\"Okay\" cancelText=\"Dismiss\">\r\n      <ion-select-option value=\"crane\">Crane</ion-select-option>\r\n      <ion-select-option value=\"lorry\">Lorry</ion-select-option>\r\n      <ion-select-option value=\"tractor\">Tractor</ion-select-option>\r\n      <ion-select-option value=\"forkLifter\">Fork Lifter</ion-select-option>\r\n      <ion-select-option value=\"jcb\">JCB</ion-select-option>\r\n      <ion-select-option value=\"tipper\">Tipper</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <ion-item>\r\n      <ion-label floating>F/c exp Date<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"fcExpDate\" type=\"date\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n     <ion-item>\r\n      <ion-label floating>Permit Exp Date<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"permitExpDate\" type=\"date\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Tax Exp Date<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"taxExpDate\" type=\"date\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Insurance Exp Date<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"insuranceExpDate\" type=\"date\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Driver Name<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"driverName\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>License Number<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"licenseNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>License Exp Date<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"licenseExpDate\" type=\"date\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Vehicle Engine Number<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"vehicleEngineNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label floating>Vehicle Stock Number<span style=\"color:red\">*</span></ion-label>\r\n      <ion-input [(ngModel)]=\"vehicleSachtNumber\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n    </ion-item>\r\n    <br>\r\n    <p> Update mobile Detils</p>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label floating>Sim Number</ion-label>\r\n            <ion-input [(ngModel)]=\"simNumber\" type=\"text\" value=\"\" (change)=\"onChange()\" disabled></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label floating>MCC</ion-label>\r\n            <ion-input [(ngModel)]=\"mcc\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label floating>MNC</ion-label>\r\n            <ion-input [(ngModel)]=\"mnc\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label floating>LAC</ion-label>\r\n            <ion-input [(ngModel)]=\"lac\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-item>\r\n            <ion-label floating>CELL ID</ion-label>\r\n            <ion-input [(ngModel)]=\"cellId\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-button color=\"success\" style=\"float: left;\" (click)=\"update()\">Update</ion-button>\r\n    </ion-grid>\r\n\r\n  </div>\r\n  <div #map class=\"map\" *ngIf=\"mapOnDisplay\"></div>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/vendor-dashbord/vendor-dashbord.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/vendor-dashbord/vendor-dashbord.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n\tGeneric Styling, for Desktops/Laptops \r\n\t*/\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n/* Zebra striping */\ntr:nth-of-type(odd) {\n  background: #eee; }\nth {\n  background: #333;\n  color: white;\n  font-weight: bold; }\ntd, th {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left; }\n.map {\n  background: grey;\n  height: 100vh;\n  width: 100vw; }\n/*\r\n\tMax width before this PARTICULAR table gets nasty\r\n\tThis query will take effect for any screen smaller than 760px\r\n\tand also iPads specifically.\r\n\t*/\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  /* Force table to not be like tables anymore */\n  table, thead, tbody, th, td, tr {\n    display: block; }\n  /* Hide table headers (but not display: none;, for accessibility) */\n  thead tr {\n    position: absolute;\n    top: -9999px;\n    left: -9999px; }\n  tr {\n    border: 1px solid #ccc; }\n  td {\n    /* Behave  like a \"row\" */\n    border: none;\n    border-bottom: 1px solid #eee;\n    position: relative;\n    padding-left: 0%; }\n  td:before {\n    /* Now like a table header */\n    position: relative;\n    /* Top/left values mimic padding */\n    top: 0px;\n    left: 6px;\n    width: 45%;\n    padding-right: 10px;\n    white-space: nowrap; }\n  /*\r\n\t\tLabel the data\r\n\t\t*/\n  td:nth-of-type(1) {\n    font-weight: bold;\n    font-size: 150%;\n    margin-top: 0px; }\n  td:nth-of-type(1):before {\n    content: \"Name:\"; }\n  td:nth-of-type(2):before {\n    content: \"Phone:\"; }\n  td:nth-of-type(3):before {\n    content: \"Aadhar Card Number:\"; } }\n/* Smartphones (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  body {\n    padding: 0;\n    margin: 0;\n    width: 320px; } }\n/* iPads (portrait and landscape) ----------- */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  body {\n    width: 495px; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVuZG9yLWRhc2hib3JkL0U6XFxnZW9Mb2NhdGlvbi9zcmNcXGFwcFxcdmVuZG9yLWRhc2hib3JkXFx2ZW5kb3ItZGFzaGJvcmQucGFnZS5zY3NzIiwic3JjL2FwcC92ZW5kb3ItZGFzaGJvcmQvdmVuZG9yLWRhc2hib3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQzs7RUNFQztBRENEO0VBQ0MsV0FBVztFQUNYLHlCQUF5QixFQUFBO0FBRTFCLG1CQUFBO0FBQ0E7RUFDQyxnQkFBZ0IsRUFBQTtBQUVqQjtFQUNDLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7QUFFbEI7RUFDQyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBO0FBRWpCO0VBQ0MsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZLEVBQUE7QUFJYjs7OztFQ0VDO0FER0Q7RUFJQyw4Q0FBQTtFQUNBO0lBQ0MsY0FBYyxFQUFBO0VBR2YsbUVBQUE7RUFDQTtJQUNDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYSxFQUFBO0VBR2Q7SUFBSyxzQkFBc0IsRUFBQTtFQUUzQjtJQUNDLHlCQUFBO0lBQ0EsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUFHakI7SUFDQyw0QkFBQTtJQUNBLGtCQUFrQjtJQUNsQixrQ0FBQTtJQUNBLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTtFQUdwQjs7R0NYQztFRGNEO0lBQW9CLGlCQUFnQjtJQUFDLGVBQWM7SUFBQyxlQUFjLEVBQUE7RUFDNUQ7SUFBMkIsZ0JBQWdCLEVBQUE7RUFDakQ7SUFBMkIsaUJBQWlCLEVBQUE7RUFDNUM7SUFBMkIsOEJBQThCLEVBQUEsRUFBSTtBQUk5RCxxREFBQTtBQUNBO0VBR0M7SUFDQyxVQUFVO0lBQ1YsU0FBUztJQUNULFlBQVksRUFBQSxFQUFHO0FBR2pCLCtDQUFBO0FBQ0E7RUFDQztJQUNDLFlBQVksRUFBQSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvdmVuZG9yLWRhc2hib3JkL3ZlbmRvci1kYXNoYm9yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcdC8qIFxyXG5cdEdlbmVyaWMgU3R5bGluZywgZm9yIERlc2t0b3BzL0xhcHRvcHMgXHJcblx0Ki9cclxuXHR0YWJsZSB7IFxyXG5cdFx0d2lkdGg6IDEwMCU7IFxyXG5cdFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcblx0fVxyXG5cdC8qIFplYnJhIHN0cmlwaW5nICovXHJcblx0dHI6bnRoLW9mLXR5cGUob2RkKSB7IFxyXG5cdFx0YmFja2dyb3VuZDogI2VlZTsgXHJcblx0fVxyXG5cdHRoIHsgXHJcblx0XHRiYWNrZ3JvdW5kOiAjMzMzOyBcclxuXHRcdGNvbG9yOiB3aGl0ZTsgXHJcblx0XHRmb250LXdlaWdodDogYm9sZDsgXHJcblx0fVxyXG5cdHRkLCB0aCB7IFxyXG5cdFx0cGFkZGluZzogNnB4OyBcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxyXG5cdFx0dGV4dC1hbGlnbjogbGVmdDsgXHJcblx0fVxyXG5cdC5tYXAge1xyXG5cdFx0YmFja2dyb3VuZDogZ3JleTtcclxuXHRcdGhlaWdodDogMTAwdmg7XHJcblx0XHR3aWR0aDogMTAwdnc7XHJcblx0ICB9XHJcblxyXG5cclxuXHQvKlxyXG5cdE1heCB3aWR0aCBiZWZvcmUgdGhpcyBQQVJUSUNVTEFSIHRhYmxlIGdldHMgbmFzdHlcclxuXHRUaGlzIHF1ZXJ5IHdpbGwgdGFrZSBlZmZlY3QgZm9yIGFueSBzY3JlZW4gc21hbGxlciB0aGFuIDc2MHB4XHJcblx0YW5kIGFsc28gaVBhZHMgc3BlY2lmaWNhbGx5LlxyXG5cdCovXHJcblx0QG1lZGlhXHJcblx0b25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSxcclxuXHQobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSAge1xyXG5cclxuXHRcdC8qIEZvcmNlIHRhYmxlIHRvIG5vdCBiZSBsaWtlIHRhYmxlcyBhbnltb3JlICovXHJcblx0XHR0YWJsZSwgdGhlYWQsIHRib2R5LCB0aCwgdGQsIHRyIHtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogSGlkZSB0YWJsZSBoZWFkZXJzIChidXQgbm90IGRpc3BsYXk6IG5vbmU7LCBmb3IgYWNjZXNzaWJpbGl0eSkgKi9cclxuXHRcdHRoZWFkIHRyIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IC05OTk5cHg7XHJcblx0XHRcdGxlZnQ6IC05OTk5cHg7XHJcblx0XHR9XHJcblxyXG5cdFx0dHIgeyBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyB9XHJcblxyXG5cdFx0dGQge1xyXG5cdFx0XHQvKiBCZWhhdmUgIGxpa2UgYSBcInJvd1wiICovXHJcblx0XHRcdGJvcmRlcjogbm9uZTtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0cGFkZGluZy1sZWZ0OiAwJTtcclxuXHRcdH1cclxuXHJcblx0XHR0ZDpiZWZvcmUge1xyXG5cdFx0XHQvKiBOb3cgbGlrZSBhIHRhYmxlIGhlYWRlciAqL1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdC8qIFRvcC9sZWZ0IHZhbHVlcyBtaW1pYyBwYWRkaW5nICovXHJcblx0XHRcdHRvcDogMHB4O1xyXG5cdFx0XHRsZWZ0OiA2cHg7XHJcblx0XHRcdHdpZHRoOiA0NSU7XHJcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcblx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHR9XHJcblxyXG5cdFx0LypcclxuXHRcdExhYmVsIHRoZSBkYXRhXHJcblx0XHQqL1xyXG5cdFx0dGQ6bnRoLW9mLXR5cGUoMSkgeyBmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxNTAlO21hcmdpbi10b3A6MHB4OyB9XHJcbiAgICAgICAgdGQ6bnRoLW9mLXR5cGUoMSk6YmVmb3JlIHsgY29udGVudDogXCJOYW1lOlwiOyB9XHJcblx0XHR0ZDpudGgtb2YtdHlwZSgyKTpiZWZvcmUgeyBjb250ZW50OiBcIlBob25lOlwiOyB9XHJcblx0XHR0ZDpudGgtb2YtdHlwZSgzKTpiZWZvcmUgeyBjb250ZW50OiBcIkFhZGhhciBDYXJkIE51bWJlcjpcIjsgfVxyXG5cdFx0XHJcblx0fVxyXG5cclxuXHQvKiBTbWFydHBob25lcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cclxuXHRAbWVkaWEgb25seSBzY3JlZW5cclxuXHRhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiAzMjBweClcclxuXHRhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA0ODBweCkge1xyXG5cdFx0Ym9keSB7XHJcblx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0d2lkdGg6IDMyMHB4OyB9XHJcblx0XHR9XHJcblxyXG5cdC8qIGlQYWRzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xyXG5cdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xyXG5cdFx0Ym9keSB7XHJcblx0XHRcdHdpZHRoOiA0OTVweDtcclxuXHRcdH1cclxuXHR9IiwiLyogXHJcblx0R2VuZXJpYyBTdHlsaW5nLCBmb3IgRGVza3RvcHMvTGFwdG9wcyBcclxuXHQqL1xudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgfVxuXG4vKiBaZWJyYSBzdHJpcGluZyAqL1xudHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7IH1cblxudGgge1xuICBiYWNrZ3JvdW5kOiAjMzMzO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbnRkLCB0aCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4ubWFwIHtcbiAgYmFja2dyb3VuZDogZ3JleTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3OyB9XG5cbi8qXHJcblx0TWF4IHdpZHRoIGJlZm9yZSB0aGlzIFBBUlRJQ1VMQVIgdGFibGUgZ2V0cyBuYXN0eVxyXG5cdFRoaXMgcXVlcnkgd2lsbCB0YWtlIGVmZmVjdCBmb3IgYW55IHNjcmVlbiBzbWFsbGVyIHRoYW4gNzYwcHhcclxuXHRhbmQgYWxzbyBpUGFkcyBzcGVjaWZpY2FsbHkuXHJcblx0Ki9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gIC8qIEZvcmNlIHRhYmxlIHRvIG5vdCBiZSBsaWtlIHRhYmxlcyBhbnltb3JlICovXG4gIHRhYmxlLCB0aGVhZCwgdGJvZHksIHRoLCB0ZCwgdHIge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC8qIEhpZGUgdGFibGUgaGVhZGVycyAoYnV0IG5vdCBkaXNwbGF5OiBub25lOywgZm9yIGFjY2Vzc2liaWxpdHkpICovXG4gIHRoZWFkIHRyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOTk5OXB4O1xuICAgIGxlZnQ6IC05OTk5cHg7IH1cbiAgdHIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IH1cbiAgdGQge1xuICAgIC8qIEJlaGF2ZSAgbGlrZSBhIFwicm93XCIgKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMCU7IH1cbiAgdGQ6YmVmb3JlIHtcbiAgICAvKiBOb3cgbGlrZSBhIHRhYmxlIGhlYWRlciAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBUb3AvbGVmdCB2YWx1ZXMgbWltaWMgcGFkZGluZyAqL1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDZweDtcbiAgICB3aWR0aDogNDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAvKlxyXG5cdFx0TGFiZWwgdGhlIGRhdGFcclxuXHRcdCovXG4gIHRkOm50aC1vZi10eXBlKDEpIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE1MCU7XG4gICAgbWFyZ2luLXRvcDogMHB4OyB9XG4gIHRkOm50aC1vZi10eXBlKDEpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJOYW1lOlwiOyB9XG4gIHRkOm50aC1vZi10eXBlKDIpOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJQaG9uZTpcIjsgfVxuICB0ZDpudGgtb2YtdHlwZSgzKTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiQWFkaGFyIENhcmQgTnVtYmVyOlwiOyB9IH1cblxuLyogU21hcnRwaG9uZXMgKHBvcnRyYWl0IGFuZCBsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMzIwcHg7IH0gfVxuXG4vKiBpUGFkcyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xuICBib2R5IHtcbiAgICB3aWR0aDogNDk1cHg7IH0gfVxuIl19 */"

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
        this.filteredTable = false;
        this.scheduleTable = false;
        this.mapOnDisplay = false;
        // update button value 
        this.updateButtonValue = "Update";
        //  @ViewChild('map') mapContainer: ElementRef;
        //imageArray = [];
        this.Customers = [];
        this.reportingData = [];
        this.geoChordsData = [];
        this.geoToData = [];
        this.geoFromData = [];
        if (!_factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["logOutfactory"].getAdminLoginFactory()) {
            this.router.navigateByUrl('/home');
        }
    }
    vendorDashboardPage.prototype.ngOnInit = function () {
        this.userMessage = '';
        this.vendorName = (_factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["loginUserData"].getLoginUserData() == undefined) ? '' : _factories_globalFactories__WEBPACK_IMPORTED_MODULE_5__["loginUserData"].getLoginUserData().company;
        //console.log("CompanyName -->" ,this.vendorName)
    };
    vendorDashboardPage.prototype.reports = function () {
        this.reportsTable = true;
        this.filteredTable = false;
        this.addEmployee = false;
        this.getEmployeeList = false;
        this.userMessage = '';
        this.UpdateDataFeilds = false;
        this.scheduleTable = false;
        this.getGeoChordsReportData();
    };
    vendorDashboardPage.prototype.schedule = function () {
        this.scheduleTable = true;
        this.reportsTable = false;
        this.filteredTable = false;
        this.addEmployee = false;
        this.getEmployeeList = false;
        this.userMessage = '';
        this.UpdateDataFeilds = false;
        //this.reportData();
    };
    vendorDashboardPage.prototype.createEmployee = function () {
        this.addEmployee = true;
        this.getEmployeeList = false;
        this.userMessage = '';
        this.UpdateDataFeilds = false;
        this.reportsTable = false;
        this.filteredTable = false;
        this.scheduleTable = false;
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
        this.filteredTable = false;
        this.scheduleTable = false;
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
                vehicleNumber: this.vehicleNumber,
                vehicleType: this.vehicleType,
                fcExpDate: this.fcExpDate,
                permitExpDate: this.permitExpDate,
                taxExpDate: this.taxExpDate,
                insuranceExpDate: this.insuranceExpDate,
                driverName: this.driverName,
                licenseNumber: this.licenseNumber,
                licenseExpDate: this.licenseExpDate,
                vehicleEngineNumber: this.vehicleEngineNumber,
                vehicleSachtNumber: this.vehicleSachtNumber,
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
        this.vehicleNumber = " ";
        this.vehicleType = " ";
        this.fcExpDate = " ";
        this.permitExpDate = " ";
        this.taxExpDate = " ";
        this.insuranceExpDate = " ";
        this.driverName = " ";
        this.licenseNumber = " ";
        this.licenseExpDate = " ";
        this.vehicleEngineNumber = " ";
        this.vehicleSachtNumber = " ";
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
        this.vehicleNumber = (val == undefined || null || "" || 0) ? "" : val.vehicleNumber;
        this.vehicleType = (val == undefined || null || "" || 0) ? "" : val.vehicleType;
        this.fcExpDate = (val == undefined || null || "" || 0) ? "" : val.fcExpDate;
        this.permitExpDate = (val == undefined || null || "" || 0) ? "" : val.permitExpDate;
        this.taxExpDate = (val == undefined || null || "" || 0) ? "" : val.taxExpDate;
        this.insuranceExpDate = (val == undefined || null || "" || 0) ? "" : val.insuranceExpDate;
        this.driverName = (val == undefined || null || "" || 0) ? "" : val.driverName;
        this.licenseNumber = (val == undefined || null || "" || 0) ? "" : val.licenseNumber;
        this.licenseExpDate = (val == undefined || null || "" || 0) ? "" : val.licenseExpDate;
        this.vehicleEngineNumber = (val == undefined || null || "" || 0) ? "" : val.vehicleEngineNumber;
        this.vehicleSachtNumber = (val == undefined || null || "" || 0) ? "" : val.vehicleSachtNumber;
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
            vehicleNumber: this.vehicleNumber,
            vehicleType: this.vehicleType,
            fcExpDate: this.fcExpDate,
            permitExpDate: this.permitExpDate,
            taxExpDate: this.taxExpDate,
            insuranceExpDate: this.insuranceExpDate,
            driverName: this.driverName,
            licenseNumber: this.licenseNumber,
            licenseExpDate: this.licenseExpDate,
            vehicleEngineNumber: this.vehicleEngineNumber,
            vehicleSachtNumber: this.vehicleSachtNumber,
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
    ;
    // fetch the selected user Data from api those are images and uplad date data images 
    vendorDashboardPage.prototype.selectedUserImages = function (val) {
        var _this = this;
        alert("selected Sim Info " + JSON.stringify(val));
        var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].fetchEmpImages + "?id=" + val._id + "&collection=" + _apiService__WEBPACK_IMPORTED_MODULE_3__["values"].uploadImageCollection;
        alert("sim Number" + val.simNumber);
        this.userMessage = ' Kindly wait we are preparng the Client List ........ ';
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
                alert('get data ' + JSON.stringify(_this.adminData));
                _this.getAllData();
                for (var i in _this.adminData) {
                    var convertPath = _this.adminData[i].path.replace(/\\/g, '/');
                    //console.log("convertPath",convertPath);
                    var split_the_path = convertPath.split("/");
                    //console.log('split_the_path',split_the_path);
                    //response.data.message[i].path.replace(/\\/g, '/')
                    _this.Customers.push({ imagePath: 'http://18.188.66.126:8888/' + split_the_path[2] });
                    console.log("loop  changed path", _this.Customers);
                    console.log(JSON.stringify(_this.adminData));
                }
            }
        });
    };
    vendorDashboardPage.prototype.submit = function () {
        this.reportData();
    };
    vendorDashboardPage.prototype.reportData = function () {
        var _this = this;
        //alert("selected Sim Info " + JSON.stringify(val));
        var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].getChords + 'from=' + this.from + '&to=' + this.to;
        //alert("sim Number" +  val.simNumber)
        //this.userMessage = ' Kindly wait we are preparng the Client List ........ ';
        console.log(url);
        this.http.get(url).subscribe(function (data) {
            _this.handleData = data;
            console.log(_this.handleData);
            _this.storeChords(data);
            if (_this.handleData.length == 0) {
                _this.userMessage = " oops! no records are found.";
                _this.getEmployeeList = false;
            }
            else {
                _this.userMessage = '';
                _this.reportingData.push(_this.handleData.message[0].legs[0]);
                console.log("loop  changed path", _this.reportingData);
                //console.log(JSON.stringify(this.adminData));
            }
        });
    };
    vendorDashboardPage.prototype.storeChords = function (data) {
        var _this = this;
        console.log("ORG Name -->", this.vendorName);
        var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].storeGeoLocation + '?collection=' + _apiService__WEBPACK_IMPORTED_MODULE_3__["values"].geoCollection;
        //console.log('store',url)
        this.http.post(url, {
            _id: this.simNumber,
            from: this.handleData.message[0].legs[0].start_address,
            to: this.handleData.message[0].legs[0].end_address,
            distance: this.handleData.message[0].legs[0].distance.text,
            duration: this.handleData.message[0].legs[0].duration.text,
            contactBelongsTo: this.vendorName
        }).subscribe(function (res) {
            console.log('storedData', res);
            _this.userMessage = "Data submitted ";
            //this.resetEmployeeData();
        }, function (error) {
            console.log('error', error);
        });
    };
    vendorDashboardPage.prototype.getGeoChordsReportData = function () {
        var _this = this;
        //alert("selected Sim Info " + JSON.stringify(val));
        var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].fetchGeoChords + 'recordBelongsTo=' + this.vendorName + '&collection=' + _apiService__WEBPACK_IMPORTED_MODULE_3__["values"].geoCollection;
        //alert("sim Number" +  val.simNumber)
        //this.userMessage = ' Kindly wait we are preparng the Client List ........ ';
        //console.log(url);
        this.http.get(url).subscribe(function (data) {
            _this.handleData = data;
            console.log(_this.handleData);
            _this.adminData = _this.handleData.message;
            if (_this.handleData.length == 0) {
                _this.userMessage = " oops! no records are found.";
                _this.getEmployeeList = false;
            }
            else {
                _this.userMessage = '';
                for (var i in _this.adminData) {
                    _this.geoChordsData.push(_this.adminData[i]);
                    _this.geoFromData.push(_this.adminData[i].from);
                    console.log(_this.geoFromData);
                    _this.geoToData.push(_this.adminData[i].to);
                    console.log(_this.geoToData);
                }
            }
        });
    };
    vendorDashboardPage.prototype.onSelectingChords = function () {
        this.reportDataFromTo();
    };
    vendorDashboardPage.prototype.reportDataFromTo = function () {
        var _this = this;
        this.reportsTable = false;
        //alert("selected Sim Info " + JSON.stringify(val));
        var url = _apiService__WEBPACK_IMPORTED_MODULE_3__["apiService"].getChords + 'from=' + this.from + '&to=' + this.to;
        //alert("sim Number" +  val.simNumber)
        //this.userMessage = ' Kindly wait we are preparng the Client List ........ ';
        console.log(url);
        this.http.get(url).subscribe(function (data) {
            _this.handleData = data;
            console.log(_this.handleData);
            //this.storeChords(data);
            if (_this.handleData.length == 0) {
                _this.userMessage = " oops! no records are found.";
                _this.getEmployeeList = false;
            }
            else {
                _this.userMessage = '';
                _this.reportingData.push(_this.handleData.message[0].legs[0]);
                _this.filteredTable = true;
                console.log("loop  changed path", _this.reportingData);
                //console.log(JSON.stringify(this.adminData));
            }
        });
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