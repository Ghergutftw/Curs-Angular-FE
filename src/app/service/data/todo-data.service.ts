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

}
