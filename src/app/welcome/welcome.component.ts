import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../service/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message : any ;
  welcomeMessageFromService : string | undefined ;
  name: any;
  counter = 0;
  titleShown = '';
  title = ''
  number = 2

  constructor(private route:ActivatedRoute,
              public service: WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.message);
    this.name=this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService())
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithName() {
    // console.log(this.service.executeHelloWorldBeanService())
    this.service.executeHelloWithName(this.name).subscribe(
      response => this.handleSuccessfulResponse(response.message),
      error => this.handleErrorResponse(error)
    );
    console.log(this.name)
  }
  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response;
    console.log(response);
  }

  onClick(){
    this.counter ++ ;
  }

  onShow(){
    this.titleShown = this.title;
  }

  handleErrorResponse(error: any){
    this.welcomeMessageFromService = error.error.error
  }
}
