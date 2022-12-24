import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public target: Date
  ) {
  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent  {

  todos= [
    new Todo(1,'Learn to Dance',false, new Date()),
    new Todo(2,'Learn to Cook',false, new Date()),
    new Todo(3,'Learn to Karate',false, new Date()),
    new Todo(4,'Study',false, new Date()),

  ]
  constructor() { }


}
