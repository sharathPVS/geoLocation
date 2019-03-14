import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage{
  username:string;
  password:string;
  message:string;


  constructor( private router:Router) {
  }

  login() {
     if(this.username == "admin" && this.password == 'admin'){
          this.message = " Login success!!!!!";
           //this.router.navigateByUrl('/location');
           this.router.navigateByUrl('/simData');
     }
     else{
     this.message = "Oops!! Username or password is Wrong";

     }
   }
  onChange(){
   this.message = "";
 }

}
