import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormComponent} from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let submitEl;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add todo',()=>{
    component.addTodoForm.setValue({
      "todoTitle":"test"
    });
    expect(submitEl.nativeElement.querySelectors('button')[1].disabled).toBeFalsy();
  })
});
