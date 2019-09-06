import { Action, createReducer, on } from '@ngrx/store';

import { FeatureState } from '../jokes.types';
import {
  addFavoriteJoke,
  loadRandomJokes,
  loadRandomJokesError,
  loadRandomJokesSuccess,
  removeFavoriteJoke,
  update
} from './jokes.actions';

/*
 * CONSTANTS
 */

export const initialState: FeatureState = {
  error: false,
  loading: false,
  favoriteJokes: [],
  randomJokes: []
};

const MAX_NUM_OF_FAVORITES = 10;

/*
 * REDUCER
 *
 * FIXME: on update action shouldn't be needed?
 *        see: https://github.com/btroncone/ngrx-store-localstorage/issues/65
 */

const reducer = createReducer(
  initialState,
  on(update, state => ({ ...initialState, ...state })),
  on(loadRandomJokes, state => ({ ...state, error: false, loading: true })),
  on(loadRandomJokesSuccess, (state, payload) => ({
    ...state,
    loading: false,
    randomJokes: payload.result
  })),
  on(loadRandomJokesError, state => ({
    ...state,
    error: false,
    loading: false
  })),
  on(addFavoriteJoke, (state, payload) => ({
    ...state,
    favoriteJokes:
      state.favoriteJokes.length >= MAX_NUM_OF_FAVORITES
        ? state.favoriteJokes
        : state.favoriteJokes
            .filter(joke => joke.id !== payload.joke.id)
            .concat([payload.joke])
  })),
  on(removeFavoriteJoke, (state, payload) => ({
    ...state,
    favoriteJokes: state.favoriteJokes.filter(joke => joke.id !== payload.id)
  }))
);

export function jokesReducer(state: FeatureState | undefined, action: Action) {
  return reducer(state, action);
}
