import {Component} from '@angular/core';
import {Todo} from '../list-todos/list-todos.component';
import {TodoDataService} from "../service/data/todo-data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  id: number | any
  todo!: Todo;

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(this.id, "", false, new Date())

    if (this.id != -1) {
      this.todoService.retrieveTodo("Madalin", this.id).subscribe(
        response => this.todo = response
      )
    }
  }

  updateTodo() {
    if (this.id === -1) {
      //CREATE
      this.todoService.createTodo('Madalin', this.todo).subscribe(
        data =>{
          console.log(data)
          this.router.navigate(["/todos"])
        }
      )
    }else{
      //UPDATE
      console.log("Saving todo")
      this.todoService.saveTodo("Madalin", this.id, this.todo).subscribe(
        response => {
          console.log(response)
          this.router.navigate(["/todos"])
        }
      )
    }
  }
}
