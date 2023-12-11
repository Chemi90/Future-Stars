import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  loggedUser!: User;

  constructor() {
    const user = localStorage.getItem('user');
    if (user) {
      this.loggedUser = JSON.parse(user);
    }
  }

  login(user: User) {
    this.loggedUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    // this.loggedUser = null;
    localStorage.removeItem('user');
    window.location.href = '/';
  }

  get isLogged(): boolean {
    return this.loggedUser !== null && this.loggedUser !== undefined;
  }
}
