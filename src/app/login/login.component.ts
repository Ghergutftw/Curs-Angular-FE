import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthentificationService} from "../service/hardcoded-authentification.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  username = ''
  password = ''
  errorMessage ='Wrong password or username'
  invalidLogin : boolean | undefined;
  counter = 0;
  titleShown = '';
  title = ''

  //Router ( dependency injection)
  constructor(private router: Router ,
              public hardCodedAuthService : HardcodedAuthentificationService) { }

  handleLogin(){
    console.log("The username is: " + this.username)
    console.log("The password is: " + this.password)

    // if(this.username =="test" && this.password=="test"){
    if(this.hardCodedAuthService.authenticate(this.username,this.password)){
      this.invalidLogin= false;
      this.router.navigate(['/welcome', this.username])
    }else{
      this.invalidLogin=true;
    }

    console.log(this.invalidLogin)
  }

  onClick(){
    this.counter ++ ;
  }

  onShow(){
    this.titleShown = this.title;
  }


}
