import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import {MatSnackBar} from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  addTodoForm:FormGroup
  todo = '';

  constructor(public todoService: TodoService,private fb : FormBuilder,private snackBar: MatSnackBar,private translate: TranslateService) { }

  ngOnInit(): void {
    this.addTodoForm= this.fb.group({
      todoTitle:['',Validators.required]
    })
  }

  onSubmit(){
    this.todoService.addTodo(this.addTodoForm.value.todoTitle);
    this.addTodoForm.reset();
    this.snackBar.openFromComponent(SnackBarSuccessComponent, {
      duration: 5000,
      panelClass: ['green-snackbar']
    });
}
}

@Component({
  selector: 'snack-bar-success',
  templateUrl: 'snack-bar-success.html',
  styles: [],
})
export class SnackBarSuccessComponent {
}