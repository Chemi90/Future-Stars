import { Component, OnInit } from '@angular/core';

import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-home-buisness',
  templateUrl: './home-buisness.component.html',
  styleUrls: ['./home-buisness.component.scss'],
})
export class HomeBuisnessComponent implements OnInit {
  datos = [
    { fecha: '09/23', valor: '136.755€', contribucion: '2.755€' },
    { fecha: '05/23', valor: '170.098€', contribucion: '8.305€' },
    { fecha: '01/23', valor: '111.645€', contribucion: '5.476€' },
    // Agrega más datos según sea necesario
  ];
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}
}
