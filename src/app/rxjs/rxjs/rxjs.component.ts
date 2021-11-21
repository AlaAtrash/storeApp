import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {

  constructor(private httpClient: HttpClient) { }

  first() {
    const observable= new Observable( subscriber => {
      subscriber.next('iphone');
      subscriber.next('tablet');
      setTimeout(() => {
        subscriber.next('TV');
        subscriber.complete()
      }, 3000)

    })
    console.log('just before subscribe');
    observable.subscribe({
      next(x){
        console.log(x)
      }
    })

  }

  second() {
    const obs= this.httpClient.get('http://localhost:3000/api/appareil')
    obs.subscribe(res => console.log(res))
    obs.subscribe(res2 => {
      console.log('2eme traitement')
      console.log(res2)
    })
  }

  async req() {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve('Hello')
      }, 3000)

    })
  }

  async third() {
    of(1, 2, 3)
    .pipe(map((x) => x * x))
    .subscribe((v) => console.log(`value: ${v}`));

  }



}
