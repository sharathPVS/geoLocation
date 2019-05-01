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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      GEO Location\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <span style=\"color: red\">{{message}}</span>\n    <div style=\"float:right\">\n    <a (click)=\"login()\">Login</a> | <a (click)=\"signUp()\">Sign Up </a>\n  </div>\n    <br>\n    <div *ngIf=\"loginButton\">\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input [(ngModel)]=\"username\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input [(ngModel)]=\"password\" type=\"password\" value=\"\"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <!-- <ion-button href=\"/location\" routerDirection=\"root\"> -->\n        <ion-button color=\"success\" (click)=\"submit()\">Submit </ion-button>\n      </div>\n    </div>\n    <div *ngIf=\"signUpButton\">\n\n      <span style=\"color: red\">{{userEmailMessage}}</span>\n      <ion-item>\n        <ion-label floating>Name<span style=\"color: red\">*</span> </ion-label>\n        <ion-input [(ngModel)]=\"name\" type=\"text\" value=\"\" (change)=\"onChange()\" aria-required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Email<span style=\"color: red\">*</span></ion-label>\n        <ion-input [(ngModel)]=\"email\" type=\"email\" value=\"\" (change)=\"onChange()\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Phone<span style=\"color: red\">*</span></ion-label>\n        <ion-input [(ngModel)]=\"phone\" type=\"number\" value=\"\" (change)=\"onChange()\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating> Company Name <span style=\"color: red\">*</span></ion-label>\n        <ion-input [(ngModel)]=\"companyName\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password<span style=\"color: red\">*</span></ion-label>\n        <ion-input [(ngModel)]=\"password\" type=\"password\" value=\"\" (change)=\"onChange()\"></ion-input>\n      </ion-item>\n      <div padding>\n        <!-- <ion-button href=\"/location\" routerDirection=\"root\"> -->\n        <ion-button color=\"success\" (click)=\"RegisterSubmit()\">Submit </ion-button>\n      </div>\n\n    </div>\n\n\n  </ion-list>\n\n  <div #map class=\"map\"></div>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  background: grey;\n  height: 100vh;\n  width: 100vw; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhZGhha3Jpc2huYS9Eb2N1bWVudHMvTXlXb3Jrcy9PZmZpY2VMb2NhbEhvc3QvbXlPZmZpY2VXb3Jrcy9zdHVmZjIvZ2VvTG9jYXRpb24vc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFwIHtcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICB9Il19 */"

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







var H = window['H'];
var HomePage = /** @class */ (function () {
    function HomePage(router, http, geolocation) {
        this.router = router;
        this.http = http;
        this.geolocation = geolocation;
        this.loginButton = false;
        this.signUpButton = false;
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
            // console.log(data);
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
        });
    };
    HomePage.prototype.login = function () {
        // only  for sisplay the login feilds 
        this.loginButton = !this.loginButton;
        this.signUpButton = false;
        this.message = '';
    };
    HomePage.prototype.signUp = function () {
        this.signUpButton = !this.signUpButton;
        this.loginButton = false;
        this.message = '';
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
                _this.userEmailMessage = 'successfully submitted your request...';
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map