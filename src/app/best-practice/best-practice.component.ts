import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-practice',
  templateUrl: './best-practice.component.html',
  styleUrls: ['./best-practice.component.css']
})
export class BestPracticeComponent  {

  x=0;

  setValue(x) {
    this.x=x
  }

  getValue() {
    return this.x
  }

  doubleVal(x) {
    return x *2
  }


  multiplyX(y) {
    const double= this.doubleVal(y)
    return double + 1
  }




}
