import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-test-card',
  templateUrl: './ui-test-card.component.html',
  styleUrls: ['./ui-test-card.component.scss']
})
export class UiTestCardComponent implements OnInit {
  color: string;

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
