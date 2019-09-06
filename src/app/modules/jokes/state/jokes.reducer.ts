import { Action, createReducer, on } from '@ngrx/store';

import { FeatureState } from '../jokes.types';
import {
  loadRandomJokes,
  loadRandomJokesError,
  loadRandomJokesSuccess
} from './jokes.actions';

/*
 * CONSTANTS
 */

export const jokesFeatureKey = 'jokes';

export const initialState: FeatureState = {
  error: false,
  loading: false,
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
  }))
);

export function jokesReducer(state: FeatureState | undefined, action: Action) {
  return reducer(state, action);
}
