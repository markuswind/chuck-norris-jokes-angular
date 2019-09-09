import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootState } from 'src/app/app.types';

import { MAX_NUM_OF_FAVORITES } from '../../jokes.constants';
import { Joke } from '../../jokes.types';

import {
  addRandomFavoriteJoke,
  removeFavoriteJoke
} from '../../state/jokes.actions';
import { selectFavoriteJokes } from '../../state/jokes.selectors';

/*
 * COMPONENT
 */

@Component({
  selector: 'app-favorite-jokes-list',
  templateUrl: './favorite-jokes-list.component.html',
  styleUrls: ['./favorite-jokes-list.component.scss']
})
export class FavoriteJokesListComponent implements OnDestroy {
  favoriteJokes$: Observable<Joke[]>;
  favoriteJokesLimit: number = MAX_NUM_OF_FAVORITES;

  randomJokesTimer = null;

  constructor(private store: Store<RootState>) {
    this.favoriteJokes$ = store.select(selectFavoriteJokes);
    this.favoriteJokes$.subscribe(
      favoriteJokes =>
        favoriteJokes.length >= this.favoriteJokesLimit &&
        this.clearRandomJokesTimer()
    );
  }

  ngOnDestroy() {
    this.clearRandomJokesTimer();
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

  removeFavoriteJoke(id: number) {
    this.store.dispatch(removeFavoriteJoke({ id }));
  }
}
