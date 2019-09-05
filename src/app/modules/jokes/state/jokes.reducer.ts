import { FeatureState } from '../jokes.types';

import { Actions, ActionTypes } from './jokes.actions';
import { jokesMock } from './jokes.mocks';

/*
 * CONSTANTS
 */

export const jokesFeatureKey = 'jokes';

export const initialState: FeatureState = {
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
        randomJokes: jokesMock
      };
    default:
      return state;
  }
};
