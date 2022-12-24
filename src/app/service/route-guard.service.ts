import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {HardcodedAuthentificationService} from "./hardcoded-authentification.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(
    public hardcodedAuthentificationService: HardcodedAuthentificationService,
    public router : Router
  ) {
  }

  //retuneaza True daca User este logat sau False in caz ca nu
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.hardcodedAuthentificationService.isUserLoggedIn()){
      return true;
    }else {
      this.router.navigate(['login'])
      return false;
    }


  }
}
