import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  snumber: number
  sname: string
  address:string
  mobile: number
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor(){}

  onSubmit(){
    const todo = {
      snumber:this.snumber,
      sname:this.sname,
      address:this.address,
      mobile:this.mobile

    }
    this.todoAdd.emit(todo);
  }


}
