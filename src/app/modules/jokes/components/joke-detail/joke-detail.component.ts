import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Joke } from '../../jokes.types';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
  styleUrls: ['./joke-detail.component.scss']
})
export class JokeDetailComponent {
  @Input() joke: Joke;

  @Input() buttonText: string;
  @Output() buttonClick = new EventEmitter();

  constructor() {}
}
