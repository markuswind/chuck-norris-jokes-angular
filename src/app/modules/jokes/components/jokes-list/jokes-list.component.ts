import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { RootState } from 'src/app/app.types';

import { Joke } from '../../jokes.types';
import {
  addFavoriteJoke,
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
export class JokesListComponent implements OnInit {
  favoriteJokes$: Observable<Joke[]>;
  randomJokes$: Observable<Joke[]>;

  constructor(private store: Store<RootState>) {
    this.favoriteJokes$ = store.select(selectFavoriteJokes);
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

  removeFavoriteJoke(id: number) {
    this.store.dispatch(removeFavoriteJoke({ id }));
  }
}
