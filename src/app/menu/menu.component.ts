import { Component } from '@angular/core';
import {HardcodedAuthentificationService} from "../service/hardcoded-authentification.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {
  // isUserLoggedIn: boolean = false;

  constructor(public hardcodedAuthentificationService : HardcodedAuthentificationService) { }





}
