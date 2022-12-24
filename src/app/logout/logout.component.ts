import { Component, OnInit } from '@angular/core';
import {HardcodedAuthentificationService} from "../service/hardcoded-authentification.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public hardcodedAuthentificationService : HardcodedAuthentificationService) { }

  ngOnInit(): void {
    this.hardcodedAuthentificationService.logOut()
  }

}
