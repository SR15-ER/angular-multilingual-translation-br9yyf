import { Injectable } from '@angular/core';
import { Users } from './../store/models/user.mock';
import { User } from './../store/models/user';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as UserActions from './../store/actions/user.actions';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = Users;

  constructor(private store: Store<AppState>) {}

  isAdmin(data: any) {
    let index = this.users.findIndex((x) => data.email === x.email);
    console.log(index)
    if (index > -1 && this.users[index].role === 'admin') return true;
    else return false;
  }

  addUser(data: any) {
    let id = this.users.length + 2;
    const item: User = {
      id: id,
      firstName: data.firstName,
      surName: data.surName,
      role: data.role,
      email: data.email,
      accountCreated: new Date(),
    };
    this.store.dispatch(new UserActions.AddUser(item));
  }
}
