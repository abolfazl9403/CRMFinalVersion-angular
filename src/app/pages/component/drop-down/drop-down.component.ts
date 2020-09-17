import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  constructor() { }
  list: [{
    name: 'کاربران گزارش شده'
  }, {
    name: 'کاربران بن شده'
  }, {
    name: 'آخرین کاربران ثبت شده'
  }];


  ngOnInit(): void {
  }
}
