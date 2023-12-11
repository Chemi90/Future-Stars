import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-register-buisness',
  templateUrl: './register-buisness.component.html',
  styleUrls: ['./register-buisness.component.scss'],
  animations: [
    trigger('openClose', [
      state('true', style({ height: '*' })),
      state('false', style({ height: '0px' })),
      transition('false <=> true', [animate('0.20s ease')]),
    ]),
  ],
})
export class RegisterBuisnessComponent {
  send() {
    throw new Error('Method not implemented.');
  }
  preguntas = [] as any;
  isStep2 = false;

  constructor() {}
}
