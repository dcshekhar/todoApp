import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TodosComponent } from "./todos/todos.component";
import { TodoService } from "./services/todo-service.service";

@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
