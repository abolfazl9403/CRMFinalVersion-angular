import { Injectable } from '@angular/core';
import {SampleModel} from './sampleModel';

@Injectable({
  providedIn: 'root'
})
export class ComponentBaseService {

  constructor() { }
  getCheckBoxData(){
    return ['اخرین کاربران ثبت شده ', 'کاربر گزارش شده', 'کاربر بن شده' , 'تمام کاربران'];
  }
  getCheckBox(SampleModelArray: SampleModel[]){
    return SampleModelArray;
  }
}
