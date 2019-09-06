import { FeatureState } from '../jokes.types';

import { Actions, ActionTypes } from './jokes.actions';

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

export const jokesReducer = (
  state = initialState,
  action: Actions
): FeatureState => {
  switch (action.type) {
    case ActionTypes.LOAD_RANDOM_JOKES:
      return {
        ...state,
        error: false,
        loading: true
      };
    case ActionTypes.LOAD_RANDOM_JOKES_SUCCESS:
      return {
        ...state,
        loading: false,
        randomJokes: action.payload.result
      };
    case ActionTypes.LOAD_RANDOM_JOKES_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
        randomJokes: []
      };
    default:
      return state;
  }
};
