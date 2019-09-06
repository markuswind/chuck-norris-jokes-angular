import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootState } from 'src/app/app.types';

import { Joke } from '../../jokes.types';
import {
  addFavoriteJoke,
  addRandomFavoriteJoke,
  loadRandomJokes,
  removeFavoriteJoke
} from '../../state/jokes.actions';
import {
  selectFavoriteJokes,
  selectRandomJokes
} from '../../state/jokes.selectors';

/*
 * CONSTANTS
 */

const NUM_OF_RANDOM_JOKES = 10;

/*
 * COMPONENT
 */

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.scss']
})
export class JokesListComponent implements OnInit, OnDestroy {
  favoriteJokes$: Observable<Joke[]>;
  randomJokes$: Observable<Joke[]>;
  randomJokesTimer: any;

  constructor(private store: Store<RootState>) {
    this.favoriteJokes$ = store.select(selectFavoriteJokes);
    this.randomJokes$ = store.select(selectRandomJokes);
  }

  ngOnInit() {
    this.fetchRandomJokes();
  }

  ngOnDestroy() {
    this.clearRandomJokesTimer();
  }

  fetchRandomJokes() {
    this.store.dispatch(loadRandomJokes({ limit: NUM_OF_RANDOM_JOKES }));
  }

  toggleRandomJokesTimer() {
    if (this.randomJokesTimer) {
      this.clearRandomJokesTimer();
    } else {
      this.randomJokesTimer = setInterval(() => {
        this.store.dispatch(addRandomFavoriteJoke());
      }, 1000);
    }
  }

  clearRandomJokesTimer() {
    clearInterval(this.randomJokesTimer);
    this.randomJokesTimer = null;
  }

  addFavoriteJoke(joke: Joke) {
    this.store.dispatch(addFavoriteJoke({ joke }));
  }

  removeFavoriteJoke(id: number) {
    this.store.dispatch(removeFavoriteJoke({ id }));
  }
}
