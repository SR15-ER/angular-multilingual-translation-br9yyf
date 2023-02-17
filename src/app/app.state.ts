
import { Todo } from "./store/models/todo";
import { User } from "./store/models/user";


export interface AppState extends Todo, User  {
    readonly todoStore: Todo[];
    readonly userStore: User[];
}
