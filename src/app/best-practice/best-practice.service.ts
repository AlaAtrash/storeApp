import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class BestPracticeService {
   private value;

   setValue(x) {
    this.getValue()
    this.value=x
   }

   getValue() {
    return this.value;
   }




}