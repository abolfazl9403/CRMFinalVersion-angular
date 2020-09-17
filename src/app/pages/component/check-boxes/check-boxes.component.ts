import {Component, Input, OnInit} from '@angular/core';
import {ComponentBaseService} from '../../component-base.service';
import {SampleModel} from '../../sampleModel';

@Component({
  selector: 'app-check-boxes',
  templateUrl: './check-boxes.component.html',
  styleUrls: ['./check-boxes.component.css']
})
export class CheckBoxesComponent implements OnInit {
  targetValue: boolean;
  @Input() data: [];
  checkboxes = [];
  constructor(private cb: ComponentBaseService) {
    this.checkboxes = this.cb.getCheckBox(this.sample);
  }
  public sample: SampleModel[] = [{
    name: 'آخرین کاربران ثبت‌نام شده',
  },
    {
      name: 'آخرین کاربران ثبت‌نام شده',
    }, {
      name: 'آخرین کاربران ثبت‌نام شده',
    }];
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onToggle(event: Event){
    this.targetValue = (event.target as HTMLInputElement).checked;
    console.log(this.targetValue);
  }
}
