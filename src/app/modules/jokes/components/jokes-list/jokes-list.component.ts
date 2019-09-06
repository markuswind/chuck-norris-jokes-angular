import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootState } from 'src/app/app.types';

import {
  MAX_NUM_OF_FAVORITES,
  NUM_OF_RANDOM_JOKES
} from '../../jokes.constants';
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
    this.randomJokes$ = store.select(selectRandomJokes);

    this.favoriteJokes$ = store.select(selectFavoriteJokes);
    this.favoriteJokes$.subscribe(
      jokes =>
        jokes.length >= MAX_NUM_OF_FAVORITES && this.clearRandomJokesTimer()
    );
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
