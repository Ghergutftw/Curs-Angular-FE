import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "../../list-todos/list-todos.component";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  constructor(
    public httpClient:HttpClient
  ) { }

  retrieveAllTodos(username :string){
    return this.httpClient.get<Todo[]>(`http://localhost:8080/user/${username}/todos`)
  }

  deleteTodo(username : string , id : number){
    return this.httpClient.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  retrieveTodo(username : string , id : number){
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  saveTodo(username:string , id: number , todo: Todo){
    return this.httpClient.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, todo) //url + body
  }

  createTodo(username:string ,todo: Todo){
    return this.httpClient.post<Todo>(`http://localhost:8080/users/${username}/todos`, todo) //url + body
  }





}
