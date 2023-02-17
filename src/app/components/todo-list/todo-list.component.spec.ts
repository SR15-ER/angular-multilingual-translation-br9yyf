import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent} from './todo-list.component';
import { TodoList } from "./../../store/models/todo.mock";
describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have todolist',()=>{
    component.todoList=TodoList;
    expect(component.todoList.length).toBeGreaterThan(0);
  })
});
