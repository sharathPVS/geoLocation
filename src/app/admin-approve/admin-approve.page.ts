import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { apiService } from '../apiService';
import { Router } from '@angular/router';
import {loginUserData,logOutfactory  } from '../factories/globalFactories'


@Component({
  selector: 'app-admin-approve',
  templateUrl: './admin-approve.page.html',
  styleUrls: ['./admin-approve.page.scss'],
})
export class adminApprove implements OnInit {

  constructor(private http: HttpClient,private router: Router) {

    if(! logOutfactory.getAdminLoginFactory())
    {
     this.router.navigateByUrl('/home');
    }
   }
  public userMessage: string;
  private handleData: any;
  public adminData: any;

  ngOnInit() {
    this.getAllData();
  }


  statusChange(val) {
     
   
     val.state = (val.state == "inActive") ? 'active' :'inActive';
     //console.log(val);

     this.http.put(apiService.updateLogin  +'?collection=dblogins',val).subscribe(data=>{
                 console.log(data);
                this.getAllData();
    },error=>{
      console.log(error);
    })
  }
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
