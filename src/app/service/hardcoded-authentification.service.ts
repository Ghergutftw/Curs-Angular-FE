import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthentificationService {

  constructor() { }

  authenticate(username: string, password: string){
    // console.log('before ' + this.isUserLoggedIn())
    if(username == "test" && password == "test"){
      sessionStorage.setItem('authenticatedUser' , username)
      // console.log('after ' + this.isUserLoggedIn())
      return true;
    }else {
      return false;
    }
  }
  //True daca User-ul este in sessionStorage
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user === null);
  }

  logOut(){
    sessionStorage.removeItem('authenticatedUser');
  }

}
