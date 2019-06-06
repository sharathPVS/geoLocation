import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { apiService,values } from '../apiService';
import { Router } from '@angular/router';
import { loginUserData,logOutfactory } from '../factories/globalFactories'
import { error } from '@angular/compiler/src/util';
import { LocationPage } from '../location/location.page';
import { ViewChild, ElementRef } from '@angular/core';
import { GeoLocationService } from '../service/geo-location.service';

 const H = window['H'];

@Component({
  selector: 'app-admin-approve',
  templateUrl: './vendor-dashbord.page.html',
  styleUrls: ['./vendor-dashbord.page.scss'],
})
export class vendorDashboardPage implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;


  constructor(private http: HttpClient, private router: Router,public geoService:GeoLocationService) { 

   if(! logOutfactory.getAdminLoginFactory())
   {
    this.router.navigateByUrl('/home');
   }
  }
  public userMessage: string;
  private handleData: any;
  public adminData: any;
  public addEmployee: boolean = false;
  public getEmployeeList: boolean = false;
  public UpdateDataFeilds:boolean = false;
  public reportsTable:boolean = false;

  public name: string;
  public Phone: number;
  public aadharCardNumber: number;
  public mcc: number;
  public mnc: number;
  public lac: string;
  public cellId: string;
  private LoginCollection: string;
  public vendorName: string;
  public simNumber:number;
  public mapOnDisplay:boolean = false; 
  // update button value 
   public updateButtonValue:string = "Update";
  //  @ViewChild('map') mapContainer: ElementRef;
  ngOnInit() {
    this.userMessage = '';
    this.vendorName =  (loginUserData.getLoginUserData() == undefined) ? '' : loginUserData.getLoginUserData().company
    //console.log("CompanyName -->" ,this.vendorName)
  }
  reports(){
    this.reportsTable = true;
    this.addEmployee = false;
    this.getEmployeeList = false;
    this.userMessage = '';
    this.UpdateDataFeilds = false;
  }


  createEmployee() {
    this.addEmployee = true;
    this.getEmployeeList = false;
    this.userMessage = '';
    this.UpdateDataFeilds = false;
    this.reportsTable = false;

  };
  getAllEmployees() {

    this.LoginCollection = values.collection;
    this.getAllData();
    //console.log('get login data', this.LoginCollection);

    this.getEmployeeList = true;
    this.addEmployee = false;
    this.userMessage = '';
    this.UpdateDataFeilds = false;
    this.reportsTable = false;

  }

  // store empoyee data 
  submitEmployee() {
console.log("ORG Name -->",this.vendorName)

     if( this.name == undefined || null || 0 || ''){
            this.userMessage  = "Required Name";
     }else if (this.Phone == undefined || null || '' || 0){
      this.userMessage  = "Required Phone";

     }else if (this.aadharCardNumber == undefined || null || 0 || '' ){
      this.userMessage  = "Required AAdhar Number";

     }else{
       let url = apiService.createUserColletionDB + '?collection=' + values.collection;

       //console.log('store',url)
    this.http.post(url,{
      _id: this.simNumber,
      name: this.name,
      Phone: this.Phone,
      aadharCardNumber: this.aadharCardNumber,
      simNumber:this.simNumber,
      mcc: this.mcc,
      mnc: this.mnc,
      lac: this.lac,
      cellId: this.cellId,
      contactBelongsTo:this.vendorName
    }).subscribe((res: Response) => {
      console.log('storedData', res)
                 this.userMessage = "Data submitted "
      this.resetEmployeeData();
    },
      error => {
        console.log('error', error)

      })
    }
  }

  resetEmployeeData() {
    this.name = " ";
    this.Phone = 0;
    this.aadharCardNumber = 0;
    this.mcc = 0;
    this.mnc
    this.cellId = "";
    this.lac = '';
    this.simNumber  = 0 ;
  }
  onChange() {
    this.userMessage = '';
  }

  // geeting all the vendor entred data 
  getAllData() {

    if( this.LoginCollection !== ""){

    
    this.userMessage = ' Kindly wait we are preparng the Client List ........ ';
    let url = apiService.orgLevelEmplpyeeList + '?collection=' + values.collection + '&recordBelongsTo='+this.vendorName; 
    //console.log(url);
    this.http.get(url).subscribe(data => {
      this.handleData = data;
     // console.log(this.handleData.message);
      if (this.handleData.message.length == 0) {
        this.userMessage = " oops! no records are found.";
        this.getEmployeeList = false;
      } else {
        this.userMessage = '';
        this.adminData = this.handleData.message;

        // console.log('final Data', this.adminData[0].name);
      }
    })
  }
  }

  // update  employee data 

  edit(val){
    console.log(val);

    this.getEmployeeList = false;
    this.UpdateDataFeilds = true;

    this.name = (val  == undefined || null || "") ? "" : val.name;
    this.Phone = (val  == undefined || null || "" || 0) ? "" : val.Phone;
    this.aadharCardNumber = (val  == undefined || null || "" || 0) ? "" : val.aadharCardNumber;
    this.mcc = (val  == undefined || null || "" || 0) ? "" : val.mcc;
    this.mnc = (val  == undefined || null || "" || 0) ? "" : val.mnc;
    this.cellId = (val == undefined || null || "" || 0) ? "" : this.handleData.message.cellId;
    this.lac = (this.handleData.message  == undefined || null || "" ) ? "" : val.lac;
    this.simNumber  = (val  == undefined || null || "" || 0) ? "" : val.simNumber;
  } 
  update() {
    let url = apiService.updateOrgData + '?collection=' + values.collection;
    //console.log(url);
    this.http.put(url,{
      _id: this.simNumber,
      name: this.name,
      Phone: this.Phone,
      aadharCardNumber: this.aadharCardNumber,
      simNumber:this.simNumber,
      mcc: this.mcc,
      mnc: this.mnc,
      lac: this.lac,
      cellId: this.cellId
    }).subscribe(data => {
      this.handleData = data
      this.userMessage =  this.handleData.message ;
  
    
    })
  }

  // delete employee data 
  delete( val){
    let url = apiService.delete + '?collection=' + values.collection + '&id=' + val.simNumber ;
    console.log('delete url',url)
 
    this.http.delete(url).subscribe(data => {
      this.handleData = data
      this.userMessage =  this.handleData.message ;
      this.getAllData();
    })
  }
  goBack() {
    this.router.navigateByUrl('/home');
    this.userMessage = '';
  }
  map: any;

  //TO Get the Location Co-ordinates
  trackByNumber(val){
    this.mapOnDisplay = true;
    console.log("DB Obj-->"+val.mnc);
    let url = apiService.geoFetchMobileLocation ;
    this.http.post(url,{
      mcc: val.mcc,
      mnc: val.mnc,
      lac: val.lac,
      cid: val.cellId
    }).subscribe(data => {
      this.handleData = data
     // console.log("Db Data --> " ,data)
      this.userMessage =  this.handleData.message+"LAT"+this.handleData.lat+"Long-->"+this.handleData.lon ;      
      this.mapData({latitude:this.handleData.lat,longitude:this.handleData.lon});
      
    })
  }
    // display in map 
    public mapData(val) {
      let coordsData = { lat: val.latitude, lng: val.longitude };
      console.log('Preparing Map-->'+coordsData);
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
      console.log('Returning Map-->'+map);
      
      return map;
      
    };
    // fetch the selected user Data from api those are images and uplad date data images 
    selectedUserImages(val){
         
      alert("selected Sim Info " + JSON.stringify(val));
        let url = apiService.fetchEmpImages + "?id=" + val._id + "&collection=" + values.uploadImageCollection;
         alert("sim Number" +  val.simNumber)
        this.userMessage = ' Kindly wait we are preparng the Client List ........ ';
        //console.log(url);
        this.http.get(url).subscribe(data => {
          this.handleData = data;
         // console.log(this.handleData.message);
          if (this.handleData.message.length == 0) {
            this.userMessage = " oops! no records are found.";
            this.getEmployeeList = false;
          } else {
            this.userMessage = '';
            this.adminData = this.handleData.message;
            alert('get data ' + JSON.stringify(this.adminData));
    
            // console.log('final Data', this.adminData[0].name);
          }
        })
    }

}
