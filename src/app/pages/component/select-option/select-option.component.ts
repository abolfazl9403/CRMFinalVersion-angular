import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

import {ComponentBaseService} from '../../component-base.service';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.css']
})
export class SelectOptionComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = [];
  constructor(private so: ComponentBaseService) {
    this.toppingList = this.so.getCheckBoxData(/**/);
  }
  /*public soption: selectable[] = [{
    name: 'آخرین کاربران ثبت‌نام شده',
    is_checked: true
  },
    {
      name: 'آخرین کاربران ثبت‌نام شده',
      is_checked: false
    }, {
      name: 'آخرین کاربران ثبت‌نام شده',
      is_checked: false
    }];*/
  ngOnInit(): void {
  }

}
