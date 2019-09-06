import { Action, createReducer, on } from '@ngrx/store';

import { FeatureState } from '../jokes.types';
import {
  addFavoriteJoke,
  loadRandomJokes,
  loadRandomJokesError,
  loadRandomJokesSuccess,
  removeFavoriteJoke
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

/*
 * REDUCER
 */

const reducer = createReducer(
  initialState,
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
    favoriteJokes: state.favoriteJokes
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
