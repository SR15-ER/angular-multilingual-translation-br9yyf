import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http'; 
import { Todo } from './../store/models/todo'
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as TodoActions from './../store/actions/todo.actions';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  fav = [];
  todoList;
  length:number

  constructor(private store: Store<AppState>,private deletePopup: ToastrService,private http: HttpClient) { 
    let data= this.store.select('todoStore');
    store.subscribe(result => {
      this.todoList = result.todoStore;
    });

  }
  deleteTodo(item) {
    console.log(item,this.todoList)
    let index = this.todoList.indexOf(item);
    this.store.dispatch(new TodoActions.RemoveTodo(index)); 
  }
  // getFavoriteTodo() {
  //   console.log(this.todoList)
  //   this.store.dispatch(new TodoActions.FavoriteTodo()); 
  // }
  addTodo(title) {
    const item: Todo = {
      id: this.todoList.length + 2,
      isCompleted: false,
      isFavorite: false,
      date: new Date(),
      title: title
    }
    this.store.dispatch(new TodoActions.AddTodo(
     item
    ))
  }

  updateFav(){
    this.fav = JSON.parse(localStorage.getItem('favorite'));
  }
}
