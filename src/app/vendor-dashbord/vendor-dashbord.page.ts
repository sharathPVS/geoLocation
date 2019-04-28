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

  public name: string;
  public Phone: number;
  public aadharCardNumber: number;
  public mcc: number;
  public mnc: number;
  public lac: string;
  public cellId: string;
  private LoginCollection: string;
  public vendorName: string;


  ngOnInit() {
    this.userMessage = '';
    this.vendorName = loginUserData.getLoginUserData().company
  }

  createEmployee() {
    this.addEmployee = true;
    this.getEmployeeList = false;
    this.userMessage = '';

  };
  getAllEmployees() {

    this.LoginCollection = (loginUserData.getLoginUserData() == undefined) ? "" : loginUserData.getLoginUserData().collection;
    this.getAllData();
    //console.log('get login data', this.LoginCollection);

    this.getEmployeeList = true;
    this.addEmployee = false;
    this.userMessage = '';

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

    this.http.post(apiService.createUserColletionDB + '?collection=' + this.LoginCollection, {
      _id: this.Phone,
      name: this.name,
      Phone: this.Phone,
      aadharCardNumber: this.aadharCardNumber,
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
  update(updateData){

    console.log("updated data" ,updateData);
    let url = apiService.updateOrgData + '?collection=' + this.LoginCollection;
    //console.log(url);
    this.http.put(url,updateData).subscribe(data => {
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

  // delete employee data 
  delete( val){
    console.log("delete data",val);
  }
  goBack() {
    this.router.navigateByUrl('/home');
    this.userMessage = '';
  }
}
