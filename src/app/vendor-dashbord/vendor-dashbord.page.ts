import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { apiService } from '../apiService';
import { Router } from '@angular/router';
import {loginUserData} from '../factories/globalFactories'

@Component({
  selector: 'app-admin-approve',
  templateUrl: './vendor-dashbord.page.html',
  styleUrls: ['./vendor-dashbord.page.scss'],
})
export class vendorDashboardPage implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }
  public userMessage: string;
  private handleData: any;
  public adminData: any;

  ngOnInit() {
    this.getAllData();
    console.log('get login data',loginUserData.getLoginUserData());
  }



  // geeting all the vendor entred data 
  getAllData() {
    this.userMessage = ' Kindly wait we are preparng the Client List ........ ';
    this.http.get(apiService.getllDocsForAdminApproveOrReject+'?collection=dblogins').subscribe(data => {
      this.handleData = data;
     // console.log(this.handleData);
      if (this.handleData.length == 0) {
        this.userMessage = " oops! no records are found.";
      } else {
        this.userMessage = '';
        this.adminData = this.handleData.message;
      
       // console.log('final Data', this.adminData[0].name);
      }

    })
  }
  goBack(){
    this.router.navigateByUrl('/home');
  }
}
