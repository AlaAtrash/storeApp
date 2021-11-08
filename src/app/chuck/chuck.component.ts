import { Component, OnInit } from '@angular/core';
import {ChuckService} from './chuck.service';
import {Joke} from './joke.model';

@Component({
  selector: 'app-chuck',
  templateUrl: './chuck.component.html',
  styleUrls: ['./chuck.component.css']
})
export class ChuckComponent implements OnInit {

  jokes: Joke[] = [];

  constructor(private chuckService: ChuckService) { }

  ngOnInit() {
  }

  getNewJoke(): void {
    this.chuckService.getJokes().subscribe({next(data) {this.jokes = [{randomJoke: data.value}];
                                                        console.log('joke in subscribe -----------------------', data.value); }}) ;
    console.log('joke outside subscribe -----------------------', this.jokes);
  }

}
