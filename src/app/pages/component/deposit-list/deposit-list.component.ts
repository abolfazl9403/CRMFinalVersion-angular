import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-deposit-list',
  templateUrl: './deposit-list.component.html',
  styleUrls: ['./deposit-list.component.css']
})
export class DepositListComponent implements OnInit {
  constructor() { }
  @ViewChild(MatSort) sort: MatSort;
  title = 'dynamic-mat-table';
  tableCols = ['ID', 'user_id', 'name',
    'type', 'category_id', 'وضعیت',
    'create_time', 'amount_totally', 'amount_monthly',
    'nDate', 'month'];
  tableData = [
    {ID: 1,
      user_id: 'امین',
      name: 'صنذوق علی بابا',
      type: 1,
      category_id: 3,
      وضعیت: 'open',
      create_time: '1399/5/22',
      amount_totally: 20000000,
      amount_monthly: 1000000,
      nDate: '1399/5/22',
      month: 9202023033},
    {ID: 2,
      user_id: 'حسین',
      name: 'ms',
      type: 1,
      category_id: 3,
      وضعیت: 'open' ,
      create_time: '1399/5/22',
      amount_totally: 20000000,
      amount_monthly: 1000000,
      nDate: '1391/5/22',
      month: 9221192435},
    {ID: 3,
      user_id: 'mohamad',
      name: 'fourth',
      وضعیت: 'open',
      type: 1,
      category_id: 3,
      create_time: '1399/5/22',
      amount_totally: 20000000,
      amount_monthly: 1000000,
      nDate: ' ',
      month: 9166202020},
    {ID: 4,
      user_id: 'zahra123',
      name: 'third',
      type: 1,
      category_id: 3,
      وضعیت: 'close' ,
      create_time: '1399/5/22',
      amount_totally: 20000000,
      amount_monthly: 1000000,
      nDate: '1399/2/22',
      month: 9121234512},
    {ID: 5,
      user_id: 'حسن',
      name: 'second',
      type: 1,
      category_id: 3,
      وضعیت: 'open',
      create_time: '1399/5/22' ,
      amount_totally: 20000000,
      amount_monthly: 1000000,
      nDate: '1399/5/23',
      month: 9373733737},
    {ID: 6,
      user_id: 'قاسمم',
      name: 'first',
      type: 1,
      category_id: 3,
      وضعیت: 'open',
      create_time: '1399/5/22',
      amount_totally: 20000000,
      amount_monthly: 1000000,
      nDate: '0 ',
      month: 9909990099},
  ];


  ngOnInit() {

  }

}
