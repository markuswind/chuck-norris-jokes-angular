import { Action } from '@ngrx/store';
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

export class LoadRandomJokes implements Action {
  readonly type = ActionTypes.LOAD_RANDOM_JOKES;
  constructor(public payload: LoadRandomJokesPayload) {}
}

export class LoadRandomJokesError implements Action {
  readonly type = ActionTypes.LOAD_RANDOM_JOKES_ERROR;
  constructor(public payload: LoadErrorPayload) {}
}

export class LoadRandomJokesSuccess implements Action {
  readonly type = ActionTypes.LOAD_RANDOM_JOKES_SUCCESS;
  constructor(public payload: LoadRandomJokesSuccessPayload) {}
}

export type Actions =
  | LoadRandomJokes
  | LoadRandomJokesError
  | LoadRandomJokesSuccess;
