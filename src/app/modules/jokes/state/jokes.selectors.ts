import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RootState } from 'src/app/app.types';

import { jokesFeatureKey } from '../jokes.constants';
import { FeatureState } from '../jokes.types';

/*
 * SELECTORS
 */

export const selectFeature = createFeatureSelector<RootState, FeatureState>(
  jokesFeatureKey
);

export const selectRandomJokes = createSelector(
  selectFeature,
  (state: FeatureState) => state.randomJokes
);
