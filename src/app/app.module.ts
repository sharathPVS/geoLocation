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
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { SelectorMatcher } from '@angular/compiler';
import { Platform } from '@ionic/angular';
import { loginUserData, logOutfactory, geoLocationFactory } from './factories/globalFactories';
import { EmailVerificationComponent } from './email-verification/email-verification.component';
import { apiService,values } from './apiService';



@NgModule({
  declarations: [AppComponent,EmailVerificationComponent],
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  private simData : any;

  constructor(private platform: Platform, 
              private sim: Sim, 
              private geolocation: Geolocation,
              private http: HttpClient) {


    this.sim.getSimInfo().then(
              
      (info) =>  this.getSimData(info),
      //(err) => alert('err' + err)
    );

    this.sim.hasReadPermission().then(
            //(info) => alert('Has permission: ' + info)
    );

    this.sim.requestReadPermission().then(
      //() => alert('Permission granted'),
      //() => alert('Permission denied')
    );


  }

  getSimData (simNumber){

    //  alert(simNumber.simSerialNumber);
    //  alert(JSON.stringify(simNumber));
    //alert(apiService.fetchSimData);

    this.http.get(apiService.fetchSimData + simNumber.simSerialNumber + "&collection=" + values.collection ).subscribe(data => {
      this.simData = data;
      alert (this.simData);
      if (this.simData !== null) {
        this.update(this.simData ,simNumber);
        console.log('Api Response-->' + this.simData)      
      }else{
        this.create(simNumber);
      }
    });
  }

  update (data,simNumber){
    this.http.put(apiService.updateSimData + simNumber.simSerialNumber + "&collection=" + values.collection ,data  ).subscribe(data => {
      this.simData = data;
      alert (this.simData);
      if (this.simData !== null) {
        console.log('Api Response-->' + this.simData)      
      }
    });

  }
  create(simNumber){
  
    this.http.put(apiService.createNewSimdata + "&collection=" + values.collection , { _id:simNumber.simSerialNumber,data:simNumber}  ).subscribe(data => {
      this.simData = data;
      alert (this.simData);
      if (this.simData !== null) {
        console.log('Api Response-->' + this.simData)      
      }
    });

  }
}


