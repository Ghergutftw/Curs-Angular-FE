import { Component } from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {resolve} from "@angular/compiler-cli";

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {
  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent  {

  todos : Todo[] | any;

  // todos= [
  //   new Todo(1,'Learn to Dance',false, new Date()),
  //   new Todo(2,'Learn to Cook',false, new Date()),
  //   new Todo(3,'Learn to Karate',false, new Date()),
  //   new Todo(4,'Study',false, new Date()),
  //
  // ]
  constructor(
    private service: TodoDataService
  ) {

  }

  ngOnInit(){
    this.service.retrieveAllTodos('Madalin').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }
    )
  }

}
