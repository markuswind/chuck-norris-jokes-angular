import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootState } from 'src/app/app.types';

import { NUM_OF_RANDOM_JOKES } from '../../jokes.constants';
import { Joke } from '../../jokes.types';

import { addFavoriteJoke, loadRandomJokes } from '../../state/jokes.actions';
import { selectRandomJokes } from '../../state/jokes.selectors';

/*
 * COMPONENT
 */

@Component({
  selector: 'app-random-jokes-list',
  templateUrl: './random-jokes-list.component.html',
  styleUrls: ['./random-jokes-list.component.scss']
})
export class RandomJokesListComponent implements OnInit {
  randomJokes$: Observable<Joke[]>;

  constructor(private store: Store<RootState>) {
    this.randomJokes$ = store.select(selectRandomJokes);
  }

  ngOnInit() {
    this.fetchRandomJokes();
  }

  fetchRandomJokes() {
    this.store.dispatch(loadRandomJokes({ limit: NUM_OF_RANDOM_JOKES }));
  }

  addFavoriteJoke(joke: Joke) {
    this.store.dispatch(addFavoriteJoke({ joke }));
  }
}
