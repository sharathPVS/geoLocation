import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { apiService } from '../apiService';
import { HttpClientModule,HttpClient } from '@angular/common/http';

declare var google;
const H = window['H'];

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage {
 // using here maps 

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



  // google current location 
/*
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  address:string;
  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {
  }
// location
//https://www.freakyjolly.com/ionic-4-add-google-maps-geolocation-and-geocoder-in-ionic-4-native-application/

  ngOnInit() {
      this.loadMap();
    }

    loadMap() {
      this.geolocation.getCurrentPosition().then((resp) => {
       let latlong = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude)
        let mapOptions = {
          center:latlong  ,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(latlong),
          map: this.map
        });


        this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions,marker);
        let infowindow = new google.maps.InfoWindow();
        this.map.addMarker(mapOptions).then((marker) => {
                  marker.showInfoWindow();
        });
      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }

    getAddressFromCoords(lattitude, longitude) {
      console.log("lat"+ lattitude +" long "+longitude);
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };

      this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
        .then((result: NativeGeocoderReverseResult[]) => {
          this.address = "";
          let responseAddress = [];
          for (let [key, value] of Object.entries(result[0])) {
            if(value.length>0)
            responseAddress.push(value);

          }
          responseAddress.reverse();

          for (let value of responseAddress) {
            this.address += value+", ";
          }
          this.address = this.address.slice(0, -2);
        })
        .catch((error: any) =>{
          this.address = "Address Not Available!";
        });

    }
*/
}
