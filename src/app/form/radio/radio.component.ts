import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.less']
})
export class RadioComponent implements OnInit {

  model = 'x';
  alert = true;

  disable = true;

  constructor() { }

  ngOnInit() {
  }

}
