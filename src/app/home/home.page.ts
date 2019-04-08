import { Component, ViewChild, ElementRef } from '@angular/core';
import {apiService} from '../apiService';
import { Router } from '@angular/router';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  username: string;
  password: string;
  message: string;
  // register Data .. password is there  duplicates are error 
  name:string;
  email:string;
  phone:number;

  public loginButton: boolean = true;
  public signUpButton: boolean = false;
   // error messages 
   public userEmailMessage: string;
   private loginData:any;
  

  constructor(private router: Router,private http:HttpClient) { }

  submit() {
     // for login 
      // get the data from db  with validation 
      console.log(apiService.login + '"'+this.username+'"');
      this.http.get(apiService.login + '"'+this.username+'"').subscribe(data=>{
                 this.loginData = data;
       // console.log(this.loginData.message.rows[0].value);
       if (this.loginData.message.rows[0].value._id == this.username && this.loginData.message.rows[0].value.password == this.password) {
        this.message = " Login success!!!!!";
        //this.router.navigateByUrl('/location');
        //this.router.navigateByUrl('/simData');
      }
      else {
        this.message = "Oops!! Username or password is Wrong";
      }
});
    
  }
  login() {
    // only  for sisplay the login feilds 
    this.loginButton = true;
    this.signUpButton = false;
        
  }
  signUp() {
    this.loginButton = false;
    this.signUpButton = true;
  }
  RegisterSubmit(){
   
           if(this.name == undefined || this.name == "" || this.name == null){
            this.userEmailMessage = 'Please Enter Name';
           }
            else if(this.email == undefined || this.email == "" || this.email == null){
            this.userEmailMessage = 'Please Enter email';
           }
            else if(this.phone == undefined || this.phone == 0 || this.phone == null){
            this.userEmailMessage = 'Please Enter phone';
           }
            else if(this.password == undefined || this.password == "" || this.password == null){
            this.userEmailMessage = 'Please Enter password';
           }else{
            this.userEmailMessage = 'Storing Data....';
           this.http.post(apiService.signUp,
                    { _id:this.email,
                      name:this.name,
                      email:this.email,
                      phone:this.phone,
                      password:this.password}).subscribe(
                                      data => {
                                    console.log("POST Request is successful ", data);
                                    this.userEmailMessage = 'successfully Storing Data ..';
                                    this.reset();
                                    },
                                    error  => {

                                    console.log("Error", error);

                                     });
                                    }
    
  }
   reset(){
    this.name ='',
    this.email='';
    this.phone=0;
    this.password ='';

   }
  onChange() {
    this.message = "";
    this.userEmailMessage = "";
  }

}
