import { Component, OnInit } from '@angular/core';
import { delay, timer } from 'rxjs';

import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

const accounts: User[] = [
  {
    email: 'test',
    password: 'test',
    imagen: '/assets/person1.png',
    name: 'Juan Perez',
    rol: 'estudiante',
  },
  {
    email: 'test2',
    password: 'test',
    imagen: '/assets/oracle.png',
    name: 'Oracle',
    rol: 'inversor',
  },
];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  pass = '';
  isLoading = false;
  error = false;

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit(): void {}

  login() {
    this.isLoading = true;

    timer(1000).subscribe(() => {
      this.isLoading = false;
      this.error = false;

      const account = accounts.find(
        (x) => x.email === this.email && x.password === this.pass
      );

      if (!account) {
        this.isLoading = false;
        this.error = true;
        return;
      }

      this.accountService.login(account);
      if (account.rol === 'inversor') {
        this.router.navigate(['/home-buisness']);
      } else if (account.rol === 'estudiante') {
        this.router.navigate(['/home-student']);
      }
    });
  }
}
