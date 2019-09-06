import { createAction, props } from '@ngrx/store';
import {
  LoadRandomJokesPayload,
  LoadRandomJokesSuccessPayload,
  LoadErrorPayload
} from '../jokes.types';

export enum ActionTypes {
  LOAD_RANDOM_JOKES = '[Jokes Feature] LOAD_RANDOM_JOKES',
  LOAD_RANDOM_JOKES_ERROR = '[Jokes Feature] LOAD_RANDOM_JOKES_ERROR',
  LOAD_RANDOM_JOKES_SUCCESS = '[Jokes Feature] LOAD_RANDOM_JOKES_SUCCESS'
}

export const loadRandomJokes = createAction(
  ActionTypes.LOAD_RANDOM_JOKES,
  props<LoadRandomJokesPayload>()
);

export const loadRandomJokesError = createAction(
  ActionTypes.LOAD_RANDOM_JOKES_ERROR,
  props<LoadErrorPayload>()
);

export const loadRandomJokesSuccess = createAction(
  ActionTypes.LOAD_RANDOM_JOKES_SUCCESS,
  props<LoadRandomJokesSuccessPayload>()
);
