import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormControlName, FormGroup, Validators} from '@angular/forms';


interface ITodo {
  id: number;
  content: string;
  complete: boolean;
}

let idfake = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  todoItem = new FormControl();
  todoForm: FormGroup;

  todoList: Array<ITodo> = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      inputTodo: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onchange() {
    // const {value} = this.todoItem;
    // if (value) {
    //   const todo: ITodo = {
    //     id: idfake++,
    //     content: value,
    //     complete: false
    //   };
    //   this.todoList.push(todo);
    //   console.log(this.todoList);
    //   this.todoItem.setValue('');
    // }
  }

  onSubmit = () => {
    const value1 = this.todoForm.get('inputTodo').value;
    if (value1) {
      const todo: ITodo = {
        id: idfake++,
        content: value1,
        complete: false
      };
      if(todo.content.length<5){
        return;
      }
      this.todoList.push(todo);
      console.log(this.todoList);
      this.todoItem.setValue('');
    }
  }
}
