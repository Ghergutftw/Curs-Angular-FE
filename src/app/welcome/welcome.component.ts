import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WelcomeDataService} from "../service/data/welcome-data.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  message : string ="welcome message"
  name : string | undefined ;
  response: any;
  counter = 0;
  titleShown = '';
  title = ''

  constructor(private route:ActivatedRoute,
              public service: WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.message);
    this.name=this.route.snapshot.params['name']
    console.log(this.name)
  }

  getWelcomeMessage() {
    // console.log(this.service.executeHelloWorldBeanService())
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
      // response => console.log(response)
    );
  }
  handleSuccessfulResponse(response: any){
    console.log(response)
  }

  onClick(){
    this.counter ++ ;
  }

  onShow(){
    this.titleShown = this.title;
  }
}
