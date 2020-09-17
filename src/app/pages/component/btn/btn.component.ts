import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  constructor() { }
  items = [{
    name: 'حذف',
  }, {
    name: 'ویرایش',
  }, {
    name: 'ثبت',
  }];
  ngOnInit(): void {
  }

}
