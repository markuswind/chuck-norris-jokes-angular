import { Action } from '@ngrx/store';

export enum ActionTypes {
  LOAD_RANDOM_JOKES = '[Jokes Feature] LOAD_RANDOM_JOKES'
}

export class LoadRandomJokes implements Action {
  readonly type = ActionTypes.LOAD_RANDOM_JOKES;
}

export type Actions = LoadRandomJokes;
