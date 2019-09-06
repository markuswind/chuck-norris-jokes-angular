import { createAction, props } from '@ngrx/store';
import {
  AddFavoriteJokePayload,
  LoadRandomJokesPayload,
  LoadRandomJokesSuccessPayload,
  LoadErrorPayload,
  RemoveFavoriteJokePayload
} from '../jokes.types';

/*
 * TYPES
 */

enum ActionTypes {
  LOAD_RANDOM_JOKES = '[Jokes Feature] LOAD_RANDOM_JOKES',
  LOAD_RANDOM_JOKES_ERROR = '[Jokes Feature] LOAD_RANDOM_JOKES_ERROR',
  LOAD_RANDOM_JOKES_SUCCESS = '[Jokes Feature] LOAD_RANDOM_JOKES_SUCCESS',
  ADD_FAVORITE_JOKE = '[Jokes Feature] ADD_FAVORITE_JOKE',
  REMOVE_FAVORITE_JOKE = '[Jokes Feature] REMOVE_FAVORITE_JOKE'
}

/*
 * ACTIONS
 */

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

export const addFavoriteJoke = createAction(
  ActionTypes.ADD_FAVORITE_JOKE,
  props<AddFavoriteJokePayload>()
);

export const removeFavoriteJoke = createAction(
  ActionTypes.REMOVE_FAVORITE_JOKE,
  props<RemoveFavoriteJokePayload>()
);
