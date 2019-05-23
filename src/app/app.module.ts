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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  private simData: any;
  private coords : any;

  constructor(private platform: Platform,
    private sim: Sim,
    private geolocation: Geolocation,
    private http: HttpClient) {
     
    
         //  geo location 
      geolocation.getCurrentPosition().then((location) => {
               // based on the current location forming the data  to the  json  
         coords = {latitude:location.coords.latitude,longitude:location.coords.longitude};
           // this.create( url,coords )
        
      })

   
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


  }

  getSimData(simNumber) {

    // alert(simNumber);
    // alert(JSON.stringify(simNumber));
    // alert(apiService.fetchSimData);

    this.http.get(apiService.fetchSimData + simNumber.simSerialNumber + "&collection=" + values.collection).subscribe(data => {
      this.simData = data;
      //alert(JSON.stringify(data));
     // alert( " data length" +this.simData.length)
      if ( this.simData.length !== 0) {

        // this if the sim number is not exits in our db will create 
        // if exits  will update that 
        this.simData[0]["Simdata"] = simNumber ;
        this.update(this.simData, simNumber);
      } else {
        let url =apiService.createNewSimdata + "?collection=" + values.collection;
        this.create(url,{ _id: simNumber.simSerialNumber,Simdata:simNumber,geoData:this.coords});
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
  create(url,simData) {
   
  
    alert("create hited" + url);
    

    this.http.post(url, simData).subscribe(data => {
      this.simData = data;
      alert(this.simData);
      if (this.simData !== null) {
        console.log('Api Response-->' + this.simData)
      }
    });

  }
}


