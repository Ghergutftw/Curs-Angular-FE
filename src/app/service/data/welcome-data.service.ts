import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class HelloWorldBean{
  public message;
  constructor(message: string) {
    this.message = message;
  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  constructor(
    public httpClient : HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.httpClient.get<HelloWorldBean>("http://localhost:8080/hello-bean")
  }

  executeHelloWithName(name: string){
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8080/hello/${name}`)
  }
}
