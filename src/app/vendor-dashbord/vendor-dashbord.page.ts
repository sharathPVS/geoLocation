import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { apiService } from '../apiService';
import { Router } from '@angular/router';
import { loginUserData,logOutfactory } from '../factories/globalFactories'
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-admin-approve',
  templateUrl: './vendor-dashbord.page.html',
  styleUrls: ['./vendor-dashbord.page.scss'],
})
export class vendorDashboardPage implements OnInit {



  constructor(private http: HttpClient, private router: Router) { 

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

  // update button value 
   public updateButtonValue:string = "Update";

  ngOnInit() {
    this.userMessage = '';
    this.vendorName =  (loginUserData.getLoginUserData() == undefined) ? '' : loginUserData.getLoginUserData().company
  }

  createEmployee() {
    this.addEmployee = true;
    this.getEmployeeList = false;
    this.userMessage = '';
    this.UpdateDataFeilds = false;

  };
  getAllEmployees() {

    this.LoginCollection = (loginUserData.getLoginUserData() == undefined) ? "" : loginUserData.getLoginUserData().collection;
    this.getAllData();
    //console.log('get login data', this.LoginCollection);

    this.getEmployeeList = true;
    this.addEmployee = false;
    this.userMessage = '';
    this.UpdateDataFeilds = false;

  }

  // store empoyee data 
  submitEmployee() {


     if( this.name == undefined || null || 0 || ''){
            this.userMessage  = "Required Name";
     }else if (this.Phone == undefined || null || '' || 0){
      this.userMessage  = "Required Phone";

     }else if (this.aadharCardNumber == undefined || null || 0 || '' ){
      this.userMessage  = "Required AAdhar Number";

     }else{
       let url = apiService.createUserColletionDB + '?collection=' + this.LoginCollection;

       //console.log('store',url)
    this.http.post(url,{
      _id: this.Phone,
      name: this.name,
      Phone: this.Phone,
      aadharCardNumber: this.aadharCardNumber,
      simNumber:this.simNumber,
      mcc: this.mcc,
      mnc: this.mnc,
      lac: this.lac,
      cellId: this.cellId
    }).subscribe((res: Response) => {
      console.log('storedData', res)
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
    let url = apiService.orgLevelEmplpyeeList + '?collection=' + this.LoginCollection;
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
screenLeft
  }
  update() {
    let url = apiService.updateOrgData + '?collection=' + this.LoginCollection;
    //console.log(url);
    this.http.put(url,{_id: this.Phone,
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
    console.log("delete data",val);
  }
  goBack() {
    this.router.navigateByUrl('/home');
    this.userMessage = '';
  }
}
