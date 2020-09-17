import {Component, Input, OnInit} from '@angular/core';
import {ComponentBaseService} from '../../component-base.service';
import {SampleModel} from '../../sampleModel';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  @Input() data: [];
  @Input() childcurrentvalue:string = 'تاریخ';
  checkboxe = [];
  constructor(private cb: ComponentBaseService) {
    this.checkboxe = this.cb.getCheckBox(this.sample);
  }
  public sample: SampleModel[] = [{
    name: 'کاربران گزارش شده',

  },
    {
      name: 'کاربران بن شده',

    }, {
      name: 'آخرین کاربران ثبت‌نام شده',

    }];

  ngOnInit(): void {
  }
  getOutpotval($event){
    this.childcurrentvalue = $event;
  }
}
