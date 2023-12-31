import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './component/header-component/header-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponentComponent } from './component/footer-component/footer-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodosComponent } from './component/todos/todos.component';
import { TodoItemComponent } from './component/todo-item/todo-item.component';
import { AddTodoComponent } from './component/add-todo/add-todo.component';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './component/about/about.component';
import { NewsComponent } from './component/news/news.component';
import { LoginComponent } from './component/login/login.component';
import { ProductComponent } from './component/product/product.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    NewsComponent,
    LoginComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    // AuthService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
