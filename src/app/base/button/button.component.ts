import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  hotkey = 'alt+2';

  type = '';
  color = '#ff0000';
  outline = false;
  size = '';
  rounded = false;
  shape = '';
  flat = false;
  shadow = false;

  constructor() { }

  ngOnInit() {
  }

  test() {
    alert('Hotkey clicked');
  }

}
