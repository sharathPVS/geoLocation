import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// geo location 
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
//sim
import { Sim } from '@ionic-native/sim/ngx';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SelectorMatcher } from '@angular/compiler';
import { Platform } from '@ionic/angular';
import { loginUserData, logOutfactory, geoLocationFactory } from './factories/globalFactories';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { apiService, values } from './apiService';
import {interval} from 'rxjs';

// background service 
import {
  BackgroundGeolocation,
  BackgroundGeolocationConfig,
  BackgroundGeolocationResponse,
  BackgroundGeolocationEvents
} from '@ionic-native/background-geolocation/ngx';



@NgModule({
  declarations: [AppComponent, EmailVerificationComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    Sim,
    HttpClientModule,
    BackgroundGeolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  private simData: any;
  private coords: any;
  private holdSimData : any;
  

  constructor(private platform: Platform,
    public sim: Sim,
    public geolocation: Geolocation,
    private http: HttpClient,
    public backgroundGeolocation: BackgroundGeolocation) {

      
    this.sim.getSimInfo().then(
  
      (info) => this.getSimData(info),
      //(err) => alert('err' + err)
    );

    this.sim.hasReadPermission().then(
      //(info) => alert('Has permission: ' + info)
    );

    this.sim.requestReadPermission().then(
      //() => alert('Permission granted'),
      //() => alert('Permission denied')
    );
   
    interval(1000 * 60).subscribe(x => {
       this.sendGPS()
      //alert("asss every min ")
    });
  };
  

  
 public sendGPS() {
     alert(" scedule time working ")
     this.sim.getSimInfo().then(
  
      (info) => this.holdSimData =  info,
      (err) => alert(' sim err' + err)
    );
    this.geolocation.getCurrentPosition().then((location) => {

     
      let url = apiService.storeGeoLocation + "?collection=" + values.geoCollection
      this.create(url, {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
        simNumber:this.holdSimData.simSerialNumber
      })

    }).catch((error) => {

      console.log('Error getting location', error);

    });





  }


  getSimData(simNumber) {

    // alert(simNumber);
    // alert(JSON.stringify(simNumber));
    // alert(apiService.fetchSimData);
    this.http.get(apiService.fetchSimData + simNumber.simSerialNumber + "&collection=" + values.collection).subscribe(data => {
      this.simData = data;
      //alert(JSON.stringify(data));
      // alert( " data length" +this.simData.length)
      if (this.simData.length !== 0) {

        // this if the sim number is not exits in our db will create 
        // if exits  will update that 
        this.simData[0]["Simdata"] = simNumber;
        this.update(this.simData, simNumber);
      } else {
        let url = apiService.createNewSimdata + "?collection=" + values.collection;
        this.create(url, { _id: simNumber.simSerialNumber, Simdata: simNumber, geoData: this.coords });
      }
    });
  }

  update(data, simNumber) {
    let url = apiService.updateSimData + "?collection=" + values.collection;
    // alert (url);
    //alert("after Update" + JSON.stringify(data[0]));

    this.http.put(url, data[0]).subscribe(data => {
      //alert("update hited" )

    });

  }
  create(url, simData) {
    alert("create hited" + url);
    this.http.post(url, simData).subscribe(data => {
      this.simData = data;
      //alert(this.simData);
      if (this.simData !== null) {
        console.log('Api Response-->' + this.simData)
      }
    });
  }



}


