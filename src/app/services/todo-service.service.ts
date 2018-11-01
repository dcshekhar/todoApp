import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getAllTodos() {
    return this.http.get("http://localhost:3000/todos");
  }
  createNewTodo(newTodo) {
    return this.http.post("http://localhost:3000/todos", newTodo);
  }
  deleteTodo(id) {
    return this.http.delete(`http://localhost:3000/todos/${id}`);
  }
  updateTodo(updatedTodo) {
    return this.http.put(
      `http://localhost:3000/todos/${updatedTodo.id}`,
      updatedTodo
    );
  }
}
