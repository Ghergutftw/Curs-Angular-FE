import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styleUrls: ['./show-name.component.css']
})
export class ShowNameComponent  {

  name = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(){
    this.name = this.route.snapshot.params['name']
    console.log(this.name)
  }



}
