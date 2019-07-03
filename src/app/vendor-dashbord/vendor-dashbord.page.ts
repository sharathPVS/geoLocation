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
  public scheduleTable:boolean =  false;

  public name: string;
  public Phone: number;
  public aadharCardNumber: number;
  public vehicleNumber: string;
  public vehicleType: string;
  public fcExpDate: string;
  public permitExpDate: string;
  public taxExpDate: string;
  public insuranceExpDate: string;
  public driverName: string;
  public licenseNumber: string;
  public licenseExpDate: string;
  public vehicleEngineNumber: string;
  public vehicleSachtNumber: string;
  public mcc: number;
  public mnc: number;
  public lac: string;
  public cellId: string;
  private LoginCollection: string;
  public vendorName: string;
  public simNumber:number;
  public mapOnDisplay:boolean = false;
  public from: string;
  public to:string; 
  // update button value 
   public updateButtonValue:string = "Update";
  //  @ViewChild('map') mapContainer: ElementRef;
  //imageArray = [];
  Customers = [];
  reportingData = [];
  geoChordsData = [];
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
    this.scheduleTable = false;
    this.getGeoChordsReportData();
    
  }

  schedule(){
    this.scheduleTable = true;
    this.reportsTable = false;
    this.addEmployee = false;
    this.getEmployeeList = false;
    this.userMessage = '';
    this.UpdateDataFeilds = false;
    //this.reportData();
  }


  createEmployee() {
    this.addEmployee = true;
    this.getEmployeeList = false;
    this.userMessage = '';
    this.UpdateDataFeilds = false;
    this.reportsTable = false;
    this.scheduleTable = false;

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
    this.scheduleTable = false;

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
      vehicleNumber: this.vehicleNumber,
      vehicleType: this.vehicleType,
      fcExpDate: this.fcExpDate,
      permitExpDate: this.permitExpDate,
      taxExpDate: this.taxExpDate,
      insuranceExpDate: this.insuranceExpDate,
      driverName: this.driverName,
      licenseNumber: this.licenseNumber,
      licenseExpDate: this.licenseExpDate,
      vehicleEngineNumber: this.vehicleEngineNumber,
      vehicleSachtNumber: this.vehicleSachtNumber,
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
    this.vehicleNumber = " ";
    this.vehicleType = " ";
    this.fcExpDate = " ";
    this.permitExpDate = " ";
    this.taxExpDate = " ";
    this.insuranceExpDate = " ";
    this.driverName = " ";
    this.licenseNumber = " ";
    this.licenseExpDate = " ";
    this.vehicleEngineNumber = " ";
    this.vehicleSachtNumber = " ";
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
    this.vehicleNumber = (val  == undefined || null || "" || 0) ? "" : val.vehicleNumber;
    this.vehicleType = (val  == undefined || null || "" || 0) ? "" : val.vehicleType;
    this.fcExpDate = (val  == undefined || null || "" || 0) ? "" : val.fcExpDate;
    this.permitExpDate = (val  == undefined || null || "" || 0) ? "" : val.permitExpDate;
    this.taxExpDate = (val  == undefined || null || "" || 0) ? "" : val.taxExpDate;
    this.insuranceExpDate = (val  == undefined || null || "" || 0) ? "" : val.insuranceExpDate;
    this.driverName = (val  == undefined || null || "" || 0) ? "" : val.driverName;
    this.licenseNumber = (val  == undefined || null || "" || 0) ? "" : val.licenseNumber;
    this.licenseExpDate = (val  == undefined || null || "" || 0) ? "" : val.licenseExpDate;
    this.vehicleEngineNumber = (val  == undefined || null || "" || 0) ? "" : val.vehicleEngineNumber;
    this.vehicleSachtNumber = (val  == undefined || null || "" || 0) ? "" : val.vehicleSachtNumber;
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
      vehicleNumber: this.vehicleNumber,
      vehicleType: this.vehicleType,
      fcExpDate: this.fcExpDate,
      permitExpDate: this.permitExpDate,
      taxExpDate: this.taxExpDate,
      insuranceExpDate: this.insuranceExpDate,
      driverName: this.driverName,
      licenseNumber: this.licenseNumber,
      licenseExpDate: this.licenseExpDate,
      vehicleEngineNumber: this.vehicleEngineNumber,
      vehicleSachtNumber: this.vehicleSachtNumber,
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

                 this.getAllData();
                           for (let i in this.adminData){

                         let convertPath = this.adminData[i].path.replace(/\\/g, '/');
                        
                          //console.log("convertPath",convertPath);
                         
                         let split_the_path = convertPath.split("/");
                         
                         //console.log('split_the_path',split_the_path);
                        //response.data.message[i].path.replace(/\\/g, '/')
                        this.Customers.push({imagePath: 'http://18.188.66.126:8888/' + split_the_path[2]});
                        
                        console.log("loop  changed path", this.Customers)
                        console.log(JSON.stringify(this.adminData));

                    }
                    
          }
        })
    }

    submit(){
       this.reportData();
    }

    reportData(){
      //alert("selected Sim Info " + JSON.stringify(val));
        let url = apiService.getChords +'from=' + this.from + '&to='+ this.to;
         //alert("sim Number" +  val.simNumber)
        //this.userMessage = ' Kindly wait we are preparng the Client List ........ ';
        //console.log(url);
        this.http.get(url).subscribe(data => {
          this.handleData = data;
         console.log(this.handleData);
         this.storeChords(data);
          if (this.handleData.length == 0) {
            this.userMessage = " oops! no records are found.";
            this.getEmployeeList = false;
          } else {
            this.userMessage = '';
                     

                         
                        this.reportingData.push(this.handleData.message[0].legs[0]);
                        
                        console.log("loop  changed path", this.reportingData)
                        //console.log(JSON.stringify(this.adminData));

                    
                    
          }
        })
    }


    storeChords(data) {
console.log("ORG Name -->",this.vendorName)

     let url = apiService.storeGeoLocation + '?collection=' + values.geoCollection;

       //console.log('store',url)
    this.http.post(url,{
      _id: this.simNumber,
      from:this.handleData.message[0].legs[0].start_address,
      to:this.handleData.message[0].legs[0].end_address,
      distance:this.handleData.message[0].legs[0].distance.text,
      duration:this.handleData.message[0].legs[0].duration.text,
      contactBelongsTo:this.vendorName
    }).subscribe((res: Response) => {
      console.log('storedData', res)
                 this.userMessage = "Data submitted "
      //this.resetEmployeeData();
    },
      error => {
        console.log('error', error)

      })
    
  }

   getGeoChordsReportData(){
      //alert("selected Sim Info " + JSON.stringify(val));
        let url = apiService.fetchGeoChords + 'recordBelongsTo='+ this.vendorName +  '&collection=' + values.geoCollection;
         //alert("sim Number" +  val.simNumber)
        //this.userMessage = ' Kindly wait we are preparng the Client List ........ ';
        //console.log(url);
        this.http.get(url).subscribe(data => {
          this.handleData = data;
         console.log(this.handleData);

         this.adminData = this.handleData.message;

       
          if (this.handleData.length == 0) {
            this.userMessage = " oops! no records are found.";
            this.getEmployeeList = false;
          } else {
            this.userMessage = '';
             for (let i in this.adminData){
             this.geoChordsData.push(this.adminData[i]);
         }

        }
        })
    }



}
