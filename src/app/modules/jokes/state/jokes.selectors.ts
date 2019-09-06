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

export const selectFavoriteJokes = createSelector(
  selectFeature,
  state => state.favoriteJokes
);

export const selectRandomJokes = createSelector(
  selectFeature,
  state => state.randomJokes
);
