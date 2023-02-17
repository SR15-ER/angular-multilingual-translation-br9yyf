import { TodoList } from "./../../store/models/todo.mock";
import { Todo } from "./../../store/models/todo";

import * as TodoActions from './../actions/todo.actions';

const initialState: Todo []=TodoList

export function reducer(state: Todo[] = initialState, action: TodoActions.Actions) {
    switch(action.type) {
        case TodoActions.ADD_TODO:
            return [...state, action.payload];
        case TodoActions.REMOVE_TODO:
            state.splice(action.payload, 1);
            return state;
            case TodoActions.FAVORITE_TODO:
                let fav=state.filter(x=>x.isFavorite);
                return fav;
        default:
            return state;
    }
}