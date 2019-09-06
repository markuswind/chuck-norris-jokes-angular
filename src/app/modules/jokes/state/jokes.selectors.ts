import { createFeatureSelector, createSelector } from '@ngrx/store';

import { RootState } from 'src/app/app.types';

import { JOKES_FEATURE_KEY } from '../jokes.constants';
import { FeatureState } from '../jokes.types';

/*
 * SELECTORS
 */

export const selectFeature = createFeatureSelector<RootState, FeatureState>(
  JOKES_FEATURE_KEY
);

export const selectFavoriteJokes = createSelector(
  selectFeature,
  state => state.favoriteJokes
);

export const selectRandomJokes = createSelector(
  selectFeature,
  state => state.randomJokes
);
