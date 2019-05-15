import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiService } from '../apiService';
import { MenuController} from '@ionic/angular';


@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss'],
})
export class EmailVerificationComponent implements OnInit {
  email: string
  userMessage:string
  constructor(private route: ActivatedRoute, private http: HttpClient,public menuCtrl: MenuController) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ngOnInit() {
    this.email = this.route.snapshot.params['email']
    console.log("First Method Called-->" + this.email);
    this.activateUserEmail(this.email)
  }

  activateUserEmail(email) {
    console.log("Rest Method Called-->" + this.email);
    this.http.put(apiService.activateUserEmail,
      {
        _id: email,        
      }).subscribe(
        data => {
          this.userMessage='Verified';
          console.log("Email Verified successful ", data);
        },
        error => {
          console.log("Error", error);
        });
  }
}
