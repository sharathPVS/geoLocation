import { Component, ViewChild, ElementRef } from '@angular/core';
import { apiService } from '../apiService';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { loginUserData, logOutfactory, geoLocationFactory } from '../factories/globalFactories';
import { Geolocation } from '@ionic-native/geolocation/ngx';


const H = window['H'];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  map: any;
  username: string;
  password: string;
  message: string;
  // register Data .. password is there  duplicates are error 
  name: string;
  email: string;
  phone: number;
  companyName: string;

  public loginButton: boolean = false;
  public signUpButton: boolean = false;
  // error messages 
  public userEmailMessage: string;
  private loginData: any;
  @ViewChild('map') mapContainer: ElementRef;



  constructor(private router: Router, private http: HttpClient, public geolocation: Geolocation) {
    logOutfactory.setAdminLoginFactory(true);
    loginUserData.initialiseLoginUsereDataFactory();
    this.location();

  }

  location() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // console.log(resp.coords)
      this.mapData({ lat: resp.coords.latitude, lon: resp.coords.longitude })
    }).catch((error) => {
      //console.log('Error getting location', error);
    });

  }


  // display in map 

  public mapData(val) {
    let coordsData = val;

    const platform = new H.service.Platform({
      app_id: 'Xs9OgBdukNyvJbPrJjS7',
      app_code: 'rveTk4vWm3IgrJo4qdb_0g',
      useCIT: true,
      useHTTPS: true
    });
    const defaultLayers = platform.createDefaultLayers({
      tileSize: 256 * Math.min(2, devicePixelRatio),
      ppi: devicePixelRatio > 1 ? 320 : 72
    });
    const map = new H.Map(
      this.mapContainer.nativeElement,
      defaultLayers.normal.map,
      {
        center: coordsData,
        pixelRatio: Math.min(2, devicePixelRatio),
        zoom: 10
      }
    );

    var marker = new H.map.Marker(coordsData);
    map.addObject(marker);

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    return map;

  }


  submit() {
    this.message = " Fetching Login Details ..........";
    // for login 
    // get the data from db  with validation 
    //console.log(apiService.login + this.username);
    this.http.get(apiService.login + this.username).subscribe(data => {
      this.loginData = data;
      // console.log(data);

      if (this.loginData == null) {
        this.message = " Your not a Existing Usere.. ";
      } else {


        // console.log(this.loginData.message.rows[0].value);
        if (this.loginData._id == this.username && this.loginData.password == this.password) {
          if (this.loginData.state == "active") {
            if (this.loginData._id == "admin") {
              this.message = "Admin Login success!!!!!";
              // admin page redirect 
              //this.router.navigateByUrl('/simData');
              this.router.navigateByUrl('/adminApprove');
            } else {
              this.message = this.loginData._id + "Login success!!!!!";
              //console.log("login user data", this.loginData);
              loginUserData.setLoginUserData(this.loginData);
              this.router.navigateByUrl('/vendorDashboard');

            }
            //this.router.navigateByUrl('/location');
            //this.router.navigateByUrl('/simData');
          } else {
            this.message = "Your Account is Inactive.Kindly Contact Admin.";
          }

        }
        else {
          this.message = "Oops!! Username or password is Wrong";
        }
      }
    });

  }
  login() {
    // only  for sisplay the login feilds 
    this.loginButton = !this.loginButton;
    this.signUpButton = false;
    this.message = '';

  }
  signUp() {
    this.signUpButton = !this.signUpButton;
    this.loginButton = false;
    this.message = '';
  }
  RegisterSubmit() {

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
      this.http.post(apiService.signUp,
        {
          _id: this.email,
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
          company: this.companyName,
          state: "inActive"
        }).subscribe(
          data => {
            console.log("POST Request is successful ", data);
            this.userEmailMessage = 'successfully submitted your request...';
            this.reset();
          },
          error => {

            console.log("Error", error);

          });
    }

  }
  reset() {
    this.name = '',
      this.email = '';
    this.phone = 0;
    this.password = '';
    this.companyName = '';

  }
  onChange() {
    this.message = "";
    this.userEmailMessage = "";
  }

}
