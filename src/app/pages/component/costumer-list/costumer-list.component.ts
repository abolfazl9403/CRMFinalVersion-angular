import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-costumer-list',
  templateUrl: './costumer-list.component.html',
  styleUrls: ['./costumer-list.component.css']
})
export class CostumerListComponent implements OnInit {
  constructor() { }
  @ViewChild(MatSort) sort: MatSort;
  title = 'dynamic-mat-table';
  tableCols = ['ID', 'name', 'codeMelli', 'email', 'nDate', 'phone'];
  tableData = [
    {ID: 1, name: 'امین', codeMelli: 10079001112, email: 'H@mail.com', nDate: '1399/5/22', phone: 9202023033},
    {ID: 2, name: 'حسین', codeMelli: 4002612365, email: 'He@gmail.com' , nDate: '1391/5/22', phone: 9221192435},
    {ID: 3, name: 'mohamad', codeMelli: 694111002, email: 'Li@yahoo.ir', nDate: ' ', phone: 9166202020},
    {ID: 4, name: 'zahra123', codeMelli: 90122684854, email: 'Be@ko.co' , nDate: '1399/2/22', phone: 9121234512},
    {ID: 5, name: 'حسن', codeMelli: 1081165100, email: 'B@aa.com' , nDate: '1399/5/23', phone: 9373733737},
    {ID: 6, name: 'قاسمم', codeMelli: 1201070000, email: 'C@3.biz', nDate: ' ', phone: 9909990099},
  ];

  anotherTableCols = ['city', 'state', 'country', 'population'];
  anotherTableData = [
    {
      city: 'Hyderabad',
      state: 'Telangana',
      country: 'India',
      population: '10M'
    },
    {
      city: 'Salt Lake City',
      state: 'Utah',
      country: 'USA',
      population: '300k'
    },
    {
      city: 'Chennai',
      state: 'Tamil Nadu',
      country: 'India',
      population: '10M'
    },
    {
      city: 'New York City',
      state: 'New York',
      country: 'USA',
      population: '5M'
    },
    {
      city: 'Nellore',
      state: 'Andhra Pradesh',
      country: 'India',
      population: '3M'
    },
    {
      city: 'San Fransico',
      state: 'California',
      country: 'USA',
      population: '1M'
    },
  ];

  ngOnInit(): void {
  }
}
