import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bag-status',
  templateUrl: './bag-status.component.html',
  styleUrls: ['./bag-status.component.scss'],
})
export class BagStatusComponent implements OnInit {
  bolsaDineroParams = {
    start: 158000,
    end: 158879,
    interval: 20,
    increment: 11,
  };

  diasParams = {
    start: 20,
    end: 8,
    interval: 80,
    increment: 1,
  };

  constructor() {}

  ngOnInit(): void {}
}
