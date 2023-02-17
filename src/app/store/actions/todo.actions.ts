import { Action } from '@ngrx/store';
import { Todo } from './../../store/models/todo';

export const ADD_TODO = 'Add Todo';
export const REMOVE_TODO = 'Remove Todo';
export const FAVORITE_TODO = 'Get Favorite';

export class AddTodo implements Action {
  readonly type = ADD_TODO;

  constructor(public payload: Todo) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO;

  constructor(public payload: number) {}
}
export class FavoriteTodo implements Action {
  readonly type = FAVORITE_TODO;

  constructor() {}
}

export type Actions = AddTodo | RemoveTodo | FavoriteTodo;
