import { Injectable } from '@angular/core';

@Injectable({
  providedIn : 'root'
})
export class AuthService {
  private loggedInUser;

  setLoginUser(value) {
    this.loggedInUser =JSON.stringify(value)
    localStorage.setItem('loggedIn', this.loggedInUser);
  }

  LoginUser() {
    return JSON.parse(localStorage.getItem('loggedIn'));
  }
}