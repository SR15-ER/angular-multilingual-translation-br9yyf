import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],

})
export class TodoListComponent implements OnInit {
  todoList;
  constructor(public todoService: TodoService, public route: ActivatedRoute,private store: Store<AppState>) {
    this.todoList = store.select('todoStore');
  }

  viewList: boolean = true;

  ngOnInit(): void {
    // this.todoList.subscribe(resp=>{
    //   this.favoriteTodo=resp.filter(x=>x.isFavorite);
    // })
    this.route.url.subscribe((data) => {
      if (data[0].path == 'list') {
        this.viewList = true;
      } else {
        this.viewList = false;
        this.todoService.updateFav();
      }
    });
  }
  logOut(){
    localStorage.removeItem('loggedIn');
  }
}
