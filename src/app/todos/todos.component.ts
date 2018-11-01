import { TodoService } from "./../services/todo-service.service";
import { TodoModel } from "./../model/todo-model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "[app-todos]",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todosList: TodoModel[] = [];
  todo: TodoModel;
  constructor(private todoService: TodoService) {}

  fecthTodos() {
    this.todoService.getAllTodos().subscribe({
      next: (todo: TodoModel[]) => (this.todosList = todo),
      error: err => console.log(err)
    });
  }

  setTodoStatus(currentTodo) {
    currentTodo.isCompleted = !currentTodo.isCompleted;
    this.todoService.updateTodo(currentTodo).subscribe();
  }

  createNewTodo(todoFormData) {
    this.todo = new TodoModel(todoFormData);
    this.todoService.createNewTodo(this.todo).subscribe({
      next: () => this.fecthTodos()
    });
  }

  deleteTodo(todoId) {
    this.todoService
      .deleteTodo(todoId)
      .subscribe({ next: () => this.fecthTodos() });
  }

  editTodo(currentTodo, updatedValue?) {
    /* 
      checking if the current todo has  --- isEditing -- option enabled
      if part -- isEditing is false setting its value to true
      else part -- isEditing is True set its value to false and update todo using todoservice
    */
    if (!currentTodo.isEditing) currentTodo.isEditing = !currentTodo.isEditing;
    else {
      currentTodo.isEditing = !currentTodo.isEditing;
      currentTodo.task = updatedValue;
      this.todoService.updateTodo(currentTodo).subscribe();
    }
  }

  ngOnInit() {
    this.fecthTodos();
  }
}
