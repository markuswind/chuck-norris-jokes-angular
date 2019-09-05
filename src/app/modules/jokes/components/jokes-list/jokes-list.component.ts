import { Component, OnInit } from '@angular/core';

import { Joke } from '../../jokes.types';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit {
  jokes: Joke[] = [];

  constructor() {}

  ngOnInit() {
    this.getJokes();
  }

  getJokes() {
    this.jokes = [
      {
        id: 0,
        joke: 'Everybody loves Raymond. Except Chuck Norris.',
        categories: ['tv', 'raymond']
      },
      {
        id: 1,
        joke: 'Chuck Norris his keyboard has the Any key.',
        categories: []
      }
    ];
  }
}
