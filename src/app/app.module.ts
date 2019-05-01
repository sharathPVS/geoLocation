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
import { HttpClientModule } from '@angular/common/http';
import { SelectorMatcher } from '@angular/compiler';
import { Platform } from '@ionic/angular';
import { loginUserData, logOutfactory, geoLocationFactory } from './factories/globalFactories';




@NgModule({
  declarations: [AppComponent],
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

  constructor(private platform: Platform, private sim: Sim, private geolocation: Geolocation) {


    // this.sim.getSimInfo().then(
    //   (info) => alert( 'sim info' + info),
    //   (err) => alert('err' + err)
    // );

    // this.sim.hasReadPermission().then(
    //   (info) => alert('Has permission: ' + info)
    // );

    // this.sim.requestReadPermission().then(
    //   () => alert('Permission granted'),
    //   () => alert('Permission denied')
    // );


  }
}


