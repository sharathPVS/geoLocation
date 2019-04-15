import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { apiService } from '../apiService';


@Component({
  selector: 'app-admin-approve',
  templateUrl: './admin-approve.page.html',
  styleUrls: ['./admin-approve.page.scss'],
})
export class adminApprove implements OnInit {

  constructor(private http: HttpClient) { }
  public userMessage: string;
  private handleData: any;
  
  ngOnInit() {
    this.userMessage = ' Kindly wait we are preparng the Client List ........ ';
    this.http.get(apiService.getllDocsForAdminApproveOrReject).subscribe(data => {
         this.handleData = data;
          if(this.handleData.length == 0){
            this.userMessage = " oops! no records are found.";
          }else{
            this.userMessage = this.handleData;
          }
      
    })

  }
}
