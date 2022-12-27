import { Component } from '@angular/core';
import {TodoDataService} from "../service/data/todo-data.service";
import {Router} from "@angular/router";

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

  deleteMessage : string | unknown;

  constructor(
    private service: TodoDataService,
    private router: Router
  ) {

  }

  ngOnInit(){
    this.refreshPage()
  }

  refreshPage(){
    this.service.retrieveAllTodos('Madalin').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: number) {
    console.log(`Deleted Todo ${id}`)
    this.service.deleteTodo("Madalin" , id).subscribe(
      response =>{
        console.log("Deleted Succesfully")
        this.deleteMessage=`DELETED THE ${id} TODO SUCCEFULLY `
        // @ts-ignore
        // window.location.reload(false)
        this.refreshPage()
      },
      error => {
        console.log("Error Has been made")
        this.deleteMessage="AN ERROR has been made"
      }
    )
  }

  updateTodo(id : number) {
    console.log(`Updated the todo : ${id} `)
    this.router.navigate(['todos',id])
    //in functia navigaete "," joaca rol de /
  }

  createTodo() {
    console.log("CREATING TODO")
    this.router.navigate(['todos',-1])
  }
}
