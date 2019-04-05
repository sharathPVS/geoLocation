import { Component, ViewChild, ElementRef } from '@angular/core';
import {apiService} from '../apiService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  username: string;
  password: string;
  message: string;
  public loginButton: boolean = false;
  public signUpButton: boolean = false;

  constructor(private router: Router) { }

  submit() {
    if (this.username == "admin" && this.password == 'admin') {
      this.message = " Login success!!!!!";
      //this.router.navigateByUrl('/location');
      //this.router.navigateByUrl('/simData');
    }
    else {
      this.message = "Oops!! Username or password is Wrong";
    }
  }

  login() {
    this.loginButton = true;
    this.signUpButton = false;
  }
  signUp() {
    this.loginButton = false;
    this.signUpButton = true;
  }
  RegisterSubmit(){
     console.log(apiService)
  }
  onChange() {
    this.message = "";
  }

}
