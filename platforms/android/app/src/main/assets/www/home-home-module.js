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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      GEO Location\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <span style=\"color: red\">{{message}}</span>\n    <div style=\"float:right\">\n        <a (click)=\"upload()\">Upload</a> | <a (click)=\"login()\">Login</a> | <a (click)=\"signUp()\">Sign Up </a>\n  </div>\n    <br>\n    <div *ngIf=\"loginButton\">\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input [(ngModel)]=\"username\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input [(ngModel)]=\"password\" type=\"password\" value=\"\"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <!-- <ion-button href=\"/location\" routerDirection=\"root\"> -->\n        <ion-button color=\"success\" (click)=\"submit()\">Submit </ion-button>\n      </div>\n    </div>\n    <div *ngIf=\"signUpButton\">\n\n      <span style=\"color: red\">{{userEmailMessage}}</span>\n      <ion-item>\n        <ion-label floating>Name<span style=\"color: red\">*</span> </ion-label>\n        <ion-input [(ngModel)]=\"name\" type=\"text\" value=\"\" (change)=\"onChange()\" aria-required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Email<span style=\"color: red\">*</span></ion-label>\n        <ion-input autocomplete=\"off\" [(ngModel)]=\"email\" type=\"email\" id=\"emailId\" value=\"\" (change)=\"onChange()\" (paste)=\"false\" (focusout)=\"onChange()\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Phone<span style=\"color: red\">*</span></ion-label>\n        <ion-input [(ngModel)]=\"phone\" type=\"number\" value=\"\" (change)=\"onChange()\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating> Company Name <span style=\"color: red\">*</span></ion-label>\n        <ion-input [(ngModel)]=\"companyName\" type=\"text\" value=\"\" (change)=\"onChange()\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password<span style=\"color: red\">*</span></ion-label>\n        <ion-input [(ngModel)]=\"password\" type=\"password\" value=\"\" (change)=\"onChange()\"></ion-input>\n      </ion-item>\n      <div padding>\n        <!-- <ion-button href=\"/location\" routerDirection=\"root\"> -->\n        <ion-button color=\"success\" (click)=\"RegisterSubmit()\">Submit </ion-button>\n      </div>\n\n    </div>\n\n\n  </ion-list>\n  <div *ngIf=\"uploadImage\">\n  <h3 *ngIf=\"images.length == 0\" text-center>Please Select Image!</h3>\n \n  <ion-list>\n    <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\n      <ion-thumbnail slot=\"start\">\n        <ion-img [src]=\"img.path\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        {{ img.name }}\n      </ion-label>\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"startUpload(img,pos)\">\n        <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n      </ion-button>\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</div>\n\n<div #map class=\"map\" *ngIf=\"mapsData\"></div>\n</ion-content>\n\n<ion-footer *ngIf=\"uploadImage\">\n  <ion-toolbar color=\"success\">\n    <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\">\n      <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n      Select Image</ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n"

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