import { AccountService } from './services/account.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Future Stars';
  isOpened = false;

  constructor(private accountService: AccountService, private router: Router) {}

  regsiterStudent() {
    this.router.navigate(['/register-student']);
    this.isOpened = false;
  }

  registerBuisness() {
    this.router.navigate(['/register-buisness']);
    this.isOpened = false;
  }

  login() {
    this.router.navigate(['/login']);
    this.isOpened = false;
  }

  logout() {
    this.accountService.logout();
  }

  get buttonText(): string {
    return this.accountService.isLogged
      ? this.accountService.loggedUser.name
      : 'Entrar';
  }

  get isLogged(): boolean {
    return this.accountService.isLogged;
  }
}
