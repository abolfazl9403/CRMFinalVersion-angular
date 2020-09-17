import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-d-cards',
  templateUrl: './d-cards.component.html',
  styleUrls: ['./d-cards.component.css']
})
export class DCardsComponent implements OnInit {
  @Input() cardData: {}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
