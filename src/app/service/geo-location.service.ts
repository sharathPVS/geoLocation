import { Injectable } from '@angular/core';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder,  NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { apiService } from '../apiService';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

declare var google;
const H = window['H'];

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  @ViewChild('map') mapContainer: ElementRef;

map: any;

     mcc:number;
     mnc:number;
     lac:number;
     cellId:number;

     constructor( private http:HttpClient,geolocation: Geolocation) {
          // get current location 
       geolocation.getCurrentPosition().then((location) => {

        //console.log(location.coords);

               // based on the current location forming the data  to the  json  
         this.mapData({latitude:location.coords.latitude,longitude:location.coords.longitude})

      }).catch((error) => {

        console.log('Error getting location', error);

      });
     }
     
     loadMap(){
       /*  This function will get the data from APi call 
           Based on the mcc,mnc,cid,lac


       */
 
         this.http.post('http://localhost:3000/mobileCodes',

                                 { mcc:this.mcc,
                                   mnc:this.mnc,
                                   lac:this.lac,
                                   cid:this.cellId
                                  }).subscribe(
                                      data  => {
                                    console.log("POST Request is successful ", data);

                                   /*accuracy: 603
                                     latitude: 17.454144
                                     longitude: 78.541275*/
                                      this.mapData(data)
                                    },
                                    error  => {

                                    console.log("Error", error);

                                     });
}

public  mapData(val){
   let coordsData = {  lat: val.latitude ,lng:val.longitude }

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
        center:  coordsData,
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
}

